const {MongoClient} = require('mongodb');

// Url needed to connect backend to DB // localhost: for running the mongodb secondary memory.
const url = "mongodb+srv://krish:%40Krish9611785530@codinglearning.1um5h8j.mongodb.net/";
const client = new MongoClient(url);// It's a class!

const dbName = 'Coding';

async function main(){
    await client.connect(); // backend connected to cluster/servers :: Takes time await
    console.log('Connected Successfully to server');
    // Cluster can have multiple DB :- don't need await 
    const db = client.db(dbName); // selects the database
    // DB can multiple collections/tables :-
    const collection = db.collection('Learning');//selects the collection inside that database so we can perform CRUD operations.

    // .toArray() does the Network call! brings object to array.
    // cursor object : points one by one document(rows). -> for await (const doc of findResult) console.log(doc);
    // cursor never does network call. So entier data don't comes once!
    const findResult = await collection.find({}).toArray(); // It brings all data cause toArray()
    // const findResult =  collection.find({}); 
    // const res = await findResult.toArray();

    // Insert document(rows)
    const insertResult = await collection.insertOne({"name":"uowiwiiw","age":80});
    const insertResult1 = await collection.insertMany([{"a":1},{"a":2},{"a":3}]);

    const filteredDocs = await collection.find({a:3}).toArray(); // return an array!

    console.log('found newly added  =>',insertResult1);// newly added only
    console.log('found documents filtered by {a:3}=>',filteredDocs);

    return 'done.';
}
main()
.then(console.log)
.catch(console.error)// couldn't connect.
.finally(()=>client.close());
