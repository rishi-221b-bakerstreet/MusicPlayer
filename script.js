const songs=[
    "Song1.webm",
    "Song2.mp3",
    "Song3.webm",
    "Song4.mp3",
    "Song5.webm",
    "Song6.mp4",
    "Song7.mp4",

]

const createSongList = () => {
    const list = document.createElement('ol')
    for(let i=0;i<songs.length;i++ ){
        const item=document.createElement('li')
        item.appendChild(document.createTextNode(songs[i]))

        list.appendChild(item)
    }
    return list
    }
    document.getElementById('songList').appendChild(createSongList())

songList.onclick = (e) =>{
    //console.log(e)
    const clickedItem = e.target
    const source = document.getElementById('source')
    source.src='Songs/'+ clickedItem.innerText
    //console.log(clickedItem.innerText)
    document.getElementById('currentlyPlayingSong').innerText= "Currently Playing: "
    document.getElementById('currentSong').innerText= clickedItem.innerText

    player.load()
    player.play()
}

const playAudio = () =>{
    if(player.readyState){
    player.play()
    }
}

const pauseAudio =() => {
    player.pause()
}
const slider = document.getElementById('volumeSlider')
    slider.oninput =(e) => {
        const volume = e.target.value
        player.volume = volume
    }
const updateProgress =() =>{
    if(player.currentTime>0){
    const progressBar = document.getElementById('progress')

    progressBar.value=(player.currentTime/ player.duration)*100
}
}
