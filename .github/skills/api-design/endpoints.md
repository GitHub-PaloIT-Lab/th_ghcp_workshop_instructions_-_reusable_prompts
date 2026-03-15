# Endpoint Reference — Todo API

## Base URL
```
http://localhost:8000
```

## Health Check
```
GET /health
→ { "status": "ok" }
```

## CRUD Endpoints

### GET /api/todos
ดึง todo ทั้งหมด

**Response** `200 OK`
```json
[
  {
    "id": 1,
    "text": "ซื้อของ",
    "completed": false,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

### POST /api/todos
สร้าง todo ใหม่

**Request Body**
```json
{ "text": "ซื้อของ" }
```

**Validation**
- `text` ต้องเป็น string ไม่ว่าง
- ความยาวไม่เกิน 200 ตัวอักษร

**Response** `201 Created`
```json
{
  "id": 1,
  "text": "ซื้อของ",
  "completed": false,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Error** `400 Bad Request`
```json
{ "error": "Text is required" }
```

---

### PUT /api/todos/:id
อัปเดต todo (แก้ข้อความ หรือ toggle สถานะ)

**Request Body** (ส่งอย่างใดอย่างหนึ่ง หรือทั้งสอง)
```json
{ "text": "ข้อความใหม่" }
{ "completed": true }
{ "text": "ข้อความใหม่", "completed": true }
```

**Validation**
- `text` (ถ้าส่ง) ต้องเป็น string ไม่ว่าง, ไม่เกิน 200 ตัวอักษร
- `completed` (ถ้าส่ง) ต้องเป็น boolean

**Response** `200 OK` → todo ที่อัปเดตแล้ว

**Error** `404 Not Found`
```json
{ "error": "Todo not found" }
```

---

### DELETE /api/todos/:id
ลบ todo

**Response** `200 OK` → todo ที่ถูกลบ

**Error** `404 Not Found`
```json
{ "error": "Todo not found" }
```
