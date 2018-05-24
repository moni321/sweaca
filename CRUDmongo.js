db.getCollection('sweaca.login').update(
    // query 
    {
        username : "Sweatha"
    },
    
    // update 
    {
        "$set":(password:"1234")
    },
    
    // options 
    {
        "multi" : false,  // update only one document 
        "upsert" : false  // insert a new document, if no existing document match the query 
    }
);