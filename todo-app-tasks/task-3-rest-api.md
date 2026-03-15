# Task 3: REST API Endpoints

## เป้าหมาย
สร้าง CRUD endpoints สำหรับ Todo

## Data Model
```javascript
// In-memory storage
let todos = [];
let nextId = 1;

// Todo object
{
  id: 1,
  text: "ซื้อของ",
  completed: false,
  createdAt: "2024-01-01T00:00:00.000Z"
}
```

## Endpoints ที่ต้องสร้าง

### GET /api/todos — ดึง todo ทั้งหมด
- ไม่มี request body
- Response: `200` + array ของ todos

### POST /api/todos — สร้าง todo ใหม่
- Request body: `{ "text": "..." }`
- Validation: text ต้องเป็น string, ไม่ว่าง, ≤ 200 ตัวอักษร
- Response: `201` + todo ที่สร้าง
- Error: `400` + `{ error: "..." }`

### PUT /api/todos/:id — อัปเดต todo
- Request body: `{ "text": "...", "completed": true/false }`
- ส่งอย่างใดอย่างหนึ่ง หรือทั้งสอง
- Response: `200` + todo ที่อัปเดต
- Error: `404` ถ้าไม่เจอ, `400` ถ้า input ไม่ถูกต้อง

### DELETE /api/todos/:id — ลบ todo
- Response: `200` + todo ที่ลบ
- Error: `404` ถ้าไม่เจอ

## ทดสอบด้วย curl
```bash
# สร้าง
curl -X POST http://localhost:8000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "ทดสอบ"}'

# ดึงทั้งหมด
curl http://localhost:8000/api/todos

# อัปเดต
curl -X PUT http://localhost:8000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# ลบ
curl -X DELETE http://localhost:8000/api/todos/1
```

## Copilot Prompt ที่ใช้ได้
- `/implement-api`
