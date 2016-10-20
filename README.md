# pom-version-parser
Simple script to extract the version from a pom.xml file

## Usage
Assuming your POM file is in this format:
```
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>0.1.0</version>
</project>
```

This command will return the version as an unquoted string of text: e.g. `0.1.0`
```
docker run --rm -v <path to my pom.xml>:/project ryanwalls/pom-version-parser
```
