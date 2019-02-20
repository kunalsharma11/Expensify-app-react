
//install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //for hoc,(provides store to all the compo. that make up our app)
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpense} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase.js';

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

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx , document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p> , document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) =>{
    if(user){      
        store.dispatch(login(user.uid)); 
        console.log('uid', user.uid);
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

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