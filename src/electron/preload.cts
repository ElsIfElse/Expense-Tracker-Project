const electron = require('electron')

electron.contextBridge.exposeInMainWorld("electron", {
    getStoreItems:()=>electron.ipcRenderer.invoke("getStoreItems"),
    setStoreItems:(data: any)=>electron.ipcRenderer.invoke("setStoreItems",data),
    emptyStore:()=>electron.ipcRenderer.invoke("emptyStore"),

    getIncomes:()=>electron.ipcRenderer.invoke("getIncomes"),
    addIncome:(data:any)=>electron.ipcRenderer.invoke("addIncome",data),
    emptyIncomeStore:()=>electron.ipcRenderer.invoke("emptyIncomeStore")
})