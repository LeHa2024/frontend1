const songs = [
  {
    id: 1,
    title: "tuanhumotcongio",
    artist: "babymonster",
    src: "songs/tuanhumotcongio.mp3",
    cover: "images/h2.jpg",
  },
  {
    id: 2,
    title: "Sứ Thanh Hoa",
    artist: "O.lew",
    src: "songs/RoiTaSeNgamPhaoHoaCungNhau.mp3",
    cover: "images/h1.jpg",
  },
];
const audio = document.querySelector("#audio");
let currentSongIndex = 0;
let isPlaying;

function initSong() {
  const song = songs[currentSongIndex];
  audio.src = song.src;
  if (isPlaying) {
    audio.play();
  }
  const cover = document.querySelector(".cover");
  cover.src = song.cover;
  const title = document.querySelector(".title");
  title.src = song.title;

  const artist = document.querySelector(".title");
  artist.textContent = song.artist;
}
function onPlay() {
  isPlaying = true;
  const play = document.querySelector(".play");
  play.textContent = "pause";
}
function onPause() {
  isPlaying = false;
}
function isPause() {
  return audio.paused;
}
function handClickNext() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  initSong();
}
function handClickPrev() {
  currentSongIndex = (currentSongIndex - 1) % songs.length;
  initSong();
}
function handleClickPlay() {
  if (isPause()) {
    audio.play();
  } else {
    audio.pause();
  }
}
function onTimeUpDate() {
  const currentTime = audio.currentTime;
  const currentTime = audio.currentTime;
}
function setUpPlayer() {
  initSong();
  const prev = document.querySelector(".prev");
  const play = document.querySelector(".play");
  const next = document.querySelector(".next");

  play.addEventListener("click", handleClickPlay);
  next.addEventListener("click", handClickNext);
  prev.addEventListener("click", handClickPrev);
}
setUpPlayer();
