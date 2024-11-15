const fs = require('fs');

fs.writeFile('4-write-to-file.md', 'Hello, World!', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});

for (let i = 0; i < 10000; i++) {
  console.log(i);
}

fs.readFile('4-write-to-file.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

for (let i = 0; i < 10000; i++) {
  console.log(i);
}
