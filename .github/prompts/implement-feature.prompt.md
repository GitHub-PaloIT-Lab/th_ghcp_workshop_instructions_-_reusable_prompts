---
mode: "agent"
description: "เพิ่มฟีเจอร์ใหม่ให้ Todo App แบบ end-to-end — ตั้งแต่ API → state → UI"
---

# เพิ่มฟีเจอร์ใหม่ให้ Todo App

ฟีเจอร์ที่ต้องการ: {{feature_description}}

## ขั้นตอนการทำ

### 1. วางแผน
- ฟีเจอร์นี้กระทบไฟล์ไหนบ้าง?
- ต้องเพิ่ม/แก้ API endpoint ไหม?
- ต้องเพิ่ม state ไหม? อยู่ที่ component ไหน?
- ต้องสร้าง component ใหม่ หรือแก้ component เดิม?

### 2. Server (ถ้าต้องแก้)
- เพิ่ม/แก้ route handler ใน `server/server.js`
- เพิ่ม validation สำหรับ input ใหม่
- ทดสอบด้วย curl

### 3. Client
- เพิ่ม state/handler ใน `App.js` (ถ้าต้องการ)
- แก้ไข/สร้าง component ที่เกี่ยวข้อง
- เพิ่ม CSS ที่จำเป็น

### 4. ทดสอบ
- ทดสอบ happy path
- ทดสอบ edge case (ค่าว่าง, ข้อมูลไม่ถูกต้อง)
- ตรวจว่า feature เดิมยังทำงานปกติ

อ้างอิง skills: `todo-features` (CRUD workflow), `react-patterns` (component design), `api-design` (endpoint design)
