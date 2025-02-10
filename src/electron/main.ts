import {app,BrowserWindow, ipcMain} from 'electron';
import path from 'path';
import { isDev } from './util.js';
import { getPreloadPath } from './pathResolver.js';
import { addIncome, emptyIncomeStore, emptyStore, getIncomes, getStoreItems, setStoreItems } from './resources.js';

// Starting the app window
app.whenReady().then (async() => {
    const mainWindow = new BrowserWindow({
        // icon: path.join(app.getAppPath(),'/dist-react/icon.png'),
        title: 'Expense Tracker',
        width: 1000,
        height: 1000,
        autoHideMenuBar: true,
        backgroundColor: '#A1E3F9',
        frame: true,
        resizable: false,
        maximizable: false,
        closable: true,

        webPreferences: {
            preload:getPreloadPath(),
        }
    })
    if(isDev()){
         mainWindow.loadURL('http://localhost:3000')
         
    }
    else{
         mainWindow.loadFile(path.join(app.getAppPath(),'/dist-react/index.html'))
    }
})


// IPC handlers for the functions in the preload
ipcMain.handle("getStoreItems",()=>{
    return getStoreItems()
})
ipcMain.handle("setStoreItems",(_event,data)=>{
    return setStoreItems(data)
})
ipcMain.handle('emptyStore',()=>{
    return emptyStore()
})

ipcMain.handle('addIncome',async(_event,data)=>{
    return addIncome(data)
})
ipcMain.handle('getIncomes',async()=>{
    return getIncomes()
})
ipcMain.handle('emptyIncomeStore',async()=>{
    return emptyIncomeStore()
})




// Event for closing app window
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});


