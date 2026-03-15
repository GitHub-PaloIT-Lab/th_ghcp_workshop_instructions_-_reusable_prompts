# Task 5: TodoForm Component

## เป้าหมาย
สร้างฟอร์มสำหรับเพิ่ม todo ใหม่

## Component Spec

### Props
- `onAdd(text)` — callback function จาก App.js

### Local State
- `text` — ข้อความที่ผู้ใช้พิมพ์

### พฤติกรรม
1. ผู้ใช้พิมพ์ข้อความใน input
2. กด Enter หรือคลิกปุ่ม "เพิ่ม"
3. ตรวจว่าไม่ว่าง (trim)
4. เรียก `onAdd(text)`
5. เคลียร์ input

### JSX Structure
```jsx
<form className="todo-form" onSubmit={handleSubmit}>
  <input
    type="text"
    className="todo-input"
    placeholder="เพิ่มสิ่งที่ต้องทำ..."
    value={text}
    onChange={(e) => setText(e.target.value)}
    maxLength={200}
  />
  <button type="submit" className="btn-add">เพิ่ม</button>
</form>
```

## CSS — TodoForm.css
- ใช้ Flexbox: input กว้างเต็ม + ปุ่มชิดขวา
- input มี border, focus state
- ปุ่มมี background color + hover effect

## สิ่งที่ต้องจำ
- ใช้ controlled input (`value` + `onChange`)
- `e.preventDefault()` ใน handleSubmit
- trim ข้อความก่อนส่ง
- clear input หลังส่ง

## Copilot Prompt ที่ใช้ได้
- `/implement-ui`
