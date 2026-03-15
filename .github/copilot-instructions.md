# Copilot Instructions (สำหรับ Agent ที่ทำงานในโปรเจคนี้)

## ภาพรวมสถาปัตยกรรม
- **โครงสร้างหลัก**: ฝั่ง `server/` เป็น Express REST API, ฝั่ง `client/` เป็น React 18 (JavaScript ไม่ใช้ TypeScript) ที่เชื่อมต่อผ่าน HTTP fetch API.
- **ขอบเขตบริการ**: Server จัดการ CRUD operations สำหรับ Todo; Client จัดการ state, แสดงรายการ Todo, เพิ่ม/แก้ไข/ลบ.
- **รูปแบบข้อมูล Todo**: `{ id, text, completed, createdAt }` — ดูรายละเอียด API ใน [project.instructions.md](.github/instructions/project.instructions.md).

## Workflow สำคัญ (รัน/ดีบัก)
- **พอร์ตการรัน**: Server ใช้ `PORT=8000` จาก `.env`, Client (CRA) ใช้ port `3000`.
- **คำสั่งรัน**:
  - Server: ใน `server/` ใช้ `npm run dev` (nodemon) หรือ `npm start`.
  - Client: ใน `client/` ใช้ `npm start`.
- **ตรวจสุขภาพระบบ**: `curl http://localhost:8000/health` → `{ "status": "ok" }`.
- **แก้ปัญหา Path พิเศษ**: โฟลเดอร์นี้มี zero-width space ในชื่อ — อาจทำให้ `npm install` ล้มเหลว. ดูวิธีแก้ใน [README.md](README.md).

## รูปแบบ/แนวทางการเขียน
- **Frontend**: Functional Components + Hooks (`useState`, `useEffect`), เรียก API ด้วย `fetch`, แยก component: `TodoForm`, `TodoList`, `TodoItem`.
- **Backend**: Express middleware (`helmet`, `morgan`, `cors`, `express.json`), REST endpoints: GET/POST/PUT/DELETE `/api/todos`.
- **Validation**: ตรวจ input ฝั่ง server ทุก endpoint (type, length, empty). React escape HTML อัตโนมัติเมื่อแสดงผล.

## CRUD Endpoints
| Method | Endpoint | หน้าที่ |
|--------|----------|---------|
| GET | `/api/todos` | ดึง todo ทั้งหมด |
| POST | `/api/todos` | สร้าง todo ใหม่ |
| PUT | `/api/todos/:id` | อัปเดต text หรือ completed |
| DELETE | `/api/todos/:id` | ลบ todo |

## Reusable Prompts (เรียกใช้ด้วย `/ชื่อ` ใน chat)
- `/setup-project` — สร้างโครงสร้างโปรเจค
- `/implement-api` — สร้าง REST API endpoints
- `/implement-ui` — สร้าง React components
- `/code-review` — รีวิวโค้ด
- `/implement-feature` — เพิ่มฟีเจอร์ end-to-end

## Agent Skills
- **todo-features** — CRUD workflow: ขั้นตอนเพิ่ม feature end-to-end + ตัวอย่างโค้ด + ปัญหาที่พบบ่อย. ดู [.github/skills/todo-features/SKILL.md](.github/skills/todo-features/SKILL.md).
- **react-patterns** — React component patterns: decision tree สำหรับ state placement + controlled input + list rendering + callback props. ดู [.github/skills/react-patterns/SKILL.md](.github/skills/react-patterns/SKILL.md).
- **api-design** — REST API design: HTTP methods, status codes, validation patterns + คำสั่ง curl ทดสอบ. ดู [.github/skills/api-design/SKILL.md](.github/skills/api-design/SKILL.md).

## ภาษาและผลลัพธ์
- ตอบเป็นภาษาไทยเสมอ
- สรุปสิ่งที่ทำลง [README.KNOWLEDGE.MD](README.KNOWLEDGE.MD) ทุกครั้ง

> หมายเหตุ: โปรเจคนี้เป็นสื่อการสอน GitHub Copilot ให้ยึดตามไฟล์ instructions/, prompts/, skills/ ในโปรเจคนี้เป็นหลัก
