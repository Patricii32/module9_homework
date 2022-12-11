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