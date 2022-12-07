const strUrl ="https://picsum.photos/v2/list?limit=10";

const inputNumber = document.querySelector(".inputNumber");
const errorMessage = document.querySelector(".errorMessage");
const btnRequest = document.querySelector(".btnRequest");
const resultNode = document.querySelector(".result");

const newRequest = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
        if(xhr.status != 200){
            console.log("Ошибка! Текущий статус:", xhr.status);
        } else{
            const result = JSON.parse(xhr.response);
            if(callback){
                callback(result);
            }
        }
    };
    xhr.onerror = function(){
        console.log("Ошибка! Текущий статус:", xhr.status);
    };
    xhr.send();
}

const showResult = jsObject => {
    let images = "";
    jsObject.forEach(object =>{
        const image = resultNode.innerHTML = `
        <div class="image-block_result">
        <img src="${object.download_url}" class="image_result">
        <p class="image-block_author">Author: ${object.author}</p>
    </div>
        `
        images = images + image;
    });
    resultNode.innerHTML = images;
}

btnRequest.addEventListener('click', () => {
    let numValue = document.querySelector("input").value;
    if(numValue < 1 || numValue > 10){
        errorMessage.innerHTML = "Заданное число вне указанного диапазона!";
        inputNumber.focus();
    } else{
        errorMessage.innerHTML = "";
        const finishUrl = strUrl.replace("limit=10", `limit=${numValue}`);
        newRequest(finishUrl, showResult);
    }
});