// create read file by nodejs 
const fs = require('fs')

// read file asynch
fs.readFile('json.text', 'utf-8', (error, data) => {
  if (error) {
    console.log('Error read file json.text \n ' + error);
    return;

  } 
  console.log('read file json.text success \n' + data);
  try {
    const jsonString = JSON.parse(data);
    for (const key in jsonString) {
    console.log("json data: " + jsonString[key].name + '\n');
    }

  } catch {
    console.log("Lỗi parse Json");
  }
});

console.log('Reading file...');