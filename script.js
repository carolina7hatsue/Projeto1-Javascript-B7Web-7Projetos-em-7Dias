// Monitorando o evento key up (quando eu aperto uma tecla) na página toda (document.body)
// Quando apertarmos uma tecla, a função é chamada ()=>{}
document.body.addEventListener('keyup', (event)=>{
    // console.log(event.code);
    playSound(event.code.toLocaleLowerCase());
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== ''){
        // Transformando string em array
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound){
    // Salvando a key que foi passada como parâmetro (sound) através de um templateString
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout( ()=> {
        keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray){
    
    let wait = 0;

    for(let songItem of songArray){

        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
        
    }
}
