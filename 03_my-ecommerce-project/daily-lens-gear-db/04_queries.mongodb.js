use("daily-lens-gear-db");

// ==========================================
// 1. ค้นหาอุปกรณ์ตามแบรนด์ และระบุประเภท (Body) ที่ "พร้อมใช้งาน (available)"
// ==========================================
// db.equipment.find({
//   brand: "Sony",
//   category: "Body",
//   status: "available"
// });


// ==========================================
// 2. ดึงข้อมูลออเดอร์ทั้งหมด พร้อมแสดงรายละเอียดอุปกรณ์ที่เช่าด้วย ($lookup เพื่อ Join ตาราง)
// ==========================================
// db.orders.aggregate([
//   {
//     $lookup: {
//       from: "equipment",              // เชื่อมโยงกับ collection 'equipment'
//       localField: "equipmentId",      // ฟิลด์ใน orders
//       foreignField: "_id",            // ฟิลด์ใน equipment
//       as: "equipmentDetail"           // ชื่อฟิลด์ผลลัพธ์ที่จะเก็บข้อมูลที่ดึงมาได้
//     }
//   },
//   {
//     $unwind: "$equipmentDetail"       // แตก Array จากการ lookup ออกมาเป็น object
//   }
// ]);


// ==========================================
// 3. ค้นหาประวัติการจองของผู้ใช้งานเฉพาะราย (เช่น สมชาย ใจดี)
// ==========================================
// db.orders.aggregate([
//   {
//     $match: {
//       renterId: ObjectId("65f123456789abcdef012345") // ID ของสมชาย
//     }
//   },
//   {
//     $lookup: {
//       from: "equipment",
//       localField: "equipmentId",
//       foreignField: "_id",
//       as: "rentedEquipment"
//     }
//   },
//   {
//     $unwind: "$rentedEquipment"
//   }
// ]);


// ==========================================
// 4. ลอจิกสำคัญสุด: ค้นหาอุปกรณ์ที่ "ว่าง" ในช่วงเวลาที่ลูกค้าเลือก (Date-First Filtering)
// สมมติ: ลูกค้าต้องการเช่าช่วงวันที่ "11 กรกฎาคม 2026" ถึง "13 กรกฎาคม 2026"
// ==========================================
const wantedStart = ISODate("2026-07-11T00:00:00Z");
const wantedEnd = ISODate("2026-07-13T00:00:00Z");

// ขั้นตอนที่ A: หา ID ของอุปกรณ์ทั้งหมดที่ "ติดคิวจอง" ในช่วงเวลาดังกล่าว
const bookedEquipmentIds = db.orders.find({
  // ลอจิกเช็กช่วงเวลาทับซ้อน (Overlapping Dates):
  // คิวจองเริ่มก่อนที่เราจะคืน AND คิวจองสิ้นสุดหลังเราเริ่มรับของ
  startDate: { $lte: wantedEnd },
  endDate: { $gte: wantedStart },
  status: { $in: ["pending", "active"] } // สนใจเฉพาะออเดอร์ที่จองสำเร็จ/กำลังเช่าอยู่
}).map(order => order.equipmentId);

// ขั้นตอนที่ B: ค้นหาอุปกรณ์ในคลังทั้งหมดที่ "ไม่ได้อยู่ในรายชื่อที่ติดจอง" และสถานะเครื่องพร้อมใช้งาน
db.equipment.find({
  _id: { $nin: bookedEquipmentIds },
  status: "available"
});
