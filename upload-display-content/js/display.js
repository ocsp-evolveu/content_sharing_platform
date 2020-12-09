let video = document.getElementById("video")

function openFullscreen(){
    if (video.requestFullscreen) {
        video.requestFullscreen()
    }
}
