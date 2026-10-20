const playlistSongs = document.querySelector("#playlist-songs");
const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");
const playingSong = document.querySelector("#player-song-title");
const songArtist = document.querySelector("#player-song-artist");

const allSongs = [
	{
		id: 0,
		title: "Scratching The Surface",
		artist: "Quincy Larson",
		duration: "4:25",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
	},
	{
		id: 1,
		title: "Can't Stay Down",
		artist: "Quincy Larson",
		duration: "4:15",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
	},
	{
		id: 2,
		title: "Still Learning",
		artist: "Quincy Larson",
		duration: "3:51",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
	},
	{
		id: 3,
		title: "Cruising for a Musing",
		artist: "Quincy Larson",
		duration: "3:34",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
	},
	{
		id: 4,
		title: "Never Not Favored",
		artist: "Quincy Larson",
		duration: "3:35",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
	},
	{
		id: 5,
		title: "From the Ground Up",
		artist: "Quincy Larson",
		duration: "3:12",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
	},
	{
		id: 6,
		title: "Walking on Air",
		artist: "Quincy Larson",
		duration: "3:25",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
	},
	{
		id: 7,
		title: "Can't Stop Me. Can't Even Slow Me Down.",
		artist: "Quincy Larson",
		duration: "3:52",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
	},
	{
		id: 8,
		title: "The Surest Way Out is Through",
		artist: "Quincy Larson",
		duration: "3:10",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
	},
	{
		id: 9,
		title: "Chasing That Feeling",
		artist: "Quincy Larson",
		duration: "2:43",
		src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
	},
];
const audio = new Audio();
const userData = {
	songs: allSongs,
	currentSong: null,
	songCurrentTime: 0,
};
const playSong = (id, start = true) => {
	const song = userData.songs.find((song) => song.id === id);
	audio.src = song.src;
	audio.title = song.title;
	if (userData.currentSong === null || start) {
		audio.currentTime = 0;
	} else {
		audio.currentTime = userData.songCurrentTime;
	}
	playButton.classList.add("playing");
	userData.currentSong = song;
	setPlayerDisplay();
	highlightCurrentSong();
	setPlayButtonAccessibleText();
	audio.play();
};

const pauseSong = () => {
	userData.songCurrentTime = audio.currentTime;
	playButton.classList.remove("playing");
	audio.pause();
};

const getCurrentSongIndex = () => {
	const indexSong = userData.songs;
	return indexSong.indexOf(userData.currentSong);
};

const getNextSong = () => {
	return userData.songs[getCurrentSongIndex() + 1];
};

const getPreviousSong = () => {
	return userData.songs[getCurrentSongIndex() - 1];
};

const playPreviousSong = () => {
    if (userData.currentSong === null) {
        return
    }
	const prevSong = getPreviousSong();
	if (prevSong) {
		playSong(prevSong.id);
    } else {
        playSong(userData.songs[0].id);
    }
};

const playNextSong = () => {
	if (userData.currentSong === null) {
		playSong(userData.songs[0].id);
		return;
	} else {
		const nextSong = getNextSong();
		if (nextSong) {
			playSong(nextSong.id);
		} else {
			userData.currentSong = null;
			userData.songCurrentTime = 0;
			pauseSong();
		}
	}
};

const setPlayerDisplay = () => {
	playingSong.textContent = userData.currentSong ? userData.currentSong.title: "";
	songArtist.textContent = userData.currentSong ? userData.currentSong.artist: "";
}

const highlightCurrentSong = () => {
    const previousCurrentSong = document.querySelector(
		'.playlist-song[aria-current="true"]',
	);
    previousCurrentSong?.removeAttribute("aria-current");
    const songToHighlight = document.getElementById(
		`song-${userData.currentSong?.id}`,
	);
	if (typeof songToHighlight !== undefined) {
		songToHighlight.setAttribute("aria-current", "true");
	}
    songToHighlight?.setAttribute("aria-current", "true");
}

const setPlayButtonAccessibleText = () => {
	playButton.setAttribute(
		"aria-label",
		userData.currentSong ? `Play ${userData.currentSong.title}` : "Play",
	);
}


playButton.addEventListener("click", () => {
	if (userData.currentSong === null) {
		playSong(userData.songs[0].id);
	} else {
		playSong(userData.currentSong.id, false);
	}
});

const song = document.querySelectorAll(".playlist-song");
song.forEach((songElement) => {
	const button = songElement.querySelector("button");
	button.addEventListener("click", () => {
		const [song, id] = songElement.id.split("-");
		playSong(Number(id));
		console.log(id);
	});
});

pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);
audio.addEventListener("ended", playNextSong);