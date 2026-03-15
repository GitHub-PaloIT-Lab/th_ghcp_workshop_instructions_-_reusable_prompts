# Checklist — ก่อนสร้าง React Component

## 1. วางแผน Component
- [ ] component นี้ทำหน้าที่อะไร? (อธิบายได้ใน 1 ประโยค)
- [ ] รับ props อะไรบ้าง?
- [ ] มี local state ไหม? (ถ้าใช้แค่ใน component นี้)
- [ ] ต้อง callback กลับ parent ไหม? (เช่น onAdd, onDelete)

## 2. เขียน Component
- [ ] import React + hooks ที่ใช้
- [ ] import CSS file
- [ ] Functional Component + export default
- [ ] ตั้งชื่อ PascalCase (เช่น `TodoForm`)
- [ ] Destructure props ใน parameter

## 3. จัดการ State
- [ ] state ที่ใช้แค่ใน component → `useState` ในนั้น
- [ ] state ที่แชร์กับ component อื่น → ยกไป parent
- [ ] ไม่ mutate state โดยตรง (ใช้ spread/filter/map สร้าง array ใหม่)

## 4. จัดการ Form (ถ้ามี)
- [ ] ใช้ controlled input (`value` + `onChange`)
- [ ] `onSubmit` ใน `<form>` + `e.preventDefault()`
- [ ] validate ก่อนส่ง (เช่น ไม่ส่งค่าว่าง)
- [ ] clear input หลังส่งสำเร็จ

## 5. แสดงรายการ (ถ้ามี)
- [ ] ใช้ `.map()` สำหรับ render list
- [ ] ใส่ `key` ที่เป็น unique id (ไม่ใช้ index)
- [ ] แสดงข้อความเมื่อ list ว่าง

## 6. CSS
- [ ] แยกไฟล์ CSS ตาม component (เช่น `TodoForm.css`)
- [ ] ใช้ class name ที่สื่อความหมาย (kebab-case)
