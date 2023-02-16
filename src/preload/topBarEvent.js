const { contextBridge, ipcRenderer } = require("electron")
contextBridge.exposeInMainWorld('electronAPI_topBarEvent', {
    "window_close": () => ipcRenderer.send("window-close"),
    "window_min": () => ipcRenderer.send("window-min"),
    "window_max": () => ipcRenderer.send("window-max"),
})