import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//need reducers for this functionalities one for expenses, one for filters
//add, remove, edit, set_text, sortBydate/amount, setstartdate, set endDate

// add expense
const addExpense = (
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

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id

});
//edit expense

const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

//expense reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
         return [...state, action.expenses];  //spread operator
        case 'REMOVE_EXPENSE':
         return state.filter(({id}) => {
            return id!==action.id;
         });   
        case 'EDIT_EXPENSE':
        return state.map((expenses) => {
            if(expenses.id === action.id){
                return {
                    ...expenses,
                    ...action.updates
                };
            }else{
                return expenses;
            };
        });
        
         default:
            return state;
    }
};
//filter reducer elements

//settextfilter
const setTextFilter= (text = '') => ({
        type: 'TEXT_FILTER',
        text
});

//sortby amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
    
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
    
});

//set start and end date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined

};


const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'TEXT_FILTER':
            return {
                 ...state,
                        text: action.text
                    };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
        };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
        };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
        };
         
        default:
            return state;
    }

};

//timestamps(in milisec) starts from jan 1 1970

//get visible expenses

    const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
        return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

            //use same as string.contains in java for text

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b) => {
            if(sortBy === 'date'){
                return a.createdAt < b.createdAt ? 1 : -1;
            }else if(sortBy === 'amount'){
                return a.amount < b.amount ? 1 : -1;
            }
        });
    };

//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,       //key:value
        filters: filtersReducer
    }));

    store.subscribe(() => {
        const state = store.getState();
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
        console.log(visibleExpenses);
    });


const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:410, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Sutta', amount:1500, createdAt: -1000}));
//console.log(store.getState());

//store.dispatch(removeExpense({ id: expenseOne.expenses.id}));

//store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 500}));

//store.dispatch(setTextFilter('sutta'));
// store.dispatch(setTextFilter(''));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//  store.dispatch(setEndDate(999));


const demoState = {
    expenses: [{
        id: 'akljdlkfj',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 40000,  //rent in pennies(divide by 100)
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }

};

// const user= {
//     name: 'Jen',
//     age: 24
// };
// console.log({...user
//     ,location: 'Nepal', age: 26
// }); // to support spread operator for objects need to change in babel