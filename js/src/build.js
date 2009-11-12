#!/usr/bin/env narwhal

// Get all of the dependencies and combine them into one file
//
// You'll need to have dojo, dijit, and dojox linked into this directory (we
// have them in /usr/src/dojo here.)
var out = "",
    newFile = "../../stickies.js",
    toMinify = "stickies.js",
    deps = [], file = require("file"), minify = require("jsmin").encode;

deps = JSON.parse(file.read("files.json"));
deps.forEach(function (d) {
    out += d === toMinify ? minify(file.read(d)) : file.read(d);
});

file.write(newFile, out, "w");
