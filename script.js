

let songitem = Array.from(document.getElementsByClassName("song-item"));
let songs = [
    { songName: "Peaky Blinder", filePath: "songs/1.mp3", coverPath: "covers/covers1.jpg" },
    { songName: "Maan Meri Jaan", filePath: "2.mp3", coverPath: "covers/covers2.jpeg" },
    { songName: "Raat Bhar (Arijit Singh) - Heropanti", filePath: "songs/3.mp3", coverPath: "covers/covers3.jpg" },
    { songName: "IIconic - King", filePath: "4.mp3", coverPath: "covers/covers4.jpeg" },
    { songName: "Dooriyan - Dino James ", filePath: "songs/5.mp3", coverPath: "covers/covers5.jpg" },
    { songName: "Kya-Yaad-Mujhe-Bhi-Karti-Hogi-Woh", filePath: "songs/6.mp3", coverPath: "covers/covers6.jpg" },
    { songName: "Jaadugar - Paradox", filePath: "songs/7.mp3", coverPath: "covers/covers7.jpg" },
    { songName: "Chehre - Mc Square", filePath: "songs/8.mp3", coverPath: "covers/covers8.jpg" }
    
]
songitem.forEach((element, value) => {
    element.querySelector("img").src = songs[value].coverPath;
    element.getElementsByClassName("innertext")[0].innerText = songs[value].songName;
});

let audio = new Audio(`songs/${1}.mp3`)
let playbutton = document.getElementById("playbutton")
let progresbar = document.getElementById("progresbar")
let prevbutton = document.getElementById("prevbutton")
let nextbutton = document.getElementById("nextbutton")
let songname = document.getElementsByClassName("songname")[0]
let innericon = Array.from(document.getElementsByClassName("inner-icon"))
let gifs = document.getElementById("gifs")
let songnumber = 1;

// for playing song.. .
playbutton.addEventListener("click", function () {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        songitem[0].classList.add("effect")
        effectHandle();
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        innericon[0].classList.remove("fa-circle-play")
        innericon[0].classList.add("fa-circle-pause")
        gifs.style.opacity = "1"
    }
    else {
        audio.pause();
        songitem[0].classList.remove("effect")
        playbutton.classList.add("fa-circle-play")
        playbutton.classList.remove("fa-circle-pause")
        innericon[0].classList.add("fa-circle-play")
        innericon[0].classList.remove("fa-circle-pause")
        gifs.style.opacity = "0"
    }

})

// for progressbar.....
audio.addEventListener("timeupdate", function () {
    progress = parseInt((audio.currentTime / audio.duration) * 100);
    progresbar.value = progress;
// for time.....
let min = parseInt(audio.currentTime/60)
let sec = parseInt(audio.currentTime%60)
if(sec < 10){
    document.getElementsByClassName("currentime")[0].innerText = `0${min} : 0${sec}`  
}
else{
    document.getElementsByClassName("currentime")[0].innerText = `0${min} : ${sec}` 
}
let minduration = parseInt(audio.duration/60)
let secduration = parseInt(audio.duration%60)
if(secduration < 10){
    document.getElementsByClassName("duration")[0].innerText = ` (${minduration} : 0${secduration})` 
}
else{
    document.getElementsByClassName("duration")[0].innerText = ` (${minduration} : ${secduration})` 
}
})


// for changing progressbar........
progresbar.addEventListener("change", function () {
    audio.currentTime = ((progresbar.value * audio.duration) / 100);
})

const buttunHandle = () => {
    playbutton.classList.add("fa-circle-play")
    playbutton.classList.remove("fa-circle-pause")
    gifs.style.opacity = "0"
}
const effectHandle = () => {
    for (let i = 0; i < songitem.length; i++) {
        if (i != songnumber - 1) {
            songitem[i].classList.remove("effect")
            innericon[i].classList.add("fa-circle-play")
            innericon[i].classList.remove("fa-circle-pause")
        }
    }
}
// for nextbutton.....
nextbutton.addEventListener("click", function () {
    buttunHandle();
    if (songnumber == songitem.length) {
        songnumber = 1;
        audio.src = `songs/${songnumber}.mp3`;
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        innericon[songnumber - 1].classList.remove("fa-circle-play")
        innericon[songnumber - 1].classList.add("fa-circle-pause")
        gifs.style.opacity = "1"
        songname.innerText = songs[songnumber - 1].songName;
        songitem[songnumber - 1].classList.add("effect")
        effectHandle();
        audio.play();
        return
    }
    songnumber += 1;
    audio.src = `songs/${songnumber}.mp3`;
    playbutton.classList.remove("fa-circle-play")
    playbutton.classList.add("fa-circle-pause")
    innericon[songnumber - 1].classList.remove("fa-circle-play")
    innericon[songnumber - 1].classList.add("fa-circle-pause")
    gifs.style.opacity = "1"
    songname.innerText = songs[songnumber - 1].songName;
    songitem[songnumber - 1].classList.add("effect")
    effectHandle();
    audio.play();

})
// for prevbutton.......
prevbutton.addEventListener("click", function () {
    buttunHandle();
    if (songnumber == 1) {
        songnumber = songitem.length;
        audio.src = `songs/${songnumber}.mp3`;
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        innericon[songnumber - 1].classList.remove("fa-circle-play")
        innericon[songnumber - 1].classList.add("fa-circle-pause")
        gifs.style.opacity = "1"
        songname.innerText = songs[songnumber - 1].songName;
        songitem[songnumber - 1].classList.add("effect")
        effectHandle();
        audio.play();
        return
    }
    songnumber -= 1;
    audio.src = `songs/${songnumber}.mp3`;
    playbutton.classList.remove("fa-circle-play")
    playbutton.classList.add("fa-circle-pause")
    innericon[songnumber - 1].classList.remove("fa-circle-play")
    innericon[songnumber - 1].classList.add("fa-circle-pause")
    gifs.style.opacity = "1"
    songname.innerText = songs[songnumber - 1].songName;
    songitem[songnumber - 1].classList.add("effect")
    effectHandle();
    audio.play();
})

// for clicking any songs....
songitem.forEach((element, i) => {
    element.addEventListener("click", function (e) {
        songnumber = i + 1;
        buttunHandle();
        audio.src = `songs/${songnumber}.mp3`;
        playbutton.classList.remove("fa-circle-play")
        playbutton.classList.add("fa-circle-pause")
        innericon[songnumber - 1].classList.remove("fa-circle-play")
        innericon[songnumber - 1].classList.add("fa-circle-pause")
        gifs.style.opacity = "1"
        songname.innerText = songs[songnumber - 1].songName;
        songitem[songnumber - 1].classList.add("effect")
        effectHandle();
        audio.play();
    })
});



