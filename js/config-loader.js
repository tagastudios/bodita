/**
 * Injects Zoom virtual attendance section from config.
 * Keeps meeting URLs and passwords out of the HTML/source.
 */
(function () {
  function init() {
    var zoomRow = document.getElementById("zoom-virtual-attendance");
    if (!zoomRow) return;

    var config = window.APP_CONFIG;
    if (!config || !config.zoom || !config.zoom.meetingUrl) {
      zoomRow.style.display = "none";
      return;
    }

    var link = zoomRow.querySelector("#zoom-meeting-link");
    var meetingIdEl = zoomRow.querySelector("#zoom-meeting-id");
    var passwordEl = zoomRow.querySelector("#zoom-meeting-password");

    if (link) {
      link.href = config.zoom.meetingUrl;
      link.textContent = config.zoom.meetingUrl;
    }
    if (meetingIdEl && config.zoom.meetingId) {
      meetingIdEl.textContent = config.zoom.meetingId;
    }
    if (passwordEl && config.zoom.password) {
      passwordEl.textContent = config.zoom.password;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
