function updateOnlineStatus() {
  var statusElement = document.getElementById("status");
  if (navigator.onLine) {
    statusElement.textContent = "You are online.";
    statusElement.classList.remove("offline");
    statusElement.classList.add("online");
  } else {
    statusElement.textContent = "You are offline.";
    statusElement.classList.remove("online");
    statusElement.classList.add("offline");
  }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Initial check
window.onload = updateOnlineStatus;