const songs = [
  {
    id: 0,
    title: "Like that",
    artist: "babymonster",
    src: "songs/tuanhumotcongio.mp3",
    cover: "mp3imagesh1.jpg",
  },
  {
    id: 1,
    title: "RoiTaSeNgamPhaoHoaCungNhau",
    artist: "O.lew",
    src: "songs/RoiTaSeNgamPhaoHoaCungNhau.mp3",
    cover: "mp3imagesh2.jpg",
  },
];
const audio = document.querySelector("#audio");

function initSong() {
  const song = song[0];
  audio.src = song.src;
}
function isPause() {
  return audio.paused;
}
function handleClickPlay() {
  if (isPause()) {
    audio.play();
  } else {
    audio.pause();
  }
}
function setUpPlayer() {
  initSong();
  const prev = document.querySelector(".prev");
  const play = document.querySelector(".play");
  const next = document.querySelector(".next");

  play.addEventListener("click", handleClickPlay);
}
setUpPlayer();
