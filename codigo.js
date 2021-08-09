const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("Reproduciendo video");
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("Pausando el video");
}

/*FUNCIONAMIENTO DEL BUTTONS BACKWARD Y FORWARD*/
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

function handleBackward() {
  $video.currentTime =
    $video.currentTime -
    10; /* currentTime(tiempo actual) me indica en que segundo esta el video */
  console.log("Retrocediendo el video 10s", $video.currentTime);
}
function handleForward() {
  $video.currentTime =
    $video.currentTime +
    10; /*CurrentTime(Tiempo actual) me indica en que segundo esta el video */
  console.log("Avanzando el video 10s", $video.currentTime);
}
/* Ahora se trabaja la barra del video el loaded = cargado */

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("Ha cargado el video", $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  console.log("Tiempo actual", $video.currentTime);
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}
