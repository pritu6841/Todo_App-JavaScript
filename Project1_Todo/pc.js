const nameElement = document.querySelector('.nameElement')
const nameInput = document.querySelector('.nameInput')


const myData = JSON.parse(localStorage.getItem('myData')) || {}

if(myData.name){
    nameElement.innerText = myData.name
}

nameInput.addEventListener('input',(e)=>{
    myData.name = e.target.value
    localStorage.setItem('name',JSON.stringify(myData))
    nameElement.innerText = e.target.value
})

nameElement.innerText = JSON.parse(localStorage.name).name