// Node JS
const fs = require('fs');


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

class RandomName {

}

const {nameMethod} = new RandomNews;

const names = {};
const countName = 10;


for (let i = 0; i < countName; i++) {
  names[i+1] = {
    "id": "1",
    "title": "",
    "author": "",
    "date": "",
    "article": ""
  };
}

let client = JSON.stringify(names, null,'\t');

fs.writeFile('./names.json', client, function(err) {
  if(err) return console.error(err);
  console.log('done');
})
