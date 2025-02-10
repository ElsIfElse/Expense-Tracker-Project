

export interface Expense{
    title:string,
    amount:number,
    id:string,
    image:string | null,
    info:string,
    date:string | null,
    category:string
}


export const createNewExpenseObject = function(title:string,amount:number,info:string,image:string | null,date:string | null,category:string):Expense{

    const expenseId = Date.now().toString() + Math.random().toString(36)

    const newExpense:Expense = {
        title:title,
        amount:amount,
        info:info,
        image:image, 
        id:expenseId,
        date:date,
        category:category
    }
    // console.log({createdExpense: newExpense})
    return newExpense
}

export const getStoreData = async function():Promise<Expense[]>{
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const data = await window.electron.getStoreItems()
    const itemList:Expense[] = data.storeItems
    // console.log(itemList)
    return itemList
}

export const setStoreData = async function (item:Expense){
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await window.electron.setStoreItems(item)
    const newItemList:Expense[] = await getStoreData()
    return newItemList
}

export const emptyStoreData = async function(){
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await window.electron.emptyStore()
    const emptyList:Expense[] = await getStoreData()
    return emptyList
}

// INCOME APIS

export interface Income{
    title:string,
    amount:number,
    id:string,
    info:string,
    date?:string | null,
    category:string
}

export const createNewIncomeObject = function(title:string,amount:number,info:string,date:string | null,category:string):Income{

    const incomeId = Date.now().toString() + Math.random().toString(36)

    const newIncome:Income = {
        title:title,
        amount:amount,
        info:info,
        id:incomeId,
        date:date,
        category:category
    }

    return newIncome
}

export const getIncomes = async function():Promise<Income[]>{
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const data = await window.electron.getIncomes()
    const itemList:Income[] = data
    console.log('API function getIncomes: ',itemList)
    return itemList
}

export const addIncome = async function(income:Income){
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await window.electron.addIncome(income)
    const updatedList:Income[] = await getStoreData()
    return updatedList
}

export const emptyIncomeStore = async function(){
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await window.electron.emptyIncomeStore()
    const emptyList:Income[] = await getStoreData()
    return emptyList
}