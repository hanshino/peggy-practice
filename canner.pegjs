start = (@defination_statement __)*

defination_statement
= enum_defination_statement
/ model_defination_statement
/ relation_defination_statement

model_defination_statement
= model __ name:variable __ sqlStat:sql_decorator_statement __ "{"
  __ stats:(model_field_statement)+ "}" {
	return {
		type: "model",
		name,
		sql: sqlStat.sql,
		fields: stats
	}
}

model_field_statement
= stat:(
	model_field_relation_defination_statement
/ model_field_type_defination_statement
/ model_field_enum_defination_statement
) {
	return stat
}

model_field_type_defination_statement
= key:variable __ ":" __ value:variable required:"!"? __ {
	return { type: "type", key, value, required: !!required }
}

model_field_enum_defination_statement
= key:variable __ ":" __ value:variable __ {
	return { type: "enum", key, value }
}

model_field_relation_defination_statement
= key:variable
__ ":"
__ value:variable is_array:model_array_symbol
__ relation:model_relation_decorator_statement __ {
	return {
		type: "relation",
		key,
		value,
		relation,
		array: !!is_array
	}
}

model_array_symbol
= "[]"?

model_relation_decorator_statement
= relation_decorator __ "(" __ relation:variable __ ")" {
	return relation
}

relation_decorator
= "@relation"i

relation_defination_statement
= relation __ name:variable __ condStat:condition_decorator_statement __ "{"
  attrs:(__ @(relation_model_statement / relation_type_statement) __)+ "}" {
	return {
		type: "relation",
		name,
		condition: condStat,
		attrs
	}
}

relation_model_statement
= "models" __ ":" __ "[" __ head:variable __ tail:("," __ @variable __)* "]" {
	return {
		type: "models",
		value: [head, ...tail]
	}
}

relation_type_statement
= "type" __ ":" __ type:variable {
	return {
		type: "type",
		value: type.trim()
	}
}

sql_decorator_statement
= sql_decorator __ "(\"" sql:sql "\")" {
  return { sql }
}

sql
= [^"]* {
	return text()
}

sql_decorator
= "@sql"i

condition_decorator_statement
= condition_decorator 
__ "(" leftTable:variable "." leftCol:variable __ "=" __ rightTable:variable "." rightCol:variable ")" {
	return {
		leftTable,
		leftCol,
		rightTable,
		rightCol
	}
}

condition_decorator
= "@condition"i

enum_defination_statement
= enum __ name:variable __ "{" __ head:enum_value __ tail:( __ @enum_value __)* "}" {
	return {
		type: "enum",
		name,
		values: [head, ...tail]
	}
}

enum_value
= variable

variable
= [a-zA-Z_]+ {return text()}

reserved
= enum / model / relation

enum
= "enum"i

model
= "model"i

relation
= "relation"i

_
= whitespace+ {
	return null
}

__
= whitespace* {
	return null
}

whitespace
= [ \t\n\r]