// Compose mail and close
var composeOpen = document.getElementById("mailOpen");
var newMail = document.getElementById("composeButton");
var composeClose = document.getElementById("mailClose");
var delMail = document.getElementById("deleteMail");

composeButton.addEventListener("click", function composeEmail() {
  composeOpen.style.display = "unset";
});
composeClose.addEventListener("click", function closeEmail() {
  composeOpen.style.display = "none";
});
delMail.addEventListener("click", function deleteMail() {
  composeOpen.style.display = "none";
});

