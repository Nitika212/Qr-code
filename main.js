let form = document.querySelector('form')
let input = document.querySelector('input')
let size = document.querySelector('#size')
let button = document.querySelector('button')
let ul = document.querySelector('ul')
let image = document.querySelector('img')
// let btn = document.querySelector('.btn-2')


async function getQr(e){
    e.preventDefault()
    const response = await fetch(` https://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value} `)
     image.setAttribute("src" , response.url)
     form.reset()
    console.log(response)
}
form.addEventListener('submit',getQr)
 
async function getdata(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    console.log(response);
    data.forEach(todo =>{
        let li = document.createElement('li')
        li.className ="list-group-item rounded-0"
        li.innerText = todo.title
        ul.appendChild(li)
    });
}
button.addEventListener('click', getdata)