const number = document.getElementById('digit')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')

let count = 0

const updateValue=(value)=>{
    count = count+value
    number.innerText = count
    if(count>=10){
        increase.setAttribute('disabled',true)
    }
    else{
        increase.removeAttribute('disabled',false)
    }
    //Decrease Value
    if(count<=0){
        decrease.setAttribute('disabled',true)
    }
    else{
        decrease.removeAttribute('disabled',false)
    }

}

increase.addEventListener('click',()=>{
    updateValue(1)
})


decrease.addEventListener('click',()=>{
    updateValue(-1)
})
