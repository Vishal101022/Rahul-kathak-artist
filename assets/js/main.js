// navbar active link indicator
document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

// Here section scroll down button
document.querySelector(".read-more").addEventListener("click", () => {
  let scrollText = document.querySelector(".hero-section p");
  if (scrollText.style.overflow === "scroll") {
    scrollText.style.overflow = "hidden";
  } else {
    scrollText.style.overflow = "scroll";
  }
});

// footer year
let date = new Date();
y = date.getFullYear();
document.getElementById("year").innerHTML = y;


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
function onPlayerReady(event) {
  
}
