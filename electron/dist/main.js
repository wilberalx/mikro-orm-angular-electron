"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const url = require("url");
let win;
// detect serve mode
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 400, height: 440, frame: false, webPreferences: {
            nodeIntegration: true
        }
    });
    if (serve) {
        // get dynamic version from localhost:4200
        require('electron-reload')(__dirname, {
            electron: require(path.join(__dirname, `/../../node_modules/electron`))
        });
        win.loadURL('http://localhost:4200/#/');
        // The following is optional and will open the DevTools:
        win.webContents.openDevTools();
    }
    else {
        // load the dist folder from Angular
        win.loadURL(url.format({
            pathname: path.join(__dirname, `/../../dist/index.html`),
            protocol: "file:",
            slashes: true,
            hash: '/user/login'
        }));
        //win.webContents.openDevTools();
    }
    win.on("closed", () => {
        win = null;
    });
}
electron_1.ipcMain.on("onClose", () => {
    win.close();
});
electron_1.ipcMain.on("onHide", () => {
    win.hide();
});
electron_1.app.on("ready", createWindow);
electron_1.app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=main.js.map