$(document).ready(function() {
  $("#current-center").magnificPopup({
    type: "image",
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    // other options
    gallery: {
      enabled: true
    }
  });
});
