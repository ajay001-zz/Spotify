
console.log('Welcome to Melody, Music for everyone!');
//Initialize the variables
let songIndex=0;
let audioElement   = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs=[
    {songName:"Let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Trap", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Its always blue", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "They Mad", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Rich the kid", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Cover Up", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Safety Dance", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Back it up", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "true love", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Hope|Blue sky", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}

]

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

