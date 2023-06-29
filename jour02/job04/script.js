var textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
  var key = event.key.toLowerCase();

  if (/[a-z]/.test(key)) {
    if (document.activeElement === textarea) {
      textarea.value += key + key;
    } else {
      textarea.value += key;
    }
  }
});
