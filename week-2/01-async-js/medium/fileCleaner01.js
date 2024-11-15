const fs = require('fs');

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  let dataList = data.split(" ").filter((data) => (data !== "" && data !== " " && data !== "\n"));
  dataList = dataList.join(" ");
  
  fs.writeFile("text.txt", dataList, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File written successfully");
  })

})
