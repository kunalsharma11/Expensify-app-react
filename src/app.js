
//install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //for hoc,(provides store to all the compo. that make up our app)
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', amount: 3000, createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({description: 'Rent', amount: 10500}));


// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000)

  const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);


//console.log(store.getState());
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));

// class OldSyntax{
//     constructor(){
//         this.name = 'Kunal';
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);


// class NewSyntax{
//     name = 'rohan';

// }
// const newSyntax = new NewSyntax();
// console.log(newSyntax);