const selectFolderBtn = document.getElementById("select-folder");
const startBtn = document.getElementById("start");

async function select() {
  window.postMessage({ type: "select-dirs" });
  const response = await window.home.select();
  if (!response?.length) return;
  startBtn.hidden = false;
}

async function start() {
  selectFolderBtn.disabled = true;
  startBtn.disabled = true;
  const response = await window.home.start();
  console.log(response);
}

selectFolderBtn.addEventListener("click", select);
startBtn.addEventListener("click", start);
