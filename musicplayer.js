
	const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songSlider = document.getElementById("slider-song"); 

const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songs = [
	{
		image:"./raysquare3.jpg",
		name:"Champion",
		audio:"champion.mp3",
	},
	{
		image:"./raysquare1.jpg",
		name:"Gym",
		audio:"gym.mp3",
	},
	{
		image:"./raysquare2.jpg",
		name:"Legend",
		audio:"legendary.mp3",
	},
];

const audio = document.createElement("audio");
let currentSongIndex = 0;
updateSong();

// ⬅️ Prev
prevSongButton.addEventListener("click", function() {
	if (currentSongIndex === 0) {
		return;
	}
	currentSongIndex--;
	updateSong();
});

// ➡️ Next
nextSongButton.addEventListener("click", function() {
	if (currentSongIndex === songs.length - 1) {
		return;
	}
	currentSongIndex++;
	updateSong();
});

// ▶️ Play
playpauseButton.addEventListener("click", function() {
	if (!audio.paused) {
		audio.pause();
	}
	else {audio.play();
		
	}		
	
});

// 🔄 Update UI
function updateSong() {
	const song = songs[currentSongIndex];
	songImage.src = song.image;
	songName.innerText = song.name;
	
	audio.src = song.audio;
	audio.onloadedmetadata= function() {
	songSlider.value = 0;
	songSlider.max = audio.duration;
	}
}

songSlider.addEventListener("change", function(){
	audio.currentTime=songSlider.value;
});

function moveSlider () {
	songSlider.value=audio.currentTime;
};

setInterval(moveSlider,1000);

audio.pause();

const pauseButton = document.getElementById("pause-song");

pauseButton.addEventListener("click", function() {
	audio.pause();
});


audio.loop = true;

const repeatButton = document.getElementById("repeat-song");

let isRepeat = false;

repeatButton.addEventListener("click", function() {
	isRepeat = !isRepeat;

	audio.loop = isRepeat;

	// Cambiar estilo visual
	if (isRepeat) {
		repeatButton.style.color = "silver";
	} else {
		repeatButton.style.color = "forestgreen";
	}
});

