/*
Задание 4

Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.
Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://picsum.photos/150/200.
После получения данных вывести ниже картинку на экран.
*/
const inputs =  document.querySelectorAll(".form_input");
const btn = document.querySelector("button");
const errorMessage = document.querySelector(".form_errorMessage");
const result = document.querySelector(".result");



 btn.addEventListener("click", ()=>{
    let arrParametrs = [];
    inputs.forEach(input => {
        const inputNumber = +input.value;
        arrParametrs.push(inputNumber);
    })
    console.log(arrParametrs[0], arrParametrs[1]);
    if((arrParametrs[0]<100 || arrParametrs[0]>300) || (arrParametrs[1]<100 || arrParametrs[1]>300)){
        errorMessage.textContent = "Oдно или оба из чисел вне диапазона от 100 до 300";
    } else{
        errorMessage.textContent = "";
        return fetch(`https://picsum.photos/${arrParametrs[0]}/${arrParametrs[1]}`)
            .then((response) => {
                result.innerHTML=`<img src="${response.url}">`;
            })
            .catch(()=>{
                console.log("error");
            })
    }
})