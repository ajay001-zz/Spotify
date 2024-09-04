
console.log('Welcome to Melody, Music for everyone!');
//Initialize the variables
let songIndex=0;
let audioElement   = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');




let songs=[
    {songName:"Let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},

    // {songName: "Trap", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    // {songName: "Its always blue", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    // {songName: "They Mad", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    // {songName: "Rich the kid", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    // {songName: "Cover Up", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    // {songName: "Safety Dance", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    // {songName: "Back it up", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    // {songName: "true love", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    // {songName: "Hope|Blue sky", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}

]

// audioElement.play();

//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
    else{
        audioElement.pause();
    }



})




//listen to events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
  

    
})


