import * as firebase from 'firebase';

const config = {
	apiKey            : process.env.FIREBASE_API_KEY,
	authDomain        : process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL       : process.env.FIREBASE_DATABASE_URL,
	projectId         : process.env.FIREBASE_PROJECT_ID,
	storageBucket     : process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId : process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id : childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});

// 	console.log(expenses);
// });

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id : childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});

// 	console.log(expenses);
// });

// database.ref('notes/-M0nvQXIuNsniCJG765X').remove();

// const expenses = [
// 	{
// 		description : 'Coffee',
// 		note        : '',
// 		amount      : 12.22,
// 		createdAt   : 1000
// 	},
// 	{
// 		description : 'Rent',
// 		note        : '',
// 		amount      : 120.22,
// 		createdAt   : -1000
// 	},
// 	{
// 		description : 'Sandwich',
// 		note        : '',
// 		amount      : 2.22,
// 		createdAt   : 1400
// 	}
// ];

// expenses.forEach((expense) => database.ref('expenses').push(expense));

// database.ref('notes').push({
// 	title : 'Course Topics',
// 	body  : 'React Native, Angular, python'
// });

// const firebaseNotes = {
// 	notes : {
// 		mpoamso      : {
// 			title : 'First note!',
// 			body  : 'This is my note'
// 		},
// 		ioanifnsaoif : {
// 			title : 'Another note!',
// 			body  : 'This is my note'
// 		}
// 	}
// };

// const notes = [
// 	{
// 		id    : '12',
// 		title : 'First note!',
// 		body  : 'This is my note'
// 	},
// 	{
// 		id    : '761asd',
// 		title : 'Another note!',
// 		body  : 'This is my note'
// 	}
// ];

// database.ref('notes').set(notes);
// database.ref('notes');
// database.ref().on(
// 	'value',
// 	(snapshot) => {
// 		const val = snapshot.val();
// 		console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// 	},
// 	(e) => {
// 		console.log('Error with data fetching', e);
// 	}
// );

// const onValueChange = database.ref().on(
// 	'value',
// 	(snapshot) => {
// 		console.log(snapshot.val());
// 	},
// 	(e) => {
// 		console.log('Error with data fetching', e);
// 	}
// );

// setTimeout(() => {
// 	database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(30);
// }, 10500);

// database
// 	.ref('location/city')
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// database
// 	.ref()
// 	.set({
// 		name        : 'Daniel Rodriguez',
// 		age         : 22,
// 		stressLevel : 6,
// 		job         : {
// 			title   : 'Software Developer',
// 			company : 'Google'
// 		},
// 		location    : {
// 			city    : 'Evry',
// 			country : 'France'
// 		}
// 	})
// 	.then(() => {
// 		console.log('Data is saved');
// 	})
// 	.catch((error) => {
// 		console.log('This failed.', error);
// 	});

// database.ref().update({
// 	stressLevel     : 9,
// 	'job/company'   : 'Amazon',
// 	'location/city' : 'Seattle'
// });
