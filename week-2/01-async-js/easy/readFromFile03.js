const fs = require('fs');

fs.readFile('3-read-from-file.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

for (let i = 0; i < 10000; i++) {
  console.log(i);
}
