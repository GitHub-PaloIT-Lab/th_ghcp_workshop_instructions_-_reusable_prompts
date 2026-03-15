# Task 2: Server Setup (Express)

## เป้าหมาย
สร้าง Express server พร้อม middleware พื้นฐาน + health check

## สิ่งที่ต้องทำ

### 1. สร้าง server.js
```javascript
// โครงสร้างที่ต้องมี:
// 1. require dependencies (express, cors, helmet, morgan, dotenv)
// 2. สร้าง Express app
// 3. ตั้งค่า middleware:
//    - helmet() → security headers
//    - morgan('dev') → request logging
//    - cors({ origin: CLIENT_URL }) → อนุญาต cross-origin
//    - express.json() → parse JSON body
// 4. Health check: GET /health → { status: 'ok' }
// 5. Listen on PORT (8000)
```

### 2. ทดสอบ
```bash
cd server
npm run dev

# ทดสอบ health check
curl http://localhost:8000/health
# → { "status": "ok" }
```

## ความรู้ที่ใช้
- Express middleware chain (ลำดับสำคัญ)
- dotenv สำหรับ environment variables
- CORS สำหรับ cross-origin requests

## Copilot Prompt ที่ใช้ได้
- `/setup-project`
