use("sample_mflix");

// How many theaters does AL state has?
db.theaters.find({"location.address.state": "AL"}).count()

