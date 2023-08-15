
let songindex = 0;
let audioElement = new Audio('agar tum sath hoo !!.mp3');
let mstplay = document.getElementById('mstplay');
let progressbar = document.getElementById('progress');

let songs = [
    {SongName: "Agar Tum Sath Hoo !!", filepath: " songs\agar tum sath hoo !!.mp3", coverPath: "agar tum sath ho.jpg"},
    {SongName: "Umeede !!", ilepath: "songs\Umeede !.mp3", coverPath: "agar tum sath ho.jpg"},
    {SongName: "BLAMED", filepath: "songs\Nafrat.mp3", coverPath: "agar tum sath ho.jpg"},
    {SongName: "2:11 AM", filepath: "songs\ 211.mp3", coverPath: "agar tum sath ho.jpg"},
    {SongName: "Clg vala pyaar", filepath: "songs\clg vala pyaar.mp3", coverPath: "agar tum sath ho.jpg"},
    {SongName: "Zindagi", filepath: "songs\zindagi.wav", coverPath: "agar tum sath ho.jpg"},
    {SongName: "fuckyouuu", filepath: "songs\Gazal.mp3", coverPath: "agar tum sath ho.jpg"},
    {SongName: "Okay So You", filepath: "songs\okay so you final.mp3", coverPath: "agar tum sath ho.jpg"}
]


mstplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        mstplay.classList.remove('fa-circle-play');
        mstplay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        mstplay.classList.remove('fa-circle-pause');
        mstplay.classList.add('fa-circle-play');
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log("Timeupdate");

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value*audioElement.duration/100;
})

const makeallplays = ()=>{
    
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');

    })
}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= 'songs/${songindex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        mstplay.classList.remove('fa-circle-play');
        mstplay.classList.add('fa-circle-pause')
    })
})
//audioElement.play();s