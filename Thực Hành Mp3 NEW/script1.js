const songs = [
  {
    id: 1,
    title: "Tựa Như Một Cơn Gió",
    artist: "Thiền Y Thuần",
    src: "songs/tuanhumotcongio.mp3",
    cover: "images/tuanhumotcongio.jpg",
  },
  {
    id: 2,
    title: "Rồi Ta Sẽ Ngắm Pháo Hoa Cùng Nhau",
    artist: "O.lew",
    src: "songs/RoiTaSeNgamPhaoHoaCungNhau.mp3",
    cover: "images/roitasengamphaohoacungnhau.jpg",
  },
  {
    id: 3,
    title: "Sứ Thanh Hoa",
    artist: "Na Anh",
    src: "songs/Sứ Thanh Hoa.mp3",
    cover: "images/suthanhhoa.jpg",
  },
];

const audio = document.querySelector("#audio");
let currentSongIndex = 0;
let isPlaying = false;

function initSong() {
  const song = songs[currentSongIndex];
  audio.src = song.src;

  const cover = document.querySelector(".cover");
  cover.src = song.cover;
  const title = document.querySelector(".title");
  title.textContent = song.title;
  const artist = document.querySelector(".artist");
  artist.textContent = song.artist;
  const songList = document.querySelector(".song-list");

  if (isPlaying) {
    audio.play();
  }
}

function isPaused() {
  return audio.paused;
}

function handleClickNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  initSong();
}

function handleClickPrev() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  initSong();
}

function togglePlay() {
  if (isPaused()) {
    audio.play();
  } else {
    audio.pause();
  }
}

function onPlay() {
  isPlaying = true;
  const playButton = document.querySelector(".play");
  playButton.textContent = "Pause";
}

function onPause() {
  isPlaying = false;
  const playButton = document.querySelector(".play");
  playButton.textContent = "Play";
}

function onTimeUpdate() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;

  const currentTimeEl = document.querySelector(".current-time");
  currentTimeEl.textContent = formatTime(currentTime);

  const progressBar = document.querySelector(".progress-bar");
  progressBar.value = progress || 0;
}

function onSeek(event) {
  const seekTime = (event.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
}
function onEnded() {
  handleClickNext();
}
function onDurationChange() {
  const duration = audio.duration;
  const durationEl = document.querySelector(".duration");
  durationEl.textContent = formatTime(duration);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function toggleMute() {
  audio.muted = !audio.muted;
  const muteButton = document.querySelector(".mute");
  muteButton.textContent = audio.muted ? "Unmute" : "Mute";
}
function setUpPlaylist() {
  const songList = document.querySelector(".song-list");
  songs.forEach((song, index) => {
    const songItem = document.createElement("li");
    songItem.classList.add("song-item");
    songItem.innerHTML = `
    <img src="${song.cover}" alt="Cover">
    <div class="song-info">
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
    </div>
  `;
    songItem.addEventListener("click", () => {
      currentSongIndex = index;
      initSong();
      togglePlay();
    });
    songList.appendChild(songItem);
  });
}

function setUpPlayer() {
  initSong();

  const playButton = document.querySelector(".play");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const progressBar = document.querySelector(".progress-bar");
  const muteButton = document.querySelector(".mute");

  playButton.addEventListener("click", togglePlay);
  prevButton.addEventListener("click", handleClickPrev);
  nextButton.addEventListener("click", handleClickNext);
  progressBar.addEventListener("input", onSeek);
  muteButton.addEventListener("click", toggleMute);

  audio.addEventListener("play", onPlay);
  audio.addEventListener("pause", onPause);
  audio.addEventListener("timeupdate", onTimeUpdate);
  audio.addEventListener("durationchange", onDurationChange);
  audio.addEventListener("ended", onEnded);
}

setUpPlayer();
setUpPlaylist();
