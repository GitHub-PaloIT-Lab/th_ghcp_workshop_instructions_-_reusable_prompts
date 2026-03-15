# Demo 2: Reusable Prompts (15 นาที)

> **สิ่งที่ผู้เรียนจะได้**: เข้าใจว่า Prompt ต่างจาก Instruction อย่างไร — เป็น "เทมเพลตคำสั่ง" ที่เรียกใช้เมื่อต้องการ

---

## ก่อนเริ่ม (Presenter เตรียม)

- Server ต้องรันอยู่: `cd server && npm run dev`
- เปิด Copilot Chat (Agent mode)
- เตรียมไฟล์ว่างสำหรับ demo (หรือจะใช้ไฟล์ที่มีอยู่ก็ได้)

---

## Part 1: ปัญหาของ Prompt ปกติ (2 นาที)

### ขั้นตอน

1. **เปิด Copilot Chat** แล้วพิมพ์ prompt ยาว ๆ:

```
ช่วยรีวิวโค้ดทั้งโปรเจค ตรวจ naming convention ว่าใช้ camelCase สำหรับตัวแปร
PascalCase สำหรับ component, ตรวจว่า server validate input ทุก endpoint,
ตรวจ React best practices เรื่อง key, state mutation, useEffect dependency,
ตรวจ API ว่าใช้ HTTP method ถูกต้อง, status code เหมาะสม
แล้วสรุปสิ่งที่ดีและสิ่งที่ควรปรับปรุง
```

2. **ชี้ให้เห็นปัญหา**: "ทุกครั้งที่จะรีวิว ต้องพิมพ์ใหม่ ยาวมาก ลืมครบ อาจพิมพ์ไม่เหมือนเดิม"

3. **อธิบาย**: "Reusable Prompt แก้ปัญหานี้ — เขียนครั้งเดียว เรียกใช้ซ้ำได้ทุกครั้ง"

---

## Part 2: โครงสร้าง Prompt File (3 นาที)

### ขั้นตอน

1. **เปิดไฟล์** `.github/prompts/code-review.prompt.md` อธิบายทีละส่วน:

```yaml
---
mode: "agent"              # ← ทำงานใน Agent mode (ให้ Copilot ลงมือทำได้)
description: "รีวิวโค้ด"     # ← คำอธิบายที่แสดงใน dropdown
---
```

2. **ชี้ให้เห็นว่า**: เนื้อหาข้างล่าง frontmatter คือ prompt template
   - มี checklist ครบ (code style, security, React, API)
   - มีขั้นตอนทำงานชัดเจน
   - อ้างอิงกลับไปหา Instruction files ที่เกี่ยวข้อง

3. **เปรียบเทียบกับ Instructions**:

| | Instruction | Prompt |
|---|---|---|
| ทำงานเมื่อไหร่ | อัตโนมัติ (ตลอดเวลา) | **เรียกใช้เมื่อต้องการ** |
| เนื้อหา | กฎ (rules) | **คำสั่ง (commands)** |
| อุปมา | กฎบริษัท | **แบบฟอร์มสำเร็จรูป** |

---

## Part 3: เรียกใช้ Prompt จริง (5 นาที)

### Demo 3.1 — `/code-review` (2 นาที)

1. **เปิด Copilot Chat** พิมพ์ `/` แล้วเลือก `code-review`
2. Copilot จะรีวิวโค้ดทั้งโปรเจคตาม checklist ที่เขียนไว้
3. **ชี้ให้เห็น**: "ไม่ต้องพิมพ์เองเลย — prompt template ทำงานให้หมด"

### Demo 3.2 — `/implement-api` (3 นาที)

1. **ลบ endpoint ทั้งหมด**ใน `server/server.js` (เหลือแค่ middleware + health check)

> หรือถ้าไม่อยากลบ ให้สร้างไฟล์ `server/server-demo.js` ว่าง ๆ

2. **เปิด Copilot Chat** พิมพ์ `/` แล้วเลือก `implement-api`

3. **ชี้ให้เห็นว่า** Copilot:
   - สร้าง CRUD endpoints ครบ 4 ตัว (GET/POST/PUT/DELETE)
   - มี validation ตาม prompt template
   - ใช้ in-memory array ตามที่ระบุ
   - ตอบภาษาไทย (เพราะ Instructions ยังทำงานอยู่!)

4. **Key Point**: "Instruction = กฎเบื้องหลัง + Prompt = คำสั่งเฉพาะกิจ → ทำงานร่วมกัน!"

---

## Part 4: Hands-on — ให้ผู้เรียนลองเอง (5 นาที)

### Exercise 1: ใช้ Prompt ที่มีอยู่ (2 นาที)

> เปิด Copilot Chat แล้วเรียก `/implement-ui`
> สังเกตว่า Copilot สร้าง component อะไรบ้าง และตาม pattern ไหน

### Exercise 2: สร้าง Prompt ใหม่ด้วยตัวเอง (3 นาที)

> สร้างไฟล์ `.github/prompts/add-feature.prompt.md`
> แล้วเขียน prompt สำหรับเพิ่มฟีเจอร์ "filter todo by status" ตามโครงสร้างนี้:

```yaml
---
mode: "agent"
description: "เพิ่มฟีเจอร์ filter todo ตาม status (all/active/completed)"
---

# เพิ่มฟีเจอร์ Filter Todo

## สิ่งที่ต้องทำ
1. เพิ่ม state `filter` ใน App.js (ค่า: 'all', 'active', 'completed')
2. สร้าง component `TodoFilter.js` แสดงปุ่ม 3 ปุ่ม
3. กรอง todos ก่อนส่งให้ TodoList
4. เพิ่ม CSS สำหรับปุ่ม filter (highlight ปุ่มที่เลือก)

## ไม่ต้องแก้ Server — filter ฝั่ง client เท่านั้น
```

> แล้วลองเรียก `/add-feature` ใน Copilot Chat ดูผลลัพธ์

---

## สรุปท้าย Part (30 วินาที)

> **Key Takeaway**: Reusable Prompt = เทมเพลตคำสั่งสำเร็จรูป
> - เขียนครั้งเดียว เรียกใช้ซ้ำด้วย `/ชื่อ`
> - ทุกคนในทีมใช้ prompt เดียวกัน → ผลลัพธ์สม่ำเสมอ
> - ทำงานร่วมกับ Instructions (กฎ + คำสั่ง = ผลลัพธ์ที่ดี)

---

## Cheat Sheet — Prompts ในโปรเจคนี้

| Prompt | เรียกด้วย | ใช้ทำอะไร |
|--------|----------|----------|
| setup-project | `/setup-project` | สร้างโครงสร้าง server/ + client/ |
| implement-api | `/implement-api` | สร้าง CRUD endpoints |
| implement-ui | `/implement-ui` | สร้าง React components |
| code-review | `/code-review` | รีวิวโค้ดตาม checklist |
| implement-feature | `/implement-feature` | เพิ่มฟีเจอร์ end-to-end |
