
console.log('Welcome to Melody, Music for everyone!');
//Initialize the variables
let songIndex=0;
let audioElement   = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs=[
    {songName:"Faasle", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Baat Unkahi", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Din Dhaley", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "kaise Ho Tum", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Aur ho-Rockstar", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Take me back", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Until I found you", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Somewhere only we know", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Cold-Mess", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Gauthali-pahelo batti Muni", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}

]
songItems.forEach((element)=>{
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;


})

// audioElement.play();

//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

})

//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
      
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');

        element.classList.add('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
