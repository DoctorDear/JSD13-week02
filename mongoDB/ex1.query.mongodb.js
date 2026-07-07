use("sample_mflix");
// Fetch all documents from comments collection.
db.comments.find({})

// Fetch only one user from comments collection by _id = ObjectId(“5a9427648b0beebeb69579f5”).
db.comments.findOne({_id: ObjectId("5a9427648b0beebeb69579f5")});

// Fetch only one user from comments collection by email = “john_bishop@fakegmail.com”.
db.comments.findOne({email: "john_bishop@fakegmail.com"})

// Fetch only one user from comments collection by name = “John Bishop”.
db.comments.findOne({ name: "John Bishop" })

