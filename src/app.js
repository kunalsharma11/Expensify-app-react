
//install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //for hoc,(provides store to all the compo. that make up our app)
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase.js';

const store = configureStore();



// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000)



//console.log(store.getState());
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p> , document.getElementById('app'));

store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(jsx , document.getElementById('app'));
})



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