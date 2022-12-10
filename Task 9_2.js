/*Задание 2.
Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

JSON:
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
JS-объект:

{
  list: [
    { name: 'Petr', age: 20, prof: 'mechanic' },
    { name: 'Vova', age: 60, prof: 'pilot' },
  ]
}
*/

const jsonString = `{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`
let arr = [];
let objResult ={
  "list": arr,
}   
const data = JSON.parse(jsonString);
const list = data.list;
list.forEach(human => {
  const name = human.name;
  const age = human.age;
  const prof = human.prof;
  const objHuman = {
      "name": name,
      "age": age,
      "prof": prof,
  }
  arr.push(objHuman);
});
console.log(objResult);

