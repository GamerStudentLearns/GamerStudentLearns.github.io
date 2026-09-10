/*
  GAMEPLAY VIDEO TOGGLE
  =======================
  On a project page, find the line:
    <div class="case-banner" data-video="">
  Put a video filename between the quotes (e.g. MomentumGameplay.mp4)
  and upload that video file into the same folder as the page.

  If data-video is left blank, no "Watch gameplay" button appears and
  the banner just shows the image, same as before.
*/
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.case-banner').forEach(function (banner) {
    var src = banner.getAttribute('data-video');
    var video = banner.querySelector('.banner-video');
    var toggle = banner.querySelector('.media-toggle');
    if (!src || !video || !toggle) return;

    video.src = src;
    toggle.hidden = false;

    toggle.addEventListener('click', function () {
      var showingVideo = banner.classList.toggle('show-video');
      toggle.textContent = showingVideo ? 'Show screenshot' : 'Watch gameplay';
      if (showingVideo) {
        video.play().catch(function () {});
      } else {
        video.pause();
      }
    });
  });
});
