# คำสั่ง curl ทดสอบ — Todo API

## ตรวจสอบว่า server ทำงาน
```bash
curl http://localhost:8000/health
# → { "status": "ok" }
```

## GET — ดึง todo ทั้งหมด
```bash
curl http://localhost:8000/api/todos
# → []  (ถ้ายังไม่มีข้อมูล)
```

## POST — เพิ่ม todo ใหม่
```bash
curl -X POST http://localhost:8000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text": "ซื้อของจากตลาด"}'
# → { "id": 1, "text": "ซื้อของจากตลาด", "completed": false, ... }
```

## POST — ทดสอบ validation (ส่งค่าว่าง)
```bash
curl -X POST http://localhost:8000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"text": ""}'
# → { "error": "Text is required" }  (400)
```

## PUT — toggle completed
```bash
curl -X PUT http://localhost:8000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
# → { "id": 1, "text": "ซื้อของจากตลาด", "completed": true, ... }
```

## PUT — แก้ไขข้อความ
```bash
curl -X PUT http://localhost:8000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"text": "ซื้อผักจากตลาดนัด"}'
# → { "id": 1, "text": "ซื้อผักจากตลาดนัด", ... }
```

## DELETE — ลบ todo
```bash
curl -X DELETE http://localhost:8000/api/todos/1
# → { "id": 1, "text": "ซื้อผักจากตลาดนัด", ... }
```

## DELETE — ทดสอบ not found
```bash
curl -X DELETE http://localhost:8000/api/todos/999
# → { "error": "Todo not found" }  (404)
```
