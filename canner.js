// Generated by Peggy 3.0.2.
//
// https://peggyjs.org/

"use strict";

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))
      ? this.location.source.offset(s)
      : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = (last - s.column) || 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + offset_s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
          + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { start: peg$parsestart };
  var peg$startRuleFunction = peg$parsestart;

  var peg$c0 = "{";
  var peg$c1 = "}";
  var peg$c2 = ":";
  var peg$c3 = "!";
  var peg$c4 = "[]";
  var peg$c5 = "(";
  var peg$c6 = ")";
  var peg$c7 = "@relation";
  var peg$c8 = "models";
  var peg$c9 = "[";
  var peg$c10 = ",";
  var peg$c11 = "]";
  var peg$c12 = "type";
  var peg$c13 = "(\"";
  var peg$c14 = "\")";
  var peg$c15 = "@sql";
  var peg$c16 = ".";
  var peg$c17 = "=";
  var peg$c18 = "@condition";
  var peg$c19 = "enum";
  var peg$c20 = "model";
  var peg$c21 = "relation";

  var peg$r0 = /^[^"]/;
  var peg$r1 = /^[a-zA-Z_]/;
  var peg$r2 = /^[ \t\n\r]/;

  var peg$e0 = peg$literalExpectation("{", false);
  var peg$e1 = peg$literalExpectation("}", false);
  var peg$e2 = peg$literalExpectation(":", false);
  var peg$e3 = peg$literalExpectation("!", false);
  var peg$e4 = peg$literalExpectation("[]", false);
  var peg$e5 = peg$literalExpectation("(", false);
  var peg$e6 = peg$literalExpectation(")", false);
  var peg$e7 = peg$literalExpectation("@relation", true);
  var peg$e8 = peg$literalExpectation("models", false);
  var peg$e9 = peg$literalExpectation("[", false);
  var peg$e10 = peg$literalExpectation(",", false);
  var peg$e11 = peg$literalExpectation("]", false);
  var peg$e12 = peg$literalExpectation("type", false);
  var peg$e13 = peg$literalExpectation("(\"", false);
  var peg$e14 = peg$literalExpectation("\")", false);
  var peg$e15 = peg$classExpectation(["\""], true, false);
  var peg$e16 = peg$literalExpectation("@sql", true);
  var peg$e17 = peg$literalExpectation(".", false);
  var peg$e18 = peg$literalExpectation("=", false);
  var peg$e19 = peg$literalExpectation("@condition", true);
  var peg$e20 = peg$classExpectation([["a", "z"], ["A", "Z"], "_"], false, false);
  var peg$e21 = peg$literalExpectation("enum", true);
  var peg$e22 = peg$literalExpectation("model", true);
  var peg$e23 = peg$literalExpectation("relation", true);
  var peg$e24 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false);

  var peg$f0 = function(name, sqlStat, stats) {
	return {
		type: "model",
		name,
		sql: sqlStat.sql,
		fields: stats
	}
};
  var peg$f1 = function(stat) {
	return stat
};
  var peg$f2 = function(key, value, required) {
	return { type: "type", key, value, required: !!required }
};
  var peg$f3 = function(key, value) {
	return { type: "enum", key, value }
};
  var peg$f4 = function(key, value, is_array, relation) {
	return {
		type: "relation",
		key,
		value,
		relation,
		array: !!is_array
	}
};
  var peg$f5 = function(relation) {
	return relation
};
  var peg$f6 = function(name, condStat, attrs) {
	return {
		type: "relation",
		name,
		condition: condStat,
		attrs
	}
};
  var peg$f7 = function(head, tail) {
	return {
		type: "models",
		value: [head, ...tail]
	}
};
  var peg$f8 = function(type) {
	return {
		type: "type",
		value: type.trim()
	}
};
  var peg$f9 = function(sql) {
  return { sql }
};
  var peg$f10 = function() {
	return text()
};
  var peg$f11 = function(leftTable, leftCol, rightTable, rightCol) {
	return {
		leftTable,
		leftCol,
		rightTable,
		rightCol
	}
};
  var peg$f12 = function(name, head, tail) {
	return {
		type: "enum",
		name,
		values: [head, ...tail]
	}
};
  var peg$f13 = function() {return text()};
  var peg$f14 = function() {
	return null
};
  var peg$f15 = function() {
	return null
};
  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = 0;
  var peg$maxFailExpected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    if (offset && peg$source && (typeof peg$source.offset === "function")) {
      res.start = peg$source.offset(res.start);
      res.end = peg$source.offset(res.end);
    }
    return res;
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsestart() {
    var s0, s1, s2, s3;

    s0 = [];
    s1 = peg$currPos;
    s2 = peg$parsedefination_statement();
    if (s2 !== peg$FAILED) {
      s3 = peg$parse__();
      s1 = s2;
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$currPos;
      s2 = peg$parsedefination_statement();
      if (s2 !== peg$FAILED) {
        s3 = peg$parse__();
        s1 = s2;
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parsedefination_statement() {
    var s0;

    s0 = peg$parseenum_defination_statement();
    if (s0 === peg$FAILED) {
      s0 = peg$parsemodel_defination_statement();
      if (s0 === peg$FAILED) {
        s0 = peg$parserelation_defination_statement();
      }
    }

    return s0;
  }

  function peg$parsemodel_defination_statement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

    s0 = peg$currPos;
    s1 = peg$parsemodel();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parsevariable();
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parsesql_decorator_statement();
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          if (input.charCodeAt(peg$currPos) === 123) {
            s7 = peg$c0;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e0); }
          }
          if (s7 !== peg$FAILED) {
            s8 = peg$parse__();
            s9 = [];
            s10 = peg$parsemodel_field_statement();
            if (s10 !== peg$FAILED) {
              while (s10 !== peg$FAILED) {
                s9.push(s10);
                s10 = peg$parsemodel_field_statement();
              }
            } else {
              s9 = peg$FAILED;
            }
            if (s9 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s10 = peg$c1;
                peg$currPos++;
              } else {
                s10 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$e1); }
              }
              if (s10 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f0(s3, s5, s9);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemodel_field_statement() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parsemodel_field_relation_defination_statement();
    if (s1 === peg$FAILED) {
      s1 = peg$parsemodel_field_type_defination_statement();
      if (s1 === peg$FAILED) {
        s1 = peg$parsemodel_field_enum_defination_statement();
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f1(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsemodel_field_type_defination_statement() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parsevariable();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (input.charCodeAt(peg$currPos) === 58) {
        s3 = peg$c2;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parsevariable();
        if (s5 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 33) {
            s6 = peg$c3;
            peg$currPos++;
          } else {
            s6 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e3); }
          }
          if (s6 === peg$FAILED) {
            s6 = null;
          }
          s7 = peg$parse__();
          peg$savedPos = s0;
          s0 = peg$f2(s1, s5, s6);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemodel_field_enum_defination_statement() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = peg$parsevariable();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (input.charCodeAt(peg$currPos) === 58) {
        s3 = peg$c2;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parsevariable();
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          peg$savedPos = s0;
          s0 = peg$f3(s1, s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemodel_field_relation_defination_statement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    s0 = peg$currPos;
    s1 = peg$parsevariable();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (input.charCodeAt(peg$currPos) === 58) {
        s3 = peg$c2;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parsevariable();
        if (s5 !== peg$FAILED) {
          s6 = peg$parsemodel_array_symbol();
          s7 = peg$parse__();
          s8 = peg$parsemodel_relation_decorator_statement();
          if (s8 !== peg$FAILED) {
            s9 = peg$parse__();
            peg$savedPos = s0;
            s0 = peg$f4(s1, s5, s6, s8);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsemodel_array_symbol() {
    var s0;

    if (input.substr(peg$currPos, 2) === peg$c4) {
      s0 = peg$c4;
      peg$currPos += 2;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e4); }
    }
    if (s0 === peg$FAILED) {
      s0 = null;
    }

    return s0;
  }

  function peg$parsemodel_relation_decorator_statement() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parserelation_decorator();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c5;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e5); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parsevariable();
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          if (input.charCodeAt(peg$currPos) === 41) {
            s7 = peg$c6;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e6); }
          }
          if (s7 !== peg$FAILED) {
            peg$savedPos = s0;
            s0 = peg$f5(s5);
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parserelation_decorator() {
    var s0;

    if (input.substr(peg$currPos, 9).toLowerCase() === peg$c7) {
      s0 = input.substr(peg$currPos, 9);
      peg$currPos += 9;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e7); }
    }

    return s0;
  }

  function peg$parserelation_defination_statement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

    s0 = peg$currPos;
    s1 = peg$parserelation();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parsevariable();
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parsecondition_decorator_statement();
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          if (input.charCodeAt(peg$currPos) === 123) {
            s7 = peg$c0;
            peg$currPos++;
          } else {
            s7 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e0); }
          }
          if (s7 !== peg$FAILED) {
            s8 = [];
            s9 = peg$currPos;
            s10 = peg$parse__();
            s11 = peg$parserelation_model_statement();
            if (s11 === peg$FAILED) {
              s11 = peg$parserelation_type_statement();
            }
            if (s11 !== peg$FAILED) {
              s12 = peg$parse__();
              s9 = s11;
            } else {
              peg$currPos = s9;
              s9 = peg$FAILED;
            }
            if (s9 !== peg$FAILED) {
              while (s9 !== peg$FAILED) {
                s8.push(s9);
                s9 = peg$currPos;
                s10 = peg$parse__();
                s11 = peg$parserelation_model_statement();
                if (s11 === peg$FAILED) {
                  s11 = peg$parserelation_type_statement();
                }
                if (s11 !== peg$FAILED) {
                  s12 = peg$parse__();
                  s9 = s11;
                } else {
                  peg$currPos = s9;
                  s9 = peg$FAILED;
                }
              }
            } else {
              s8 = peg$FAILED;
            }
            if (s8 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s9 = peg$c1;
                peg$currPos++;
              } else {
                s9 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$e1); }
              }
              if (s9 !== peg$FAILED) {
                peg$savedPos = s0;
                s0 = peg$f6(s3, s5, s8);
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parserelation_model_statement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 6) === peg$c8) {
      s1 = peg$c8;
      peg$currPos += 6;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e8); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (input.charCodeAt(peg$currPos) === 58) {
        s3 = peg$c2;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        if (input.charCodeAt(peg$currPos) === 91) {
          s5 = peg$c9;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e9); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parsevariable();
          if (s7 !== peg$FAILED) {
            s8 = peg$parse__();
            s9 = [];
            s10 = peg$currPos;
            if (input.charCodeAt(peg$currPos) === 44) {
              s11 = peg$c10;
              peg$currPos++;
            } else {
              s11 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e10); }
            }
            if (s11 !== peg$FAILED) {
              s12 = peg$parse__();
              s13 = peg$parsevariable();
              if (s13 !== peg$FAILED) {
                s14 = peg$parse__();
                s10 = s13;
              } else {
                peg$currPos = s10;
                s10 = peg$FAILED;
              }
            } else {
              peg$currPos = s10;
              s10 = peg$FAILED;
            }
            while (s10 !== peg$FAILED) {
              s9.push(s10);
              s10 = peg$currPos;
              if (input.charCodeAt(peg$currPos) === 44) {
                s11 = peg$c10;
                peg$currPos++;
              } else {
                s11 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$e10); }
              }
              if (s11 !== peg$FAILED) {
                s12 = peg$parse__();
                s13 = peg$parsevariable();
                if (s13 !== peg$FAILED) {
                  s14 = peg$parse__();
                  s10 = s13;
                } else {
                  peg$currPos = s10;
                  s10 = peg$FAILED;
                }
              } else {
                peg$currPos = s10;
                s10 = peg$FAILED;
              }
            }
            if (input.charCodeAt(peg$currPos) === 93) {
              s10 = peg$c11;
              peg$currPos++;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e11); }
            }
            if (s10 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f7(s7, s9);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parserelation_type_statement() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4) === peg$c12) {
      s1 = peg$c12;
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e12); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (input.charCodeAt(peg$currPos) === 58) {
        s3 = peg$c2;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e2); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        s5 = peg$parsevariable();
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f8(s5);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesql_decorator_statement() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    s1 = peg$parsesql_decorator();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (input.substr(peg$currPos, 2) === peg$c13) {
        s3 = peg$c13;
        peg$currPos += 2;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e13); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsesql();
        if (input.substr(peg$currPos, 2) === peg$c14) {
          s5 = peg$c14;
          peg$currPos += 2;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e14); }
        }
        if (s5 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f9(s4);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsesql() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$r0.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e15); }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e15); }
      }
    }
    peg$savedPos = s0;
    s1 = peg$f10();
    s0 = s1;

    return s0;
  }

  function peg$parsesql_decorator() {
    var s0;

    if (input.substr(peg$currPos, 4).toLowerCase() === peg$c15) {
      s0 = input.substr(peg$currPos, 4);
      peg$currPos += 4;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e16); }
    }

    return s0;
  }

  function peg$parsecondition_decorator_statement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

    s0 = peg$currPos;
    s1 = peg$parsecondition_decorator();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      if (input.charCodeAt(peg$currPos) === 40) {
        s3 = peg$c5;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e5); }
      }
      if (s3 !== peg$FAILED) {
        s4 = peg$parsevariable();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 46) {
            s5 = peg$c16;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e17); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parsevariable();
            if (s6 !== peg$FAILED) {
              s7 = peg$parse__();
              if (input.charCodeAt(peg$currPos) === 61) {
                s8 = peg$c17;
                peg$currPos++;
              } else {
                s8 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$e18); }
              }
              if (s8 !== peg$FAILED) {
                s9 = peg$parse__();
                s10 = peg$parsevariable();
                if (s10 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 46) {
                    s11 = peg$c16;
                    peg$currPos++;
                  } else {
                    s11 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$e17); }
                  }
                  if (s11 !== peg$FAILED) {
                    s12 = peg$parsevariable();
                    if (s12 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 41) {
                        s13 = peg$c6;
                        peg$currPos++;
                      } else {
                        s13 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$e6); }
                      }
                      if (s13 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f11(s4, s6, s10, s12);
                      } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s0;
                      s0 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsecondition_decorator() {
    var s0;

    if (input.substr(peg$currPos, 10).toLowerCase() === peg$c18) {
      s0 = input.substr(peg$currPos, 10);
      peg$currPos += 10;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e19); }
    }

    return s0;
  }

  function peg$parseenum_defination_statement() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13;

    s0 = peg$currPos;
    s1 = peg$parseenum();
    if (s1 !== peg$FAILED) {
      s2 = peg$parse__();
      s3 = peg$parsevariable();
      if (s3 !== peg$FAILED) {
        s4 = peg$parse__();
        if (input.charCodeAt(peg$currPos) === 123) {
          s5 = peg$c0;
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e0); }
        }
        if (s5 !== peg$FAILED) {
          s6 = peg$parse__();
          s7 = peg$parsevariable();
          if (s7 !== peg$FAILED) {
            s8 = peg$parse__();
            s9 = [];
            s10 = peg$currPos;
            s11 = peg$parse__();
            s12 = peg$parsevariable();
            if (s12 !== peg$FAILED) {
              s13 = peg$parse__();
              s10 = s12;
            } else {
              peg$currPos = s10;
              s10 = peg$FAILED;
            }
            while (s10 !== peg$FAILED) {
              s9.push(s10);
              s10 = peg$currPos;
              s11 = peg$parse__();
              s12 = peg$parsevariable();
              if (s12 !== peg$FAILED) {
                s13 = peg$parse__();
                s10 = s12;
              } else {
                peg$currPos = s10;
                s10 = peg$FAILED;
              }
            }
            if (input.charCodeAt(peg$currPos) === 125) {
              s10 = peg$c1;
              peg$currPos++;
            } else {
              s10 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e1); }
            }
            if (s10 !== peg$FAILED) {
              peg$savedPos = s0;
              s0 = peg$f12(s3, s7, s9);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parsevariable() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$r1.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e20); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$r1.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e20); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f13();
    }
    s0 = s1;

    return s0;
  }

  function peg$parsereserved() {
    var s0;

    s0 = peg$parseenum();
    if (s0 === peg$FAILED) {
      s0 = peg$parsemodel();
      if (s0 === peg$FAILED) {
        s0 = peg$parserelation();
      }
    }

    return s0;
  }

  function peg$parseenum() {
    var s0;

    if (input.substr(peg$currPos, 4).toLowerCase() === peg$c19) {
      s0 = input.substr(peg$currPos, 4);
      peg$currPos += 4;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e21); }
    }

    return s0;
  }

  function peg$parsemodel() {
    var s0;

    if (input.substr(peg$currPos, 5).toLowerCase() === peg$c20) {
      s0 = input.substr(peg$currPos, 5);
      peg$currPos += 5;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e22); }
    }

    return s0;
  }

  function peg$parserelation() {
    var s0;

    if (input.substr(peg$currPos, 8).toLowerCase() === peg$c21) {
      s0 = input.substr(peg$currPos, 8);
      peg$currPos += 8;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e23); }
    }

    return s0;
  }

  function peg$parse_() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewhitespace();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewhitespace();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f14();
    }
    s0 = s1;

    return s0;
  }

  function peg$parse__() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewhitespace();
    }
    peg$savedPos = s0;
    s1 = peg$f15();
    s0 = s1;

    return s0;
  }

  function peg$parsewhitespace() {
    var s0;

    if (peg$r2.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e24); }
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
