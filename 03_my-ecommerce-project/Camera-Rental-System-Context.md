# Camera Rental System - Project Blueprint & Context (Complete Version)

**Generation Thailand - Batch 13 (JSD13)**
_Course Module: Starting Software Projects_

---

## 1. Business Concept & Proposal (01_my-ecomerce-business.md)

### 1.1 Project Overview & Target Audience
- **Platform Name:** Daily Camera & Lens Rental Web Application ("Daily Lens & Gear")
- **Target Users:** ช่างภาพมืออาชีพ, ผู้รักการถ่ายภาพ, หรือ Content Creator ที่ต้องการใช้อุปกรณ์กล้องและเลนส์คุณภาพสูงแบบเฉพาะกิจ (เช่น เลนส์ซูมถ่ายคอนเสิร์ต, แฟลชงานแต่ง) โดยไม่ต้องลงทุนซื้อราคาเต็ม
- **Core Objective:** ระบบร้านค้าออนไลน์แบบ Self-service ที่ช่วยลดภาระงานแอดมินในการตอบแชท โดยปรับปรุงระบบการทำงานให้ลูกค้าเป็นฝ่ายเลือกวันใช้งานก่อน เพื่อความแม่นยำในการเช็กสต็อก

### 1.2 Problem Statement vs. Solution Design
| ปัญหาเดิม (Manual Process) | แนวทางแก้ไขของระบบ (Date-First Automation) |
| :--- | :--- |
| **ลูกค้าเสียเวลาเลือก:** ลูกค้าเลือกกล้องและเลนส์ที่ชอบแทบตาย สุดท้ายแอดมินบอกว่า "ติดคิวคนอื่น" | **Date-Driven Catalog:** ลูกค้าเลือกวันก่อน ระบบจะคัดกรองเฉพาะของที่ว่างมาให้เลือกช้อปปิ้งทันที ไม่เสียเวลา |
| **แอดมินเช็คคิวพลาด:** ต้องเปิดสมุดคิวหรือปฏิทินร้านดูเทียบวัน เสี่ยงต่อการจองคิวซ้ำซ้อน (Double-booking) | **Automated Timestamp Query:** ระบบใช้ Backend เช็ค overlapping dates ใน Database อัตโนมัติ แม่นยำ 100% |
| **การคำนวณราคาจัดส่งยุ่งยาก:** ต้องสรุปค่าเช่า มัดจำ และค่าส่งผ่านแชท สรุปราคาผิดบ่อย | **All-in-One Checkout:** เลือกร้าน/ส่งของ พร้อมระบบคูณยอดรวมตามจำนวนวันเช่าอัตโนมัติในหน้าเดียว |

### 1.3 Core System Features (MVP) & Future Roadmap
#### Phase 1: Core Minimum Viable Product (MVP)
- **Date Entry Widget:** ส่วนอินพุตระบุวันเช่า-วันคืนที่หน้าแรก หรือด้านบนของเว็บ
- **Browse & Search Catalog:** ค้นหาอุปกรณ์ แยกตามหมวดหมู่ (Body, Lens, Flash) และกรองด้วยวันเช่า
- **Shopping Cart & Checkout:** หน้าตะกร้าสินค้าที่สรุปวันใช้งาน คำนวณราคารวมและมัดจำ พร้อมระบบชำระเงิน
- **Admin Dashboard:** จัดการเพิ่ม/ลดสต็อกสินค้า, อัปเดตราคารายวัน, และจัดการอัปเดตสถานะ (เช่น Pending -> Rented -> Returned)

#### Phase 2: Future Expansion (Post-MVP)
- **Loyalty & Condition Points:** ระบบสะสมแต้มสำหรับลูกค้าที่คืนตรงเวลาและดูแลของดี เพื่อใช้เป็นส่วนลดครั้งถัดไป

---

## 2. Business Model Canvas (02_business-model-canvas.excalidraw)

รายละเอียดโครงสร้างแบบจำลองธุรกิจสำหรับแพลตฟอร์ม **Daily Lens & Gear** ในรูปแบบ Business Model Canvas:

| **Key Partners** | **Key Activities** | **Value Propositions** | **Customer Relationships** | **Customer Segments** |
| :--- | :--- | :--- | :--- | :--- |
| - บริษัทขนส่งด่วน (เช่น Grab, Lalamove)<br>- ร้านค้า/ตัวแทนจำหน่ายกล้อง<br>- บริษัทประกันภัยอุปกรณ์<br>- KOLs/ช่างภาพมีชื่อเสียง | - บริหารจัดการและซ่อมบำรุงกล้อง/เลนส์<br>- พัฒนาและดูแลระบบจองออนไลน์<br>- ตรวจสอบเอกสารผู้เช่า<br>- ทำการตลาดและสร้างคอนเทนต์ | - เช่ากล้องระดับมืออาชีพตามการใช้งานจริง (Pay-per-day)<br>- ระบบเช็กสถานะสต็อกว่างแบบเรียลไทม์ (Date-First)<br>- แนะนำเซ็ตอุปกรณ์ตามความต้องการเฉพาะกิจ<br>- ราคาและค่ามัดจำโปร่งใส | - ระบบจองแบบอัตโนมัติ (Self-Service)<br>- ระบบยืนยันตัวตนที่ปลอดภัยและรวดเร็ว<br>- รีวิวและการสะสมคะแนน | - กลุ่มนักท่องเที่ยวและผู้รักการถ่ายภาพทั่วไป<br>- นักทำคอนเทนต์ / Influencers / YouTubers<br>- ช่างภาพมืออาชีพที่เช่าอุปกรณ์เฉพาะทาง<br>- นักศึกษาคณะนิเทศศาสตร์/ภาพยนตร์ |
| | **Key Resources** | | **Channels** | |
| | - สต็อกกล้อง เลนส์ และแฟลช<br>- แพลตฟอร์มและเซิร์ฟเวอร์ฐานข้อมูล (MongoDB)<br>- ตู้กันชื้นและหน้าร้านสำหรับเก็บรักษา<br>- ทีมช่างเทคนิคและทีมยืนยันเอกสาร | | - แพลตฟอร์มหลัก (Web Application)<br>- โซเชียลมีเดีย (Facebook, Instagram, TikTok)<br>- คีย์เวิร์ดบนเครื่องมือค้นหา (Google SEO)<br>- จุดบริการรับ-ส่งสินค้า | |

| **Cost Structure (โครงสร้างต้นทุน)** | **Revenue Streams (แหล่งรายได้)** |
| :--- | :--- |
| - ต้นทุนซื้ออุปกรณ์และกล้องเพิ่มเข้าสต็อก<br>- ค่าบำรุงรักษา อุปกรณ์ทำความสะอาด และค่าประกัน<br>- ค่าเซิร์ฟเวอร์ โดเมน และเทคโนโลยีหลังบ้าน<br>- ค่าการตลาดและการโฆษณา (Google/Facebook Ads)<br>- เงินเดือนพนักงานฝ่ายปฏิบัติการ | - ค่าเช่าอุปกรณ์คิดรายวัน (ผันแปรตามประเภทอุปกรณ์)<br>- ดอกเบี้ย/เงินประกันความเสียหายที่เรียกเก็บชั่วคราว<br>- ค่าธรรมเนียมสำหรับผู้ซื้อประกันความเสียหายเพิ่มเติม<br>- ค่าปรับกรณีส่งอุปกรณ์ล่าช้า |

---

## 3. Use Case Diagram & Booking Workflow (03_use-case-diagram.excalidraw)

### 3.1 Updated Booking Workflow (ลอจิกการจองแบบเลือกวันก่อน)
เพื่อให้ประสบการณ์ใช้งาน (UX) ลื่นไหลและไม่เสียเวลา ระบบจะทำงานตามลำดับนี้:
1. **Date Selection First:** ลูกค้าเข้าเว็บมาแล้วระบุ "วันเริ่มเช่า - วันคืนของ" เป็นอันดับแรกสุด
2. **Availability Filtering:** ระบบนำช่วงเวลาดังกล่าวไป Query ตรวจสอบใน Database ทันที
3. **Display Available Gear:** หน้าเว็บจะกรองและแสดงเฉพาะกล้องและเลนส์ที่ "สถานะว่าง" ในช่วงเวลานั้นๆ เท่านั้น (ตัวที่ไม่ว่างในช่วงเวลานั้นจะถูกซ่อน หรือขึ้นว่าไม่พร้อมใช้งาน) ทำให้ลูกค้าไม่ต้องกดเลือกของที่ติดจองคนอื่น

### 3.2 Use Case Diagram (UML Standard)
```mermaid
graph LR
    subgraph "Camera Rental System Boundary"
        %% --- Customer Use Cases ---
        UC_Login(["Login / Register"])
        UC_VerifyID(["Upload Verification Docs<br>(e.g. ID Card)"])
        UC_Browse(["Browse & Search Equipment"])
        UC_CheckAvailability(["Check Item Availability<br>& Enter Dates"])
        UC_AddToCart(["Add Available Item to Cart"])
        UC_Checkout(["Checkout, Select Delivery<br>& Process Payment"])
        UC_Track(["Track Order Status"])

        %% --- Admin Use Cases ---
        UC_ManageStock(["Manage Stock & Prices"])
        UC_ViewOrders(["View & Manage Orders"])
        UC_VerifyUser(["Verify Customer Identity"])
        UC_VerifyPayment(["Verify Payment &<br>Approve Order"])
        UC_ProcessReturns(["Process Returns, Check Condition<br>& Refund Deposit"])

        %% --- Relationships ---
        %% การอนุมัติออเดอร์ของแอดมิน จะต้องรวมการตรวจเงิน และ ตรวจเอกสารลูกค้า
        UC_ViewOrders -.->|"<<include>>"| UC_VerifyPayment
        UC_ViewOrders -.->|"<<include>>"| UC_VerifyUser
    end

    %% --- Actors ---
    Customer((Customer))
    Admin((Admin))

    %% --- Actor Connections ---
    Customer --- UC_Login
    Customer --- UC_VerifyID
    Customer --- UC_Browse
    Customer --- UC_CheckAvailability
    Customer --- UC_AddToCart
    Customer --- UC_Checkout
    Customer --- UC_Track

    Admin --- UC_ManageStock
    Admin --- UC_ViewOrders
    Admin --- Admin
    Admin --- UC_ProcessReturns
```

---

## 4. Entity Relationship (ER) Diagram (04_er-diagram.excalidraw)

ความสัมพันธ์ของข้อมูลในระบบ NoSQL นี้ ถูกออกแบบให้อยู่ในโครงสร้างแบบ 1-to-Many โดยให้คอลเลกชันศูนย์กลางอย่าง `Orders` เป็นผู้เก็บ Reference ID ของฝั่งตัวตนหลักเอาไว้ สามารถแสดงความสัมพันธ์ผ่าน Diagram ได้ดังนี้:

```mermaid
erDiagram
    USERS ||--o{ ORDERS : "places"
    EQUIPMENTS ||--o{ ORDERS : "is_rented_in"

    USERS {
        ObjectId _id PK
        String name
        String email
        String password
        String role
        Array cart
    }
    EQUIPMENTS {
        ObjectId _id PK
        String name
        String brand
        String category
        Number pricePerDay
        String status
    }
    ORDERS {
        ObjectId _id PK
        ObjectId renterId FK
        ObjectId equipmentId FK
        Date startDate
        Date endDate
        Number deposit
        String status
        Object verificationDoc
    }
```

---

## 5. Database Schema Design (05_mongodb-schema_users.json, 06_mongodb-schema_products.json, 07_mongodb-schema_orders.json)

ในการเปลี่ยนมาใช้ MongoDB เราจะใช้หลักการ **Referencing (อ้างอิงไอดี)** สำหรับเชื่อมโยงคอลเลกชันหลัก เพื่อให้ข้อมูลมีความถูกต้องจากแหล่งเดียว (Single Source of Truth) และใช้หลักการ **Embedding (ฝังข้อมูล)** สำหรับระบบตะกร้าสินค้าชั่วคราวรวมถึงข้อมูลสำเนาบัตรประชาชนประจำออเดอร์ เพื่อความปลอดภัยและรัดกุมตามกฎของร้านค้า

### 5.1 Data Collections Structure

#### 1. Users Collection
เก็บข้อมูลผู้ใช้งานระบบ ทั้งฝั่งลูกค้า (Customer) และผู้ดูแลระบบ (Admin) พร้อมระบบตะกร้าสินค้า (Cart) แบบฝังตัว
- **`_id`**: ObjectId (Primary Key ที่ MongoDB สร้างให้อัตโนมัติ)
- **`name`**: String (ชื่อ-นามสกุลของผู้ใช้งาน)
- **`email`**: String (อีเมลสำหรับใช้ Login เข้าสู่ระบบ)
- **`password`**: String (รหัสผ่านที่ผ่านการเข้ารหัสลับ/Hashed Password เพื่อความปลอดภัย)
- **`role`**: String (สิทธิ์การใช้งานในระบบ: จำกัดเฉพาะ `'customer'` หรือ `'admin'`)
- **`cart`**: Array of Objects (ตะกร้าสินค้าชั่วคราว ฝังไว้ใน User เพื่อความเร็วในการดึงข้อมูล)
  - `equipmentId`: ObjectId (อ้างอิงไปยังอุปกรณ์ที่เลือก)
  - `quantity`: Number (จำนวนชิ้น)

#### 2. Equipments Collection
เก็บคลังข้อมูลอุปกรณ์กล้อง เลนส์ และไฟแฟลชที่มีให้เช่า โดยไม่มีการเก็บวันจองซ้ำซ้อนในนี้ แต่จะใช้การ Query เช็กช่วงเวลาทับซ้อนจากฝั่ง Order เพื่อความแม่นยำสูงสุด
- **`_id`**: ObjectId (Primary Key)
- **`name`**: String (ชื่อรุ่นและชื่ออุปกรณ์)
- **`brand`**: String (ยี่ห้อ เช่น Canon, Sony, Nikon)
- **`category`**: String (หมวดหมู่อุปกรณ์: `'Body'`, `'Lens'`, `'Flash'`)
- **`pricePerDay`**: Number (ราคาค่าเช่าต่อวัน)
- **`status`**: String (สถานะพร้อมใช้งานของตัวอุปกรณ์เอง: `'available'`, `'maintenance'`)

#### 3. Orders Collection
คอลเลกชันที่เป็นศูนย์กลางหลักในการเชื่อมโยง ทำหน้าที่เก็บประวัติการเช่า ช่วงเวลาที่จอง และหลักฐานยืนยันตัวตนแบบรายครั้ง (Embed) เพื่อใช้ในกระบวนการตรวจสอบของแอดมิน
- **`_id`**: ObjectId (Primary Key)
- **`renterId`**: ObjectId (Reference ID ชี้กลับไปที่ `_id` ของคอลเลกชัน `Users`)
- **`equipmentId`**: ObjectId (Reference ID ชี้กลับไปที่ `_id` ของคอลเลกชัน `Equipments`)
- **`startDate`**: Date (วัน-เวลาที่เริ่มเช่าอุปกรณ์)
- **`endDate`**: Date (วัน-เวลาที่ต้องคืนอุปกรณ์)
- **`deposit`**: Number (ยอดเงินมัดจำประกันอุปกรณ์)
- **`status`**: String (สถานะของออเดอร์: `'pending'`, `'active'`, `'returned'`, `'cancelled'`)
- **`verificationDoc`**: Object (สำเนาเอกสารยืนยันตัวตนที่ฝังไว้เฉพาะออเดอร์นี้ เพื่อความชัวร์ในทุกรอบการเช่า)
  - `idCardImageUrl`: String (ลิงก์ที่อยู่ไฟล์รูปภาพสำเนาบัตรประชาชน)
  - `uploadedAt`: Date (วันเวลาที่อัปโหลดเอกสาร)
