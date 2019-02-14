import {createStore } from 'redux';
//Action generator - functions that return action object
 const incrementCount = ({incrementBy = 1} = {}) => ({
     type: 'INCREMENT',
     //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    //incrementBy: incrementBy
    incrementBy
 
    });

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy

});

const setCountToZero = ({setCount = 0} = {}) => ({
    type: 'SET',
    setCount
});



//Reducers- pure functions(output depends on input only), never change state or action

//
const store = createStore((state = {count: 0}, action) => {
    
    switch(action.type){
        case 'INCREMENT':
            //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
            count: state.count + action.incrementBy
            };

        case 'DECREMENT':
        //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : -1;    
        return{
                    count: state.count - action.decrementBy
                };

        case 'SET':
            return{
               count: action.setCount
           }
        
        case 'RESET':
             return{
            count: 0
        }
            
        default:
        return state;
    }
    
   
    
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//unsubscribe();
// store.dispatch(
//     {
//         type: 'INCREMENT',         //convention to use uppercase and _
//         incrementBy: 5
//     }
// );

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

unsubscribe();
// store.dispatch(
//     {
//         type: 'INCREMENT'         //convention to use uppercase and _
//     }
// );

// store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});
// store.dispatch(
//     {
//         type: 'DECREMENT',         //convention to use uppercase and _
//         decrementBy: 2
//     }
// );

store.dispatch(decrementCount({ decrementBy: 10}));
// store.dispatch(
//     {
//         type: 'SET',         //convention to use uppercase and _
//         count: 101
//     }
// );

store.dispatch(setCountToZero( {setCount: 100}));
store.dispatch(setCountToZero());