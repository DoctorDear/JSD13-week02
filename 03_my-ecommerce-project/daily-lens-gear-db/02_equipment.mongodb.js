use("daily-lens-gear-db");

// 1. Clear existing equipment data
db.equipment.deleteMany({});

// 2. Insert mock data for equipment
db.equipment.insertMany([
  {
    "_id": ObjectId("65f987654321fedcba543210"),
    "name": "Sony Alpha 7 IV",
    "brand": "Sony",
    "category": "Body",
    "pricePerDay": 1500,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543211"),
    "name": "Canon EOS R6 Mark II",
    "brand": "Canon",
    "category": "Body",
    "pricePerDay": 1600,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543212"),
    "name": "Sony FX3 Cinema Camera",
    "brand": "Sony",
    "category": "Body",
    "pricePerDay": 2500,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543213"),
    "name": "Sony FE 24-70mm f/2.8 GM II",
    "brand": "Sony",
    "category": "Lens",
    "pricePerDay": 1000,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543214"),
    "name": "Canon RF 24-70mm f/2.8L IS USM",
    "brand": "Canon",
    "category": "Lens",
    "pricePerDay": 1100,
    "status": "maintenance"
  },
  {
    "_id": ObjectId("65f987654321fedcba543215"),
    "name": "Sony FE 50mm f/1.2 GM",
    "brand": "Sony",
    "category": "Lens",
    "pricePerDay": 900,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543216"),
    "name": "Godox V1-S Flash (for Sony)",
    "brand": "Godox",
    "category": "Flash",
    "pricePerDay": 300,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543217"),
    "name": "Godox V1-C Flash (for Canon)",
    "brand": "Godox",
    "category": "Flash",
    "pricePerDay": 300,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543218"),
    "name": "Godox AD200 Pro Pocket Flash",
    "brand": "Godox",
    "category": "Flash",
    "pricePerDay": 500,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543219"),
    "name": "Canon EOS R50 (Body)",
    "brand": "Canon",
    "category": "Body",
    "pricePerDay": 800,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba54321a"),
    "name": "Canon RF 50mm f/1.8 STM",
    "brand": "Canon",
    "category": "Lens",
    "pricePerDay": 300,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba54321b"),
    "name": "Canon RF 24-105mm f/4-7.1 IS STM",
    "brand": "Canon",
    "category": "Lens",
    "pricePerDay": 500,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba54321c"),
    "name": "Canon EF 50mm f/1.8 STM",
    "brand": "Canon",
    "category": "Lens",
    "pricePerDay": 200,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba54321d"),
    "name": "Canon Mount Adapter EF-EOS R",
    "brand": "Canon",
    "category": "Adapter",
    "pricePerDay": 150,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba54321e"),
    "name": "Canon EOS R5 (Body)",
    "brand": "Canon",
    "category": "Body",
    "pricePerDay": 2000,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba54321f"),
    "name": "Canon EOS R8 (Body)",
    "brand": "Canon",
    "category": "Body",
    "pricePerDay": 1100,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543220"),
    "name": "Canon EOS C70 Cinema Camera",
    "brand": "Canon",
    "category": "Body",
    "pricePerDay": 3000,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543221"),
    "name": "Canon EOS R7 (Body)",
    "brand": "Canon",
    "category": "Body",
    "pricePerDay": 1300,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543222"),
    "name": "Canon RF 70-200mm f/2.8L IS USM",
    "brand": "Canon",
    "category": "Lens",
    "pricePerDay": 1200,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543223"),
    "name": "Canon RF 85mm f/1.2L USM",
    "brand": "Canon",
    "category": "Lens",
    "pricePerDay": 1500,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543224"),
    "name": "Canon EF 70-200mm f/2.8L IS III USM",
    "brand": "Canon",
    "category": "Lens",
    "pricePerDay": 900,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543225"),
    "name": "Canon Speedlite EL-5 Flash",
    "brand": "Canon",
    "category": "Flash",
    "pricePerDay": 400,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543226"),
    "name": "Canon Speedlite 600EX II-RT Flash",
    "brand": "Canon",
    "category": "Flash",
    "pricePerDay": 300,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543227"),
    "name": "Godox Xpro-S Wireless Flash Trigger (for Sony)",
    "brand": "Godox",
    "category": "Flash",
    "pricePerDay": 150,
    "status": "available"
  },
  {
    "_id": ObjectId("65f987654321fedcba543228"),
    "name": "Godox Xpro-C Wireless Flash Trigger (for Canon)",
    "brand": "Godox",
    "category": "Flash",
    "pricePerDay": 150,
    "status": "available"
  }
]);

// 3. Find and verify
db.equipment.find({});
