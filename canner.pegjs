start
= (__ @declare_grammar __)+

declare_grammar
= reserved:identifier
__ name:identifier
__ decorators:(decorator_statement)*
__ '{'
__ body:(@(key_value_pair/identifier) __)+
__ '}' {
	if (!Array.isArray(decorators)) {
		decorators = [decorators].filter(item => item)
	}

	return {
		reserved,
		name,
		decorators,
		body,
	}
}


decorator_statement
= '@' key:identifier
value:(
	__ '('
	__ @decorator_inner
	__ ')'
)? {
	return {
		key,
		value,
	}
}

decorator_inner
= function_call/equivalent/literal_string/attribute_assignment/identifier

key_value_pair
= key:identifier
__ ':'
__ value:element symbol:(@symbol/array_symbol)* 
__ decorators:(@decorator_statement __)*{
	if (!Array.isArray(decorators)) {
		decorators = [decorators].filter(item => item)
	}

	if (!Array.isArray(symbol)) {
		symbol = [symbol].filter(item => item)
	}

	return {
		key,
		value,
		symbol,
		decorators,
	}
}

symbol
= [!?]

array_symbol
= '[]'

attribute_assignment "屬性指定"
= key:identifier
__ '='
__ value:(literal_string/array) {
	return {
		key,
		value,
	}
}

equivalent "等式敘述"
= first:column_with_table __ '=' __ second:column_with_table {
	return [
		first,
		second,
	]
}

column_with_table "資料表欄位"
= '"'? table:identifier '"'? dot '"'? column:identifier '"'? {
	return {
		table,
		column,
	}
}

function_call "函式呼叫"
= method:identifier
__ '('
__ head:argument
__ tail:(__ ',' __ @argument)*
__ ')' {
	return {
		method,
		arguments: [
			head,
			...tail,
		],
	}
}

argument "函式參數"
= __ value:element {
	return value
}

dot
= '.'

array
= '['
__ head:element
__ tail:(__ ',' __ @element)*
__ ']' {
	return {
		head,
		...tail,
	}
}

element
= identifier/array/literal_string

literal_string
= '"' str:[^"]* '"' {return str.join("")}

accepted_all
= [^\n\r]* {
	return text()
}

identifier
= [a-zA-Z_]+ {return text()}

_
= whitespace+

__
= whitespace*

whitespace
= [ \t\n\r]