import uuid from 'uuid';

// add expense
export const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt =0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    //for generating unique id use uuid library of npm
    expenses: {
       id: uuid(),
       description,
       note,
       amount,
       createdAt 
    }

});

export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});
//edit expense

export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});