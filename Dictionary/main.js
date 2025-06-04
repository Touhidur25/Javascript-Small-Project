const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById('result')
const sound = document.getElementById('sound')
const btn = document.getElementById('search-btn')

btn.addEventListener("click",()=>{
    let input_word = document.getElementById('inp-word').value
    fetch(`${url}${input_word}`)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML = `
        <div class="word">
                <h3>${input_word}</h3>
                <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <div class="word_meaning">
                <p>Word-meaning</p>
                ${data[0].meanings[0].definitions[0].definition}

            <div class="word_example">
                <p>Word-Example</p>
                ${data[0].meanings[0].definitions[0].example || ""}
            </div>
        `
        let audioSrc = data[0].phonetics.find(p => p.audio)?.audio || "";
        sound.setAttribute("src", audioSrc);
    })

    .catch(()=>{
        result.innerHTML = `<h3 class="error">Your Word is Invalid!!</h3>`
    })
 })

function playSound(){
sound.play()
}