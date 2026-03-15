# ปัญหาที่พบบ่อย — Todo CRUD

## 1. State ไม่อัปเดตหลัง API call

**อาการ**: เพิ่ม/แก้/ลบ todo แล้ว UI ไม่เปลี่ยน

**สาเหตุ**: ลืม update state หลังจาก fetch สำเร็จ

```javascript
// ❌ ผิด — เรียก API แต่ไม่อัปเดต state
const addTodo = async (text) => {
  await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({ text }),
  });
  // ไม่มี setTodos → UI ไม่เปลี่ยน
};

// ✅ ถูก — อัปเดต state ด้วย response
const addTodo = async (text) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  const newTodo = await response.json();
  setTodos([...todos, newTodo]);  // ← อัปเดต state
};
```

## 2. ลืมใส่ Content-Type header

**อาการ**: Server ได้ `req.body` เป็น `undefined`

```javascript
// ❌ ลืม headers
fetch(API_URL, {
  method: 'POST',
  body: JSON.stringify({ text }),
});

// ✅ ใส่ Content-Type
fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ text }),
});
```

## 3. Toggle ไม่ทำงาน — ส่ง string แทน boolean

**อาการ**: Checkbox คลิกแล้วไม่เปลี่ยนสถานะ

```javascript
// ❌ ส่ง string
body: JSON.stringify({ completed: 'true' })

// ✅ ส่ง boolean
body: JSON.stringify({ completed: !todo.completed })
```

## 4. ลบแล้วยังเห็น todo อยู่

**สาเหตุ**: ใช้ `splice` กับ state โดยตรง (mutate state)

```javascript
// ❌ Mutate state โดยตรง
const deleteTodo = (id) => {
  const index = todos.findIndex((t) => t.id === id);
  todos.splice(index, 1);  // mutate!
  setTodos(todos);          // React ไม่เห็นว่าเปลี่ยน
};

// ✅ สร้าง array ใหม่
const deleteTodo = (id) => {
  setTodos(todos.filter((t) => t.id !== id));
};
```

## 5. CORS Error ตอนเรียก API

**อาการ**: `Access-Control-Allow-Origin` error ใน console

**แก้ไข**: ตรวจสอบว่า server ตั้งค่า CORS ถูกต้อง
```javascript
// server.js
app.use(cors({
  origin: 'http://localhost:3000',  // ← ต้องตรงกับ client URL
}));
```
