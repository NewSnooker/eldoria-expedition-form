# 🏛️ ระบบลงทะเบียนสำรวจเมืองโบราณเอลดอเรีย (Realbugz Thai & English Edition)

เว็บแอปพลิเคชันจำลองการทดสอบซอฟต์แวร์และการค้นหา Bug ในแบบฟอร์มลงทะเบียน พัฒนาขึ้นเพื่อใช้ประกอบการเรียนการสอนรายวิชา **การทดสอบและประเมินคุณภาพซอฟต์แวร์ (Software Testing and Quality Assurance)**

---

## 🌟 ฟีเจอร์เด่นของระบบ
- 🌐 **ระบบสลับ 2 ภาษา:** สลับโหมด **ภาษาไทยล้วน (TH)** และ **ภาษาอังกฤษล้วน (EN)** ได้ทันที ไม่มีวงเล็บปน
- 🎨 **ดีไซน์อบอุ่น สบายตา (Warm Theme):** โทนสีอบอุ่นนุ่มนวลแบบ Linen / Warm Sand สไตล์ Minimalist
- 🛡️ **การตรวจสอบข้อมูลแบบเรียลไทม์ (Input Validation):** ใช้ **React Hook Form + Zod**
- 📑 **หน้า Requirements ครบถ้วนทั้ง 2 ภาษา:** มีหน้า `/requirements` สำหรับเปิดดูข้อกำหนด 12 ฟิลด์
- 🎓 **แถบข้อมูลนักศึกษาภาษาไทย:** แสดงรหัสนักศึกษา ชื่อ-สกุล สาขาวิชา บน Navbar และ Footer
- 💡 **ปุ่มคำใบ้ภารกิจ (Mission Hints):** มีป๊อปอัปให้แนวทางการทดสอบสำหรับ Tester
- 🐞 **ซ่อน Bug 2 จุดสำหรับให้เพื่อนฝึกเป็น Tester** พร้อมคู่มือวิธีแก้ไขในซอร์สโค้ด

---

## 🚀 วิธีการติดตั้งและรันโปรเจกต์ (Getting Started)

1. **เข้าสู่โฟลเดอร์โปรเจกต์:**
   ```bash
   cd eldoria-expedition-form
   ```

2. **ติดตั้ง Dependencies:**
   ```bash
   npm install
   ```

3. **รันเซิร์ฟเวอร์สำหรับพัฒนา (Development Server):**
   ```bash
   npm run dev
   ```

4. **เปิดเบราว์เซอร์เข้าใช้งาน:**
   - หน้าแบบฟอร์มลงทะเบียน: [http://localhost:3000/form](http://localhost:3000/form)
   - หน้าข้อกำหนดของแบบฟอร์ม: [http://localhost:3000/requirements](http://localhost:3000/requirements)

---

## ✏️ วิธีกรอก/แก้ไขข้อมูลนักศึกษา
เปิดไฟล์ `src/lib/student-config.ts` แล้วแก้ไขข้อมูลของคุณ:
```typescript
export const STUDENT_INFO: StudentInfo = {
  studentId: "660112418001", // 👈 ใส่รหัสนักศึกษาของคุณที่นี่
  fullNameThai: "นายทดสอบ มุ่งมั่นพัฒนา (นักศึกษา)", // 👈 ใส่ชื่อ-นามสกุลภาษาไทยของคุณที่นี่
  majorThai: "สาขาวิชาวิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ",
  facultyThai: "คณะวิทยาศาสตร์",
  universityThai: "มหาวิทยาลัยราชภัฏอุดรธานี",
};
```

---

## 🛠️ คู่มือเฉลย Bug และ "วิธีแก้ไขใน Code" (Developer Fix Guide)

ไฟล์ที่ควบคุมการตรวจสอบความถูกต้องทั้งหมดอยู่ที่: [`src/lib/schema.ts`](src/lib/schema.ts)

### 🐞 จุดที่ 1: Full Name Validation Bypass Bug
- **ข้อกำหนด (Requirement):** ไม่อนุญาตให้มีตัวเลขหรืออักขระพิเศษ (อนุญาตเฉพาะตัวอักษร, เว้นวรรค, ขีดกลาง `-`, และ Apostrophe `'`)
- **สาเหตุของ Bug:** ใน `src/lib/schema.ts` ไม่ได้ใส่ `.regex()` ดักจับ ทำให้ผู้ใช้พิมพ์ตัวเลขหรืออักขระพิเศษ (เช่น `John123#@!`) แล้วส่งผ่านได้
- **👉 วิธีแก้ไข (How to Fix):**
  ในไฟล์ `src/lib/schema.ts` ให้เพิ่ม `.regex()` ในฟิลด์ `fullName` ดังนี้:
  ```typescript
  fullName: z
    .string()
    .min(1, { message: "กรุณากรอกชื่อ-นามสกุล" })
    .min(2, { message: "ชื่อ-นามสกุลต้องมีความยาวอย่างน้อย 2 ตัวอักษร" })
    .max(50, { message: "ชื่อ-นามสกุลต้องมีความยาวไม่เกิน 50 ตัวอักษร" })
    .regex(/^[a-zA-Z\u0E00-\u0E7F\u0400-\u04FF\s\-']+$/, {
      message: "อนุญาตเฉพาะตัวอักษร, เว้นวรรค, ขีดกลาง (-) และ Apostrophe (') เท่านั้น",
    }),
  ```

---

### 🐞 จุดที่ 2: Preferred Role Mandatory Bypass Bug
- **ข้อกำหนด (Requirement):** Preferred Role เป็นช่องบังคับ (Required field) ต้องเลือกอย่างน้อย 1 บทบาท
- **สาเหตุของ Bug:** ใน `src/lib/schema.ts` กำหนดเป็น `z.array(z.string()).optional()` ทำให้ไม่มีการตรวจสอบจำนวนตัวเลือก
- **👉 วิธีแก้ไข (How to Fix):**
  ในไฟล์ `src/lib/schema.ts` ให้เปลี่ยน `.optional()` เป็น `.min(1)` ดังนี้:
  ```typescript
  roles: z
    .array(z.string())
    .min(1, { message: "กรุณาเลือกบทบาทที่ต้องการอย่างน้อย 1 บทบาท" }),
  ```
