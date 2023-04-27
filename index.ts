import * as peggy from "peggy";
import fs from "fs";

const grammar = fs.readFileSync("./canner.pegjs", "utf8");
const example = fs.readFileSync("./example.txt", "utf8");
const parser = peggy.generate(grammar);

const result = parser.parse(example);

console.log(result);
