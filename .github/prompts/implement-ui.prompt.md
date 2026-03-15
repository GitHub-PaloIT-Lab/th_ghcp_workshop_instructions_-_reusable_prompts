---
mode: "agent"
description: "สร้าง React components สำหรับ Todo App — TodoForm, TodoList, TodoItem พร้อม CSS"
---

# สร้าง React Components สำหรับ Todo App

## Components ที่ต้องสร้าง

### 1. App.js (แก้ไข)
- state: `todos`, `loading`, `error`
- useEffect: fetch todos ตอนเปิดแอป
- handler functions: `addTodo`, `toggleTodo`, `editTodo`, `deleteTodo`
- render: TodoForm + TodoList

### 2. TodoForm.js (สร้างใหม่)
- Props: `onAdd` (callback)
- Local state: `text`
- ฟอร์ม: input + ปุ่ม "เพิ่ม"
- Submit → เรียก `onAdd(text)` → clear input

### 3. TodoList.js (สร้างใหม่)
- Props: `todos`, `onToggle`, `onEdit`, `onDelete`
- วน `.map()` แสดง TodoItem แต่ละตัว
- แสดงข้อความเมื่อไม่มี todo

### 4. TodoItem.js (สร้างใหม่)
- Props: `todo`, `onToggle`, `onEdit`, `onDelete`
- Local state: `isEditing`, `editText`
- Features: checkbox toggle, double-click edit, ปุ่มลบ

## CSS
- แยกไฟล์ CSS ตาม component
- ใช้ Flexbox สำหรับ layout
- class name ใช้ kebab-case

อ้างอิง instructions: `code-style.instructions.md`, `project.instructions.md`
