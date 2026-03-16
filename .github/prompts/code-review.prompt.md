---
description: "รีวิวโค้ด Todo App — ตรวจ code style, security, best practices ตาม instructions ของโปรเจค"
---

# รีวิวโค้ด Todo App

## สิ่งที่ต้องตรวจ

### 1. Code Style (ตาม code-style.instructions.md)
- [ ] Naming: camelCase (ตัวแปร/ฟังก์ชัน), PascalCase (component), kebab-case (CSS)
- [ ] Functional Components + Hooks เท่านั้น
- [ ] ไม่มี inline styles (ยกเว้นจำเป็น)
- [ ] แยกไฟล์ CSS ตาม component

### 2. Security (ตาม security.instructions.md)
- [ ] Server validate input ทุก endpoint (type, length, empty)
- [ ] ใช้ Helmet middleware
- [ ] CORS ตั้งค่า origin ชัดเจน
- [ ] trim() input ก่อนบันทึก

### 3. React Best Practices
- [ ] ใช้ `key` ที่เป็น unique id ใน list
- [ ] ไม่ mutate state โดยตรง
- [ ] useEffect dependency array ถูกต้อง
- [ ] Error handling ครบ (try/catch, error state)

### 4. API Design
- [ ] HTTP methods ถูกต้อง (GET/POST/PUT/DELETE)
- [ ] Status codes เหมาะสม (200/201/400/404)
- [ ] Response format สม่ำเสมอ
- [ ] Error response มี message ชัดเจน

## วิธีรีวิว
1. อ่านโค้ดทุกไฟล์ใน `server/` และ `client/src/`
2. ตรวจตาม checklist ข้างบน
3. แจ้งปัญหาพร้อมวิธีแก้ไข
4. สรุปสิ่งที่ดีและสิ่งที่ควรปรับปรุง
