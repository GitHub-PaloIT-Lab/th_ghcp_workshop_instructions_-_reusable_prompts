# Demo 1: Custom Instructions (15 นาที)

> **สิ่งที่ผู้เรียนจะได้**: เห็นว่า Custom Instructions ทำงานอัตโนมัติ — แค่สร้างไฟล์ Copilot ก็ปฏิบัติตามกฎทันที

---

## ก่อนเริ่ม (Presenter เตรียม)

- เปิดโปรเจคนี้ใน VS Code
- เปิด Copilot Chat ไว้
- ปิดไฟล์ทั้งหมดใน editor

---

## Part 1: แสดงให้เห็นว่า "ไม่มี Instructions" เป็นอย่างไร (3 นาที)

### ขั้นตอน
1. **เปิด Copilot Chat** แล้วถามคำถามง่าย ๆ:

```
สร้าง Express server สำหรับ Todo App ให้หน่อย
```

2. **ชี้ให้เห็น**: Copilot ตอบภาษาอังกฤษ, อาจใช้ TypeScript, โครงสร้างไม่ตรงกับโปรเจค

3. **อธิบาย**: "ปัญหาคือ Copilot ไม่รู้กฎของโปรเจคเรา — ภาษาที่ใช้, tech stack, naming convention"

---

## Part 2: สร้าง Custom Instruction ตัวแรก (5 นาที)

### ขั้นตอน

1. **เปิดไฟล์** `.github/instructions/general.instructions.md` แล้วอธิบายโครงสร้าง:

```yaml
---
applyTo: "**"          # ← ใช้กับทุกไฟล์
description: "กฎทั่วไป"  # ← คำอธิบายให้ Copilot เข้าใจ
---
```

2. **ชี้ให้เห็นว่า**:
   - `applyTo: "**"` = ทุกไฟล์ในโปรเจค
   - เนื้อหาข้างล่าง = กฎที่ Copilot ต้องทำตาม (ตอบภาษาไทย, ไม่ใช้ TypeScript, โครงสร้างโฟลเดอร์)

3. **ถาม Copilot อีกครั้ง** (คำถามเดิม):

```
สร้าง Express server สำหรับ Todo App ให้หน่อย
```

4. **ผลลัพธ์ที่ต่างออกไป**: Copilot ตอบภาษาไทย, ใช้ JavaScript, โครงสร้างตรงกับโปรเจค

5. **สรุป**: "แค่มีไฟล์ `.instructions.md` อยู่ — Copilot อ่านอัตโนมัติ ไม่ต้องเรียกใช้"

---

## Part 3: ลองเพิ่ม Instructions เฉพาะไฟล์ (4 นาที)

### ขั้นตอน

1. **เปิดไฟล์** `.github/instructions/code-style.instructions.md` แล้วชี้ `applyTo`:

```yaml
---
applyTo: "**/*.js,**/*.jsx,**/*.css"   # ← เฉพาะไฟล์ JS/JSX/CSS
description: "รูปแบบการเขียนโค้ด"
---
```

2. **อธิบาย**: "ไฟล์นี้มีผลเฉพาะตอนทำงานกับไฟล์ `.js` — ถ้าเปิด README จะไม่โดนกฎนี้"

3. **เปิดไฟล์** `server/server.js` แล้วถาม Copilot:

```
ช่วยเพิ่ม endpoint สำหรับ search todo ตาม keyword
```

4. **ชี้ให้เห็นว่า**: Copilot ใช้ naming convention ตาม instruction (camelCase, Express patterns, validation)

5. **เปิดไฟล์** `.github/instructions/security.instructions.md` ชี้ให้เห็นว่า:
   - มีกฎ validation (trim, type check, length limit)
   - Copilot นำกฎเหล่านี้มาใช้อัตโนมัติเมื่อเขียนโค้ด `.js`

---

## Part 4: Hands-on — ให้ผู้เรียนลองเอง (3 นาที)

### Prompt สำหรับผู้เรียน

> ให้เปิดไฟล์ `server/server.js` แล้วถาม Copilot:

```
เพิ่ม endpoint GET /api/todos/stats ที่ return จำนวน todo ทั้งหมด, จำนวนที่ completed, จำนวนที่ยังไม่ completed
```

### สิ่งที่ควรสังเกต
- Copilot ตอบภาษาไทย ไหม? → เพราะ `general.instructions.md`
- ใช้ camelCase ไหม? → เพราะ `code-style.instructions.md`
- มี validation/error handling ไหม? → เพราะ `security.instructions.md`
- ใช้ `res.json()` format ที่ถูกต้องไหม? → เพราะ `code-style.instructions.md`

---

## สรุปท้าย Part (30 วินาที)

> **Key Takeaway**: Custom Instructions = กฎอัตโนมัติ
> - สร้างไฟล์ไว้ → Copilot ปฏิบัติตามทันที
> - `applyTo` ควบคุมว่าไฟล์ไหนได้กฎอะไร
> - ไม่ต้องเรียกใช้ ไม่ต้องพิมพ์ซ้ำ — เหมือน "กฎบริษัท" ที่ทุกคนต้องทำตาม

---

## Cheat Sheet — Instructions ในโปรเจคนี้

| ไฟล์ | applyTo | ใช้ทำอะไร |
|------|---------|----------|
| `general` | `**` (ทุกไฟล์) | ภาษาไทย, โครงสร้าง, หลักการ |
| `tech-stack` | `server/**,client/**,*.js,*.json` | React 18, Express, ไม่ใช้ TS |
| `code-style` | `**/*.js,**/*.jsx,**/*.css` | naming, components, middleware |
| `security` | `server/**,**/*.js` | validation, helmet, CORS |
| `project` | `**` (ทุกไฟล์) | CRUD features, endpoints, วิธีรัน |
