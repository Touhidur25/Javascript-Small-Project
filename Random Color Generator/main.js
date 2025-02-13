const colorGenerator = ()=>{
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomHexa= '#'+randomNumber.toString(16); 
    document.body.style.backgroundColor = randomHexa
    document.getElementById('color_changer').innerHTML = randomHexa
    document.getElementById('btn').style.backgroundColor = randomHexa


}

document.getElementById('btn').addEventListener('click',colorGenerator)

colorGenerator()