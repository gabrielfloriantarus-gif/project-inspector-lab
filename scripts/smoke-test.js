const assert = require('node:assert/strict');
const fs = require('node:fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
assert.equal(pkg.name, 'project-inspector-lab');
assert.equal(typeof pkg.scripts.start, 'string');
console.log('PASS: Node runtime and repository smoke test');
