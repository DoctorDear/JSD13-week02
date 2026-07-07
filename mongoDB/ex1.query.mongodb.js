use("sample_mflix");

db.comments.find({_id: ObjectId("5a9427648b0beebeb69579f5")});

db.comments.find({email: "john_bishop@fakegmail.com"})

db.comments.findOne({ name: "John Bishop" })

