/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("home", {
  start: () => ipcRenderer.invoke("start"),
  select: () => ipcRenderer.invoke("select"),
  // we can also expose variables, not just functions
});

process.once("loaded", () => {
  window.addEventListener("message", (evt) => {
    if (evt.data.type === "select-dirs") {
      ipcRenderer.send("select-dirs");
    }
  });
});
