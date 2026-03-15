# Demo 3: Agent Skills (15 นาที)

> **สิ่งที่ผู้เรียนจะได้**: เห็นว่า Skill ต่างจาก Instructions/Prompts อย่างไร — เป็น "คู่มือผู้เชี่ยวชาญ" ที่ Agent หยิบมาใช้เอง

---

## ก่อนเริ่ม (Presenter เตรียม)

- Server ต้องรันอยู่: `cd server && npm run dev`
- เปิด Copilot Chat (Agent mode)
- เปิด folder `.github/skills/` ให้เห็นโครงสร้าง

---

## Part 1: ทบทวน 3 แนวคิด (2 นาที)

### อธิบายด้วยตารางเปรียบเทียบ

| | Instructions | Prompts | **Skills** |
|---|---|---|---|
| ทำงานเมื่อ | อัตโนมัติ | ผู้ใช้เรียก `/` | **Agent เรียกเอง** |
| เนื้อหา | กฎสั้น ๆ | เทมเพลตคำสั่ง | **ความรู้เชิงลึก + workflow** |
| อุปมา | กฎบริษัท | แบบฟอร์มสำเร็จรูป | **คู่มือผู้เชี่ยวชาญ** |

**Key Point**: "Skill เหมือนมี senior developer คอยให้คำปรึกษา — Agent อ่าน Skill แล้วตัดสินใจเอง"

---

## Part 2: โครงสร้าง Skill (3 นาที)

### ขั้นตอน

1. **เปิดโฟลเดอร์** `.github/skills/` ชี้ให้เห็นโครงสร้าง:

```
skills/
├── todo-features/        # Skill 1: CRUD workflow
│   ├── SKILL.md          # ← ไฟล์หลัก (Agent อ่านตัวนี้ก่อน)
│   ├── examples.md       # ตัวอย่างโค้ด CRUD
│   └── common-bugs.md    # ปัญหาที่พบบ่อย + วิธีแก้
│
├── react-patterns/       # Skill 2: React component design
│   ├── SKILL.md
│   ├── patterns.md       # โค้ดตัวอย่าง 5 patterns
│   └── checklist.md      # checklist ก่อนสร้าง component
│
└── api-design/           # Skill 3: REST API design
    ├── SKILL.md
    ├── endpoints.md      # API reference ครบทุก endpoint
    └── test-commands.md  # คำสั่ง curl ทดสอบ
```

2. **เปิด `SKILL.md`** ของ `todo-features` อธิบาย frontmatter:

```yaml
---
name: todo-features       # ← ต้องตรงกับชื่อโฟลเดอร์
description: "CRUD workflow สำหรับ Todo App — ใช้เมื่อ..."
# ↑ อธิบายว่าตอนไหนต้องใช้ + ตอนไหน "ไม่ใช้" (DO NOT USE FOR)
---
```

3. **ชี้ให้เห็นสิ่งที่ต่างจาก Instructions**:
   - Skill มี **ไฟล์เสริม** (examples, checklist, troubleshooting) ← ไม่ใช่แค่กฎ
   - Skill มี **ขั้นตอนทำงาน** (workflow) ← ไม่ใช่แค่ convention
   - Skill บอก **เมื่อไหร่ใช้/ไม่ใช้** ← Agent ตัดสินใจเอง

---

## Part 3: Demo — Agent เรียก Skill อัตโนมัติ (5 นาที)

### Demo 3.1 — ถามเรื่อง CRUD → Skill `todo-features` ตอบ (2 นาที)

1. **เปิด Copilot Chat** ถาม:

```
ผมอยากเพิ่มฟีเจอร์ "priority" ให้ todo ได้ เช่น high/medium/low
ต้องแก้ไฟล์ไหนบ้าง และขั้นตอนเป็นอย่างไร
```

2. **ชี้ให้เห็นว่า** Agent:
   - อ่าน `todo-features` SKILL.md → เห็นขั้นตอน 6 ขั้น + ตารางไฟล์ที่ต้องแก้
   - วางแผนแก้ server → App.js → component → CSS ตาม workflow
   - อ้างอิง `examples.md` เป็นต้นแบบ

3. **ถ้า Agent ไม่ได้อ้าง Skill ชัดเจน**: เปิดไฟล์ SKILL.md ให้ดู แล้วอธิบายว่า Copilot อ่านจาก description matching

### Demo 3.2 — ถามเรื่อง React → Skill `react-patterns` ตอบ (1.5 นาที)

1. **ถาม Copilot**:

```
state ของ filter ควรอยู่ที่ App.js หรือ TodoList.js ดี?
```

2. **ชี้ให้เห็นว่า** Agent ใช้ decision tree จาก `react-patterns` SKILL.md:
   - "ข้อมูลนี้ใช้กี่ component?" → ถ้าหลาย component → ยก state ขึ้น parent

### Demo 3.3 — ถามเรื่อง API → Skill `api-design` ตอบ (1.5 นาที)

1. **ถาม Copilot**:

```
ถ้าอยากเพิ่ม endpoint สำหรับ bulk delete หลาย todo พร้อมกัน ควรใช้ HTTP method อะไร?
```

2. **ชี้ให้เห็นว่า** Agent อ้างอิง HTTP methods table จาก `api-design` SKILL.md

---

## Part 4: Hands-on — ให้ผู้เรียนลองเอง (5 นาที)

### Exercise 1: ถามให้ Agent ใช้ Skill (2 นาที)

> เปิด Copilot Chat แล้วถาม (เลือกข้อใดข้อหนึ่ง):

**ถาม CRUD (→ todo-features skill)**:
```
เพิ่มฟีเจอร์ "due date" ให้ todo — ต้องแก้ไฟล์ไหนบ้าง?
```

**ถาม React (→ react-patterns skill)**:
```
ผมสร้าง TodoFilter component ใหม่ — ควรมี local state อะไรบ้าง?
```

**ถาม API (→ api-design skill)**:
```
ถ้าอยากเพิ่ม search todo by keyword ควรเป็น GET หรือ POST? endpoint เป็นอย่างไร?
```

> สังเกตว่า Copilot ให้คำตอบที่ลึกกว่าปกติ เพราะมี Skill เป็น reference

### Exercise 2: สำรวจไฟล์เสริมใน Skill (3 นาที)

> เปิดไฟล์เหล่านี้แล้วอ่าน:

1. `.github/skills/todo-features/common-bugs.md` — ปัญหาที่พบบ่อย 5 ข้อ + วิธีแก้
2. `.github/skills/react-patterns/patterns.md` — โค้ดตัวอย่าง 5 patterns
3. `.github/skills/api-design/test-commands.md` — คำสั่ง curl ทดสอบ

> แล้วตอบคำถาม: "ไฟล์เสริมเหล่านี้ ต่างจาก Instructions อย่างไร?"
>
> **คำตอบ**: Instructions = กฎสั้น ๆ (ใช้ camelCase, validate input)
> ไฟล์เสริมใน Skill = ความรู้เชิงลึก (ตัวอย่างโค้ด, troubleshooting, workflow)

---

## สรุปท้าย Part (30 วินาที)

> **Key Takeaway**: Agent Skill = คู่มือผู้เชี่ยวชาญ
> - Agent อ่านจาก `description` แล้วตัดสินใจเองว่าจะใช้ Skill ไหน
> - Skill มีไฟล์เสริม (ตัวอย่าง, checklist, troubleshooting) ← ลึกกว่า Instruction
> - Skill มี workflow ← บอกขั้นตอนทำงาน ไม่ใช่แค่กฎ

---

## Cheat Sheet — สรุป 3 แนวคิด

```
┌─────────────────────────────────────────────────────────┐
│  Instructions        Prompts           Skills           │
│  (กฎอัตโนมัติ)      (เทมเพลตคำสั่ง)   (คู่มือผู้เชี่ยวชาญ) │
│                                                         │
│  ✅ ทำงานเสมอ       ✅ เรียก /ชื่อ     ✅ Agent เรียกเอง  │
│  📄 1 ไฟล์           📄 1 ไฟล์          📁 โฟลเดอร์       │
│  📝 กฎ/conventions   📝 คำสั่ง          📝 ความรู้+workflow │
│                                                         │
│  ตัวอย่าง:          ตัวอย่าง:         ตัวอย่าง:         │
│  "ใช้ camelCase"    "/code-review"    CRUD 6 ขั้นตอน    │
│  "ตอบภาษาไทย"      "/implement-api"  decision tree     │
│  "validate input"  "/add-feature"    common bugs       │
└─────────────────────────────────────────────────────────┘
```

---

## Cheat Sheet — Skills ในโปรเจคนี้

| Skill | ความเชี่ยวชาญ | ไฟล์เสริม |
|-------|--------------|----------|
| `todo-features` | CRUD workflow end-to-end | examples.md, common-bugs.md |
| `react-patterns` | Component design, state, forms | patterns.md, checklist.md |
| `api-design` | REST API, HTTP methods, validation | endpoints.md, test-commands.md |
