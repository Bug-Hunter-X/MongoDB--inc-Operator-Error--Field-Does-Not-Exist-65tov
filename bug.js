```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{counter:-1}});
//This will result in an error if the 'counter' field does not exist.
```