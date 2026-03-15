# Reusable Prompts — Todo App (CRUD)

เอกสารนี้รวม prompt เทมเพลตสำหรับพัฒนา Todo App ด้วย React + Express REST API

## หลักการใช้งาน
- ภาษาไทย (คำสั่ง/คำอธิบาย)
- โค้ด JavaScript ไม่ใช้ TypeScript
- Frontend: React 18 (CRA)
- Backend: Express REST API
- เน้นโค้ดอ่านง่ายสำหรับผู้เริ่มต้น

---

## Prompts ที่มีในโปรเจค

### 1. `/setup-project` — สร้างโครงสร้างโปรเจค
อ้างอิง: task-1, task-2
```
สร้างโครงสร้างโปรเจค Todo App แบ่ง server/ (Express) และ client/ (React CRA)
พร้อม dependencies และไฟล์ตั้งต้น
```

### 2. `/implement-api` — สร้าง REST API
อ้างอิง: task-3
```
สร้าง CRUD endpoints: GET/POST/PUT/DELETE /api/todos
พร้อม input validation และ in-memory storage
```

### 3. `/implement-ui` — สร้าง React Components
อ้างอิง: task-4, task-5, task-6
```
สร้าง TodoForm, TodoList, TodoItem components
พร้อม state management ใน App.js และ CSS แยกไฟล์
```

### 4. `/code-review` — รีวิวโค้ด
```
ตรวจโค้ดทั้งโปรเจคตาม checklist: code style, security, React best practices, API design
```

### 5. `/implement-feature` — เพิ่มฟีเจอร์ใหม่
```
เพิ่มฟีเจอร์แบบ end-to-end: วางแผน → Server API → Client State → UI → ทดสอบ
```

## วิธีเรียกใช้
1. เปิด Copilot Chat
2. พิมพ์ `/` แล้วเลือก prompt ที่ต้องการ
3. เพิ่มรายละเอียดเพิ่มเติม (ถ้ามี)
