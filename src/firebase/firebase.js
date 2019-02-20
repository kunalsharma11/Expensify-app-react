import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDX8H251mECEgVFMyLjNxuhvXXZ3KVH7DU",
    authDomain: "expensify-8a277.firebaseapp.com",
    databaseURL: "https://expensify-8a277.firebaseio.com",
    projectId: "expensify-8a277",
    storageBucket: "expensify-8a277.appspot.com",
    messagingSenderId: "36516209660"
  };

firebase.initializeApp(config);
 const database = firebase.database();

export {firebase, database as default};




// // database.ref('notes').push({
// //     title: 'Course Topics',
// //     body: 'React native, angular, PHP'
// // });

// // database.ref('expenses').push({
// //     description: 'french vanilla coffee',
// //     note:'bahut mehengi h',
// //     amount: 1.89,
// //     createdAt: '11-feb'
// // });

// // database.ref('expenses').once('value').then((snapshot)=> {
// //     const val = snapshot.val();
// //     console.log(val);
// // })

// //read data from database, array

// // database.ref('expenses').once('value').then((snapshot)=> {
// //     const expenses = [];
    
// //     snapshot.forEach((childSnapshot)=> {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // });

// //subscriber

// // database.ref('expenses').on('value',(snapshot)=> {
// //     const expenses = [];
    
// //     snapshot.forEach((childSnapshot)=> {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
// //     console.log(expenses);
// // }, (e => {
// //          console.log('Error with data fetching', e);
// //      }));

    
// //child removed

// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changes

// database.ref('expenses').on('child_changed', (snapshot)=> {
//     console.log(snapshot.val());
//   })

//   //child_added -> it shows any added child, but initially it prints all of them once

// // const firebaseNotes = {
// //     notes: {
// //         kdjflka: {
// //             title: 'first note!',
// //             body: 'This is my note'
// //         },
        
// //             aksjdkaa: {
// //                 title: 'Another note',
// //                 body: 'This is my note'
// //             }
        
// //     }
// // };


// //firebase doesn't support array storage, however we'll get child object data


// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // })
// // setTimeout(() => {
// //         database.ref('name').set('kunal');
// //      }, 3500);

//  //on is for subcribe
// // const onValueChange =  database.ref().on('value', (snapshot) => {
// // console.log(snapshot.val());
// // },(e => {
// //     console.log('Error with data fetching', e);
// // })
// // );

// // setTimeout(() => {
// //     database.ref('age').set(25);
// // }, 3500);

// // //off works for all off() or for individual off(fns)
// // setTimeout(() => {
// //     database.ref().off();
// // }, 7000);


// // setTimeout(() => {
// //     database.ref('age').set(24);
// // }, 10500);


// // database.ref().once('value').then((snapshot)=> {
// //     const val = snapshot.val();
// //     console.log(val);

// // }).catch((e)=> {
// // console.log('Error fetching data', e)
// // });


// // database.ref().set({
// //     name: 'Kunal Sharma',
// //     age: 23,
// //     isSingle: false,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location : {
// //         city: 'Montreal',
// //         country: 'United States'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed:' , e);
// // })

// // database.ref('location/city').set('shivpuri');
// // database.ref('attibutes').set({
// //     height: 172,
// //     weight: 72
// // }).then(() => {
// //     console.log('Attributes are set');
// // }).catch((e) => {
// //     console.log('This is an error you got bro');
// // });

// // //update doesnt updates the child node ,, to need to do wrap in quotes
// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
   
// // });

// // database.ref().remove()
// // .then(() => {
// //     console.log('isSingle data is removed');
// // }).catch((e) => {
// // console.log('This data couldnt remove');
// // });

