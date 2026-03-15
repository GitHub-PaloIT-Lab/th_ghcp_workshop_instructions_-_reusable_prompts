# Task 1: โครงสร้างโปรเจค

## เป้าหมาย
สร้างโครงสร้างโฟลเดอร์และไฟล์ตั้งต้นสำหรับ Todo App

## สิ่งที่ต้องสร้าง

### โครงสร้างโฟลเดอร์
```
project/
├── server/
│   ├── package.json
│   ├── server.js      (ว่าง)
│   └── .env
├── client/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── index.js
│       ├── index.css
│       ├── App.js      (ว่าง)
│       ├── App.css
│       └── components/  (โฟลเดอร์ว่าง)
└── .github/
    └── copilot-instructions.md
```

### server/package.json
- name: "todo-server"
- dependencies: express, cors, helmet, morgan, dotenv
- devDependencies: nodemon
- scripts: start, dev

### server/.env
```
NODE_ENV=development
PORT=8000
CLIENT_URL=http://localhost:3000
```

### client/package.json
- name: "todo-client"
- dependencies: react, react-dom, react-scripts
- proxy: "http://localhost:8000"

## สิ่งที่ต้องทำ
1. สร้างโฟลเดอร์ตามโครงสร้างข้างบน
2. สร้าง package.json ทั้งสอง
3. รัน `npm install` ในทั้ง server/ และ client/
4. ตรวจว่าไม่มี error

## Copilot Prompt ที่ใช้ได้
- `/setup-project`
