#!/usr/bin/env node
var pomParser = require("pom-parser");
// The required options, including the filePath.
// Other parsing options from https://github.com/Leonidas-from-XIV/node-xml2js#options
var opts = {
  filePath: "/project/pom.xml", // The path to a pom file
};
// Parse the pom based on a path
pomParser.parse(opts, function(err, pomResponse) {
  if (err) {
    console.log("ERROR: " + err);
    process.exit(1);
  }

  // Print the version from the pom.
  console.log(pomResponse.pomObject.project.version);
});
