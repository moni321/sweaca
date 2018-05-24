db.getCollection('sweaca.register').update(
    // query 
    {
        username : "Sweatha"
    },
    
    // update 
    {
        "$set":(username:"Swea")
    },
    
    // options 
    {
        "multi" : false,  // update only one document 
        "upsert" : false  // insert a new document, if no existing document match the query 
    }
);