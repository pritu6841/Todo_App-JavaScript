const cir = document.querySelectorAll('.cir')
const allinput = document.querySelectorAll('.write-goal')
const progressVal = document.querySelector('.progress-val')
const textMsg = document.querySelector('.text')
const inputBox = document.querySelectorAll('.addgoal')
const conatainer = document.querySelector('.container')
const firstInput = [...inputBox][0]
console.log(firstInput); 
let temp = 1
let len = allinput.length
const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    'Whoa! You just completed all the goals, time for chill :D',
  ]
  const addInput = document.querySelector('.add')
  
// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {
//     first : {
//         names : '',
//         completed : false
//     },
//     second : {
//         names : '',
//         completed : false
//     },
//     third : {
//         names : '',
//         completed : false
//     },
// }

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}


let countGoal = Object.values(allGoals).filter((goals)=>goals.completed).length
progressVal.style.width = `${countGoal/len * 100}%`
textMsg.innerText = allQuotes[countGoal]
progressVal.firstElementChild.innerText = `${countGoal}/${len} Completed`
// progressVal.style.visibility = 'hidden'
cir.forEach((num)=>{
    num.addEventListener('click',()=>{
        let allinputfilled = [...allinput].every((input)=> {
            return input.value
        } )
        if(allinputfilled){

        num.parentElement.classList.toggle('completed')
        
        progressVal.style.visibility = 'inherit'
        
        let inputId = num.nextElementSibling.id
        if(allGoals[inputId])
        allGoals[inputId].completed = !allGoals[inputId].completed
        countGoal = Object.values(allGoals).filter((goals)=>goals.completed).length
        if(countGoal == 0){
            progressVal.firstElementChild.visibility = 'hidden'    
        }
        else{
            progressVal.firstElementChild.visibility = 'inherit'
        }
        progressVal.style.width = `${countGoal/len * 100}%`
        progressVal.firstElementChild.innerText = `${countGoal}/${len} Completed`
        textMsg.innerText = allQuotes[countGoal]
        // console.log(countGoal);
        localStorage.setItem('allGoals', JSON.stringify(allGoals))        
        }
        else{
            const error = document.querySelector('.set-goal')
            error.style.visibility = 'inherit'
            progressVal.style.visibility = 'hidden'
        }
    })
    // console.log(allGoals[num.nextElementSibling.id]);
    if(allGoals[num.nextElementSibling.id]){
    if(allGoals[num.nextElementSibling.id].completed){
        //  console.log(input.id);
        num.parentElement.classList.add('completed')
    } }
})


allinput.forEach((input)=>{
    if(allGoals[input.id])
    input.value = allGoals[input.id].names
    let error = document.querySelector('.set-goal')
    input.addEventListener('focus',(e)=>{
        error.style.visibility = 'hidden'
        
    })
    input.addEventListener('input',(e)=>{
        if(allGoals[input.id]){
        if(allGoals[input.id].completed){
            input.value = allGoals[input.id].names
        }
        else{
        allGoals[input.id] = {
            names : e.target.value,
            // c    ompleted : false
        }}}
        else{
            allGoals[input.id] = {
                names : input.value,
                completed : false

            }
        }
        localStorage.setItem('allGoals',JSON.stringify(allGoals))
    })
       
})
// const idName = ['first','second','third','forth','fifth','sixth','seventh','eigth']
// addInput.addEventListener('click',(e)=>{
//     const clone = firstInput.cloneNode(true)
//     console.log(clone.nextElementSibling);
//     // console.log(clone.className)    
//     // clone.classList.add('addgoal')
//     conatainer.append(clone)
// })


