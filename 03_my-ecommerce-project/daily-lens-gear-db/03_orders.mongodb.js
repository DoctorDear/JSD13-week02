use("daily-lens-gear-db");

// 1. Clear existing orders data
db.orders.deleteMany({});

// 2. Insert mock data for orders
db.orders.insertMany([
  // 1. Existing Sony Orders
  {
    "_id": ObjectId("65f9be8f123456789abcdef0"),
    "renterId": ObjectId("65f123456789abcdef012345"),      // สมชาย ใจดี
    "equipmentId": ObjectId("65f987654321fedcba543210"),   // Sony Alpha 7 IV (1,500/day, 5 days)
    "startDate": ISODate("2026-07-10T00:00:00Z"),
    "endDate": ISODate("2026-07-15T00:00:00Z"),
    "rentalFee": 7500,
    "deposit": 5000,
    "totalAmount": 12500,
    "status": "pending",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_somchai.jpg",
      "uploadedAt": ISODate("2026-07-09T14:30:00Z")
    }
  },
  {
    "_id": ObjectId("65f9be8f123456789abcdef1"),
    "renterId": ObjectId("65f123456789abcdef012347"),      // วิภาดา รักดี
    "equipmentId": ObjectId("65f987654321fedcba543213"),   // Sony FE 24-70mm GM II (1,000/day, 3 days)
    "startDate": ISODate("2026-07-12T00:00:00Z"),
    "endDate": ISODate("2026-07-15T00:00:00Z"),
    "rentalFee": 3000,
    "deposit": 3000,
    "totalAmount": 6000,
    "status": "active",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_wipada.jpg",
      "uploadedAt": ISODate("2026-07-11T09:00:00Z")
    }
  },
  {
    "_id": ObjectId("65f9be8f123456789abcdef2"),
    "renterId": ObjectId("65f123456789abcdef012348"),      // มานะ ขยันยิ่ง
    "equipmentId": ObjectId("65f987654321fedcba543218"),   // Godox AD200 Pro (500/day, 2 days)
    "startDate": ISODate("2026-07-05T00:00:00Z"),
    "endDate": ISODate("2026-07-07T00:00:00Z"),
    "rentalFee": 1000,
    "deposit": 2000,
    "totalAmount": 3000,
    "status": "returned",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_mana.jpg",
      "uploadedAt": ISODate("2026-07-04T16:15:00Z")
    }
  },

  // 2. Scenario: Pending Order - รอ Admin ตรวจเอกสารยืนยันตัวตน
  {
    "_id": ObjectId("65f9be8f123456789abcdef3"),
    "renterId": ObjectId("65f123456789abcdef012347"),      // วิภาดา รักดี
    "equipmentId": ObjectId("65f987654321fedcba54321e"),   // Canon EOS R5 (Body) (2,000/day, 2 days)
    "startDate": ISODate("2026-07-18T00:00:00Z"),
    "endDate": ISODate("2026-07-20T00:00:00Z"),
    "rentalFee": 4000,
    "deposit": 8000,
    "totalAmount": 12000,
    "status": "pending",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_wipada.jpg",
      "uploadedAt": ISODate("2026-07-17T10:00:00Z")
    }
  },

  // 3. Scenario: Active Orders - ลูกค้าเช่ากล้องและเลนส์ไปใช้งานแล้ว (มีเอกสารครบถ้วน)
  {
    "_id": ObjectId("65f9be8f123456789abcdef4"),
    "renterId": ObjectId("65f123456789abcdef012345"),      // สมชาย ใจดี
    "equipmentId": ObjectId("65f987654321fedcba543219"),   // Canon EOS R50 (Body) (800/day, 3 days)
    "startDate": ISODate("2026-07-08T00:00:00Z"),
    "endDate": ISODate("2026-07-11T00:00:00Z"),
    "rentalFee": 2400,
    "deposit": 3000,
    "totalAmount": 5400,
    "status": "active",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_somchai.jpg",
      "uploadedAt": ISODate("2026-07-07T11:15:00Z")
    }
  },
  {
    "_id": ObjectId("65f9be8f123456789abcdef5"),
    "renterId": ObjectId("65f123456789abcdef012345"),      // สมชาย ใจดี
    "equipmentId": ObjectId("65f987654321fedcba54321a"),   // Canon RF 50mm f/1.8 STM (300/day, 3 days)
    "startDate": ISODate("2026-07-08T00:00:00Z"),
    "endDate": ISODate("2026-07-11T00:00:00Z"),
    "rentalFee": 900,
    "deposit": 1000,
    "totalAmount": 1900,
    "status": "active",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_somchai.jpg",
      "uploadedAt": ISODate("2026-07-07T11:15:00Z")
    }
  },

  // 4. Scenario: Returned Order - คืนของเรียบร้อย เช็กสภาพผ่านและคืนมัดจำแล้ว
  {
    "_id": ObjectId("65f9be8f123456789abcdef6"),
    "renterId": ObjectId("65f123456789abcdef012348"),      // มานะ ขยันยิ่ง
    "equipmentId": ObjectId("65f987654321fedcba543220"),   // Canon EOS C70 (3,000/day, 3 days)
    "startDate": ISODate("2026-07-01T00:00:00Z"),
    "endDate": ISODate("2026-07-04T00:00:00Z"),
    "rentalFee": 9000,
    "deposit": 10000,
    "totalAmount": 19000,
    "status": "returned",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_mana.jpg",
      "uploadedAt": ISODate("2026-06-30T15:20:00Z")
    }
  },

  // 5. Scenario: Cancelled Order - การยกเลิกออเดอร์
  {
    "_id": ObjectId("65f9be8f123456789abcdef7"),
    "renterId": ObjectId("65f123456789abcdef012345"),      // สมชาย ใจดี
    "equipmentId": ObjectId("65f987654321fedcba543222"),   // Canon RF 70-200mm f/2.8L (1,200/day, 2 days)
    "startDate": ISODate("2026-07-12T00:00:00Z"),
    "endDate": ISODate("2026-07-14T00:00:00Z"),
    "rentalFee": 2400,
    "deposit": 4000,
    "totalAmount": 6400,
    "status": "cancelled",
    "cancelReason": "ID card photo is too blurry and illegible. Renter failed to re-upload within 24 hours.",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/blurry_id_card_somchai.jpg",
      "uploadedAt": ISODate("2026-07-11T13:40:00Z")
    }
  },

  // 6. Scenario: Active Orders with EF Adapter - เช่าเลนส์ EF ไปใช้ร่วมกับ Mount Adapter
  {
    "_id": ObjectId("65f9be8f123456789abcdef8"),
    "renterId": ObjectId("65f123456789abcdef012347"),      // วิภาดา รักดี
    "equipmentId": ObjectId("65f987654321fedcba54321c"),   // Canon EF 50mm f/1.8 STM (200/day, 3 days)
    "startDate": ISODate("2026-07-09T00:00:00Z"),
    "endDate": ISODate("2026-07-12T00:00:00Z"),
    "rentalFee": 600,
    "deposit": 1000,
    "totalAmount": 1600,
    "status": "active",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_wipada.jpg",
      "uploadedAt": ISODate("2026-07-08T16:05:00Z")
    }
  },
  {
    "_id": ObjectId("65f9be8f123456789abcdef9"),
    "renterId": ObjectId("65f123456789abcdef012347"),      // วิภาดา รักดี
    "equipmentId": ObjectId("65f987654321fedcba54321d"),   // Canon Mount Adapter EF-EOS R (150/day, 3 days)
    "startDate": ISODate("2026-07-09T00:00:00Z"),
    "endDate": ISODate("2026-07-12T00:00:00Z"),
    "rentalFee": 450,
    "deposit": 500,
    "totalAmount": 950,
    "status": "active",
    "verificationDoc": {
      "idCardImageUrl": "https://storage.googleapis.com/camera-rental-bucket/verification/id_card_wipada.jpg",
      "uploadedAt": ISODate("2026-07-08T16:05:00Z")
    }
  }
]);

// 3. Find and verify
db.orders.find({});
