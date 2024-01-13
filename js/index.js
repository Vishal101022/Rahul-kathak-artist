// navbar active link indicator
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

// hero animation
const text = document.querySelector(".word");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Artist";
  }, 0);
  setTimeout(() => {
    text.textContent = "Kathak Dancer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Choreographer";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

// YouTube IFrame API loaded asynchronously
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: "WymD_I6cJgg",
    playerVars: {
      start: 85,
      autoplay: 0,
      controls: 0,
      playerinline: 1,
      modestbranding: 2,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {}

// footer year
let date = new Date();
y = date.getFullYear();
document.getElementById("year").innerHTML = y;

