import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  text: string = '';

  codeMirror = {
    themes :[{ "text": "Select a theme", "value": "Select a theme" }, { "text": "all-hallow-eve", "value": "all-hallow-eve" }, { "text": "amy", "value": "amy" }, { "text": "argonaut", "value": "argonaut" }, { "text": "arona", "value": "arona" }, { "text": "bbedit", "value": "bbedit" }, { "text": "bespin", "value": "bespin" }, { "text": "birds-of-paradise", "value": "birds-of-paradise" }, { "text": "black-pearl-ii", "value": "black-pearl-ii" }, { "text": "black-pearl", "value": "black-pearl" }, { "text": "blackboard-black", "value": "blackboard-black" }, { "text": "blackboard", "value": "blackboard" }, { "text": "bongzilla", "value": "bongzilla" }, { "text": "chanfle", "value": "chanfle" }, { "text": "chrome-devtools", "value": "chrome-devtools" }, { "text": "classic-modified", "value": "classic-modified" }, { "text": "clouds-midnight", "value": "clouds-midnight" }, { "text": "clouds", "value": "clouds" }, { "text": "cobalt", "value": "cobalt" }, { "text": "coda", "value": "coda" }, { "text": "cssedit", "value": "cssedit" }, { "text": "cube2media", "value": "cube2media" }, { "text": "darkpastel", "value": "darkpastel" }, { "text": "dawn", "value": "dawn" }, { "text": "django-(smoothy)", "value": "django-(smoothy)" }, { "text": "django", "value": "django" }, { "text": "eiffel", "value": "eiffel" }, { "text": "emacs-strict", "value": "emacs-strict" }, { "text": "espresso-libre", "value": "espresso-libre" }, { "text": "espresso-soda", "value": "espresso-soda" }, { "text": "espresso-tutti", "value": "espresso-tutti" }, { "text": "espresso", "value": "espresso" }, { "text": "fade-to-grey", "value": "fade-to-grey" }, { "text": "fake", "value": "fake" }, { "text": "fantasyscript", "value": "fantasyscript" }, { "text": "fluidvision", "value": "fluidvision" }, { "text": "freckle", "value": "freckle" }, { "text": "friendship-bracelet", "value": "friendship-bracelet" }, { "text": "github", "value": "github" }, { "text": "glitterbomb", "value": "glitterbomb" }, { "text": "happy-happy-joy-joy-2", "value": "happy-happy-joy-joy-2" }, { "text": "idle", "value": "idle" }, { "text": "idlefingers", "value": "idlefingers" }, { "text": "iplastic", "value": "iplastic" }, { "text": "ir_black", "value": "ir_black" }, { "text": "ir_white", "value": "ir_white" }, { "text": "johnny", "value": "johnny" }, { "text": "juicy", "value": "juicy" }, { "text": "krtheme", "value": "krtheme" }, { "text": "kuroir", "value": "kuroir" }, { "text": "lazy", "value": "lazy" }, { "text": "lowlight", "value": "lowlight" }, { "text": "mac-classic", "value": "mac-classic" }, { "text": "made-of-code", "value": "made-of-code" }, { "text": "magicwb-(amiga)", "value": "magicwb-(amiga)" }, { "text": "merbivore-soft", "value": "merbivore-soft" }, { "text": "merbivore", "value": "merbivore" }, { "text": "monoindustrial", "value": "monoindustrial" }, { "text": "monokai-bright", "value": "monokai-bright" }, { "text": "monokai-fannonedition", "value": "monokai-fannonedition" }, { "text": "monokai-sublime", "value": "monokai-sublime" }, { "text": "monokai", "value": "monokai" }, { "text": "mreq", "value": "mreq" }, { "text": "nightlion", "value": "nightlion" }, { "text": "notebook", "value": "notebook" }, { "text": "oceanic-muted", "value": "oceanic-muted" }, { "text": "oceanic", "value": "oceanic" }, { "text": "pastels-on-dark", "value": "pastels-on-dark" }, { "text": "pastie", "value": "pastie" }, { "text": "plasticcodewrap", "value": "plasticcodewrap" }, { "text": "prospettiva", "value": "prospettiva" }, { "text": "putty", "value": "putty" }, { "text": "rails-envy", "value": "rails-envy" }, { "text": "railscasts", "value": "railscasts" }, { "text": "rdark", "value": "rdark" }, { "text": "rhuk", "value": "rhuk" }, { "text": "ryan-light", "value": "ryan-light" }, { "text": "sidewalkchalk", "value": "sidewalkchalk" }, { "text": "slush-&-poppies", "value": "slush-&-poppies" }, { "text": "smoothy", "value": "smoothy" }, { "text": "solarized-(dark)", "value": "solarized-(dark)" }, { "text": "solarized-(light)", "value": "solarized-(light)" }, { "text": "spacecadet", "value": "spacecadet" }, { "text": "spectacular", "value": "spectacular" }, { "text": "summer-sun", "value": "summer-sun" }, { "text": "summerfruit", "value": "summerfruit" }, { "text": "sunburst", "value": "sunburst" }, { "text": "swyphs-ii", "value": "swyphs-ii" }, { "text": "tango", "value": "tango" }, { "text": "text-ex-machina", "value": "text-ex-machina" }, { "text": "tomorrow-night-blue", "value": "tomorrow-night-blue" }, { "text": "tomorrow-night-bright", "value": "tomorrow-night-bright" }, { "text": "tomorrow-night-eighties", "value": "tomorrow-night-eighties" }, { "text": "tomorrow-night", "value": "tomorrow-night" }, { "text": "tomorrow", "value": "tomorrow" }, { "text": "toulousse-lautrec", "value": "toulousse-lautrec" }, { "text": "toy-chest", "value": "toy-chest" }, { "text": "tubster", "value": "tubster" }, { "text": "twilight", "value": "twilight" }, { "text": "venom", "value": "venom" }, { "text": "vibrant-fin", "value": "vibrant-fin" }, { "text": "vibrant-ink", "value": "vibrant-ink" }, { "text": "vibrant-tango", "value": "vibrant-tango" }, { "text": "zenburnesque", "value": "zenburnesque" }],
    languages : [{ "text": "Select a language", "value": "Select a language" },{"text":"APL","value":"apl"},{"text":"PGP","value":"asciiarmor"},{"text":"ASN.1","value":"asn.1"},{"text":"Asterisk","value":"asterisk"},{"text":"Brainfuck","value":"brainfuck"},{"text":"C","value":"clike"},{"text":"C++","value":"clike"},{"text":"Cobol","value":"cobol"},{"text":"C#","value":"clike"},{"text":"Clojure","value":"clojure"},{"text":"ClojureScript","value":"clojure"},{"text":"Closure Stylesheets (GSS)","value":"css"},{"text":"CMake","value":"cmake"},{"text":"CoffeeScript","value":"coffeescript"},{"text":"Common Lisp","value":"commonlisp"},{"text":"Cypher","value":"cypher"},{"text":"Cython","value":"python"},{"text":"Crystal","value":"crystal"},{"text":"CSS","value":"css"},{"text":"CQL","value":"sql"},{"text":"D","value":"d"},{"text":"Dart","value":"dart"},{"text":"diff","value":"diff"},{"text":"Django","value":"django"},{"text":"Dockerfile","value":"dockerfile"},{"text":"DTD","value":"dtd"},{"text":"Dylan","value":"dylan"},{"text":"EBNF","value":"ebnf"},{"text":"ECL","value":"ecl"},{"text":"edn","value":"clojure"},{"text":"Eiffel","value":"eiffel"},{"text":"Elm","value":"elm"},{"text":"Embedded JavaScript","value":"htmlembedded"},{"text":"Embedded Ruby","value":"htmlembedded"},{"text":"Erlang","value":"erlang"},{"text":"Esper","value":"sql"},{"text":"Factor","value":"factor"},{"text":"FCL","value":"fcl"},{"text":"Forth","value":"forth"},{"text":"Fortran","value":"fortran"},{"text":"F#","value":"mllike"},{"text":"Gas","value":"gas"},{"text":"Gherkin","value":"gherkin"},{"text":"GitHub Flavored Markdown","value":"gfm"},{"text":"Go","value":"go"},{"text":"Groovy","value":"groovy"},{"text":"HAML","value":"haml"},{"text":"Haskell","value":"haskell"},{"text":"Haskell (Literate)","value":"haskell-literate"},{"text":"Haxe","value":"haxe"},{"text":"HXML","value":"haxe"},{"text":"ASP.NET","value":"htmlembedded"},{"text":"HTML","value":"htmlmixed"},{"text":"HTTP","value":"http"},{"text":"IDL","value":"idl"},{"text":"Pug","value":"pug"},{"text":"Java","value":"clike"},{"text":"Java Server Pages","value":"htmlembedded"},{"text":"JavaScript","value":"javascript"},{"text":"JSON","value":"javascript"},{"text":"JSON-LD","value":"javascript"},{"text":"JSX","value":"jsx"},{"text":"Jinja2","value":"jinja2"},{"text":"Julia","value":"julia"},{"text":"Kotlin","value":"clike"},{"text":"LESS","value":"css"},{"text":"LiveScript","value":"livescript"},{"text":"Lua","value":"lua"},{"text":"Markdown","value":"markdown"},{"text":"mIRC","value":"mirc"},{"text":"MariaDB SQL","value":"sql"},{"text":"Mathematica","value":"mathematica"},{"text":"Modelica","value":"modelica"},{"text":"MUMPS","value":"mumps"},{"text":"MS SQL","value":"sql"},{"text":"mbox","value":"mbox"},{"text":"MySQL","value":"sql"},{"text":"Nginx","value":"nginx"},{"text":"NSIS","value":"nsis"},{"text":"NTriples","value":"ntriples"},{"text":"Objective-C","value":"clike"},{"text":"Objective-C++","value":"clike"},{"text":"OCaml","value":"mllike"},{"text":"Octave","value":"octave"},{"text":"Oz","value":"oz"},{"text":"Pascal","value":"pascal"},{"text":"PEG.js","value":"pegjs"},{"text":"Perl","value":"perl"},{"text":"PHP","value":"php"},{"text":"Pig","value":"pig"},{"text":"Plain Text","value":"null"},{"text":"PLSQL","value":"sql"},{"text":"PostgreSQL","value":"sql"},{"text":"PowerShell","value":"powershell"},{"text":"Properties files","value":"properties"},{"text":"ProtoBuf","value":"protobuf"},{"text":"Python","value":"python"},{"text":"Puppet","value":"puppet"},{"text":"Q","value":"q"},{"text":"R","value":"r"},{"text":"reStructuredText","value":"rst"},{"text":"RPM Changes","value":"rpm"},{"text":"RPM Spec","value":"rpm"},{"text":"Ruby","value":"ruby"},{"text":"Rust","value":"rust"},{"text":"SAS","value":"sas"},{"text":"Sass","value":"sass"},{"text":"Scala","value":"clike"},{"text":"Scheme","value":"scheme"},{"text":"SCSS","value":"css"},{"text":"Shell","value":"shell"},{"text":"Sieve","value":"sieve"},{"text":"Slim","value":"slim"},{"text":"Smalltalk","value":"smalltalk"},{"text":"Smarty","value":"smarty"},{"text":"Solr","value":"solr"},{"text":"SML","value":"mllike"},{"text":"Soy","value":"soy"},{"text":"SPARQL","value":"sparql"},{"text":"Spreadsheet","value":"spreadsheet"},{"text":"SQL","value":"sql"},{"text":"SQLite","value":"sql"},{"text":"Squirrel","value":"clike"},{"text":"Stylus","value":"stylus"},{"text":"Swift","value":"swift"},{"text":"sTeX","value":"stex"},{"text":"LaTeX","value":"stex"},{"text":"SystemVerilog","value":"verilog"},{"text":"Tcl","value":"tcl"},{"text":"Textile","value":"textile"},{"text":"TiddlyWiki","value":"tiddlywiki"},{"text":"Tiki wiki","value":"tiki"},{"text":"TOML","value":"toml"},{"text":"Tornado","value":"tornado"},{"text":"troff","value":"troff"},{"text":"TTCN","value":"ttcn"},{"text":"TTCN_CFG","value":"ttcn-cfg"},{"text":"Turtle","value":"turtle"},{"text":"TypeScript","value":"javascript"},{"text":"TypeScript-JSX","value":"jsx"},{"text":"Twig","value":"twig"},{"text":"Web IDL","value":"webidl"},{"text":"VB.NET","value":"vb"},{"text":"VBScript","value":"vbscript"},{"text":"Velocity","value":"velocity"},{"text":"Verilog","value":"verilog"},{"text":"VHDL","value":"vhdl"},{"text":"Vue.js Component","value":"vue"},{"text":"XML","value":"xml"},{"text":"XQuery","value":"xquery"},{"text":"Yacas","value":"yacas"},{"text":"YAML","value":"yaml"},{"text":"Z80","value":"z80"},{"text":"mscgen","value":"mscgen"},{"text":"xu","value":"mscgen"},{"text":"msgenny","value":"mscgen"},{"text":"WebAssembly","value":"wast"}]
  }

  constructor() { }
}