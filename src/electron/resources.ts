import Store from "electron-store"



// EXPENSE HANDLING
export interface Expense{
    title:string,
    amount:number,
    id:string,
    image:string | null,
    info:string,
    date?:string | null,
    category:string
}

interface storeStructure{
    expenses:Expense[],
    incomes:Income[],
}

const store = new Store<storeStructure>({
    defaults:{
        expenses: [],
        incomes: []
    }
})
console.log('Store Path:',store.path)


export async function getStoreItems(){
    const storeItems =  store.get('expenses')
    return {storeItems}
}

export  function setStoreItems(item:Expense){
    const currentItems:Expense[] =  store.get('expenses')
    store.set('expenses',[...currentItems,item])
    const updatedItems:Expense[] =  store.get('expenses')
    return updatedItems
}

export function emptyStore(){
    store.set('expenses',[])
    const currentList =  store.get('expenses')
    return currentList
}

// INCOME HANDLING
export interface Income{
    title:string,
    amount:number,
    id:string,
    info:string,
    date?:string | null,
    category:string
}



export const addIncome =  function(income:Income){
    const currentItems:Income[] =  store.get('incomes')
    store.set('incomes',[...currentItems,income])
    const updatedItems:Income[] =  store.get('incomes')
    return updatedItems
}

export const getIncomes =  function(){
    const storeItems:Income[] =  store.get('incomes')
    console.log(storeItems)
    return storeItems
}

export const emptyIncomeStore =  function(){
    store.set('incomes', [])
    const currentList:Income[] =  store.get('incomes')
    return currentList
}

