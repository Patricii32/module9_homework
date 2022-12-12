/*
Задание 5.

Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
После получения данных вывести список картинок на экран.
Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).
*/

const inputs = document.querySelectorAll(".form_input");
const btnRequest = document.querySelector(".form_btn");
const resultNode = document.querySelector(".result");
const errorMessage = document.querySelector(".form_error")

function clearInputs(){
    inputs.forEach(input => {
        input.value = "";
    })
}

function newRequest(){
    resultNode.innerHTML = "";
    let arrParametrs = [];
    inputs.forEach(input => {
        arrParametrs.push(+input.value);
    });
    if((arrParametrs[0]< 1 || arrParametrs[0]>10 || !Number.isFinite(arrParametrs[0])) && (arrParametrs[1]< 1 || arrParametrs[1]>10 || !Number.isFinite(arrParametrs[1]))){
        clearInputs()
        errorMessage.textContent="Номер страницы и лимит вне диапазона от 1 до 10";
    } else if(arrParametrs[0]< 1 || arrParametrs[0]>10 || !Number.isFinite(arrParametrs[0])){
        clearInputs()
        errorMessage.textContent="Номер страницы вне диапазона от 1 до 10";
    } else if(arrParametrs[1]< 1 || arrParametrs[1]>10 || !Number.isFinite(arrParametrs[1])){
        clearInputs()
        errorMessage.textContent="Лимит вне диапазона от 1 до 10";
    } else{
        errorMessage.textContent="";
        localStorage.setItem("inputsKey", arrParametrs);
        return fetch(`https://picsum.photos/v2/list?page=${arrParametrs[0]}&limit=${arrParametrs[1]}`)
            .then((response) => {
                return response.json();
            })
            .then(json =>{
                json.forEach(item =>{
                    let image =`<img style="width: 300px; height: 200px; margin: 10px 10px;" src=${item.download_url}>`
                    resultNode.innerHTML += image;
                })
            })
            .catch(()=>{
                console.log("error");
            })
    }
}

btnRequest.addEventListener("click", newRequest);

let restartArr = localStorage.getItem("inputsKey").split(",");
addEventListener("DOMContentLoaded",()=>{
        document.querySelector(".numberPage").value = restartArr[0];
        document.querySelector(".limit").value = restartArr[1];
        newRequest();
    })


