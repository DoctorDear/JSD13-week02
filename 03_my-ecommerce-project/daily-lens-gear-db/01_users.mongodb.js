use("daily-lens-gear-db");

// 1. Clear existing users data
db.users.deleteMany({});

// 2. Insert mock data for users
db.users.insertMany([
  {
    "_id": ObjectId("65f123456789abcdef012345"),
    "name": "สมชาย ใจดี",
    "email": "somchai@email.com",
    "password": "hashed_password_somchai123",
    "role": "customer",
    "cart": [
      {
        "equipmentId": ObjectId("65f987654321fedcba543210"),
        "quantity": 1
      }
    ]
  },
  {
    "_id": ObjectId("65f123456789abcdef012346"),
    "name": "สุชาติ โชคชัย",
    "email": "suchat@email.com",
    "password": "hashed_password_suchat456",
    "role": "admin",
    "cart": []
  },
  {
    "_id": ObjectId("65f123456789abcdef012347"),
    "name": "วิภาดา รักดี",
    "email": "wipada@email.com",
    "password": "hashed_password_wipada789",
    "role": "customer",
    "cart": []
  },
  {
    "_id": ObjectId("65f123456789abcdef012348"),
    "name": "มานะ ขยันยิ่ง",
    "email": "mana@email.com",
    "password": "hashed_password_mana101",
    "role": "customer",
    "cart": [
      {
        "equipmentId": ObjectId("65f987654321fedcba543216"),
        "quantity": 1
      }
    ]
  },
  // 1. Scenario: ลูกค้าใหม่ ยังไม่ได้แอดสินค้าใส่ตะกร้า (Cart เป็นอาเรย์ว่าง)
  {
    "_id": ObjectId("65f123456789abcdef012349"),
    "name": "อนันต์ รักดี",
    "email": "anan@email.com",
    "password": "hashed_password_anan202",
    "role": "customer",
    "cart": []
  },
  // 2. Scenario: ลูกค้าแอดสินค้าลงตะกร้ามากกว่า 1 รายการ (กล้อง + เลนส์ Canon)
  {
    "_id": ObjectId("65f123456789abcdef01234a"),
    "name": "กิตติพงษ์ สุขใจ",
    "email": "kittipong@email.com",
    "password": "hashed_password_kittipong303",
    "role": "customer",
    "cart": [
      {
        "equipmentId": ObjectId("65f987654321fedcba543219"),   // Canon EOS R50 (Body)
        "quantity": 1
      },
      {
        "equipmentId": ObjectId("65f987654321fedcba54321a"),   // Canon RF 50mm f/1.8 STM
        "quantity": 1
      }
    ]
  },
  // 3. Scenario: ลูกค้าแอดสินค้าที่เป็นตัวกล้องและอุปกรณ์เสริม (กล้อง Sony + แฟลช Godox)
  {
    "_id": ObjectId("65f123456789abcdef01234b"),
    "name": "ณัฐพล ใฝ่รู้",
    "email": "nattaphol@email.com",
    "password": "hashed_password_nattaphol404",
    "role": "customer",
    "cart": [
      {
        "equipmentId": ObjectId("65f987654321fedcba543210"),   // Sony Alpha 7 IV
        "quantity": 1
      },
      {
        "equipmentId": ObjectId("65f987654321fedcba543216"),   // Godox V1-S Flash (for Sony)
        "quantity": 1
      }
    ]
  }
]);

// 3. Find and verify
db.users.find({});
