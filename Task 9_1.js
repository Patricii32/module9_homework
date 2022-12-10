/*Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

 XML:

<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>


Результат:

{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}*/

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
const parser = new DOMParser();
let arr = [];
let obj = {"list": arr,};
const xmlDom =  parser.parseFromString(xmlString, "text/html");
const students = xmlDom.querySelectorAll("student");
students.forEach(item => {
    const name = item.querySelector("name");
    const nameFirst = name.querySelector("first");
    const nameSecond = name.querySelector("second");
    const age = item.querySelector("age");
    const prof = item.querySelector("prof");
    const lang = name.getAttribute("lang");
    
    const arrItem = {
        "name": (nameFirst.textContent +" "+ nameSecond.textContent),
        "age": age.textContent,
        "prof": prof.textContent,
        "lang": lang
    }
    arr.push(arrItem);
    
})
console.log(obj);
