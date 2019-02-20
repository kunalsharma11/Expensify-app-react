import uuid from 'uuid';
import database from '../firebase/firebase';



//for dispatching functions, redux-thunk is used module

// add expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// export const addExpense = (expense
//     // {
//     //     description = '', 
//     //     note = '', 
//     //     amount = 0, 
//     //     createdAt =0
//     // } = {}
// ) => ({
//     type: 'ADD_EXPENSE',
//     //for generating unique id use uuid library of npm
//     // expenses: {
//     //    id: uuid(),
//     //    description,
//     //    note,
//     //    amount,
//     //    createdAt 
//     // }
//     expense

// });

//dispatching function, possible because of redux-thunk
export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { 
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0

        } = expenseData;

        const expense = {description, note, amount, createdAt};
        return database.ref('expenses').push(expense)
        .then((ref) => {
            // console.log(`Id is ${ref.key}`);
            // console.log(`Id is ${expense.createdAt}`);
            dispatch(addExpense({
                id:ref.key,
                ...expense
            })
           
            )})
        // ).catch((e)=> {
            // console.log('Error fetching data', e)
            // });
    };

};

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});

export const startRemoveExpense = ({id}) => {
    return (dispatch) => {
       return database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}));
        });
        
    };

};

//edit expense

export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});



//Set_Expenses
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpense = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            })
            dispatch(setExpenses(expenses));
        })


    };
};


