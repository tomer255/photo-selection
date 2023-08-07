const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // prints out 'pong'
};

func();

const selectFolderBtn = document.getElementById("select-folder");

selectFolderBtn.addEventListener("click", async (evt) => {
  console.log("select-dirs");
  window.postMessage({
    type: "select-dirs",
  });
});
