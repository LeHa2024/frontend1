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

  if (isPlaying) {
    audio.play();
  }
}

function isPause() {
  return audio.paused;
}

function handClickNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  initSong();
}

function handClickPrev() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  initSong();
}

function onPlay() {
  isPlaying = true;
  const play = document.querySelector(".play");
  play.textContent = "Pause";
}

function onPause() {
  isPlaying = false;
  const play = document.querySelector(".play");
  play.textContent = "Play";
}

function onTimeUpdate() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = Math.floor((currentTime / duration) * 100);

  const currentTimeEl = document.querySelector(".current-time");
  const progressBarEl = document.querySelector(".progress-bar");

  currentTimeEl.textContent = formatTimeStr(currentTime);
  progressBarEl.value = progress || 0;
}

function onSeek() {
  const seek = document.querySelector(".progress-bar").value;
  audio.currentTime = (seek / 100) * audio.duration;
}

function onDurationChange() {
  const duration = audio.duration;
  const durationEL = document.querySelector(".duration");
  durationEL.textContent = formatTimeStr(duration);
}

function formatTimeStr(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${fillZero(minutes, 2)}:${fillZero(seconds, 2)}`;
}

function fillZero(num, size) {
  return Math.floor(num).toString().padStart(size, "0");
}

function handClickPlay() {
  if (isPause()) {
    audio.play();
  } else {
    audio.pause();
  }
}
function setUpPlaylist() {
  const songItems = document.querySelectorAll(".song-item");
  songItems.forEach((songItem) => {
    songItem.addEventListener("click", () => {
      const songId = parseInt(songItem.getAttribute("data-id"));
      const newIndex = songs.findIndex((song) => song.id === songId);
      currentSongIndex = newIndex;
      initSong();
    });
  });
}

function onEnded() {
  handClickNext();
}

function toggleMute() {
  audio.muted = !audio.muted;
  const muteButton = document.querySelector(".mute");
  muteButton.textContent = audio.muted ? "Unmute" : "Mute";
}

function setUpPlayer() {
  initSong();

  const prev = document.querySelector(".prev");
  const play = document.querySelector(".play");
  const next = document.querySelector(".next");
  const progressBarEl = document.querySelector(".progress-bar");
  const mute = document.querySelector(".mute");

  prev.addEventListener("click", handClickPrev);
  play.addEventListener("click", handClickPlay);
  next.addEventListener("click", handClickNext);
  progressBarEl.addEventListener("input", onSeek);
  mute.addEventListener("click", toggleMute);

  audio.addEventListener("play", onPlay);
  audio.addEventListener("pause", onPause);
  audio.addEventListener("timeupdate", onTimeUpdate);
  audio.addEventListener("durationchange", onDurationChange);
  audio.addEventListener("ended", onEnded);
}

setUpPlayer();
setUpPlaylist;
