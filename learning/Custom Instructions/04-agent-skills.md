# Agent Skills คืออะไร — และต่างจาก Instructions/Prompts อย่างไร

## ตารางเปรียบเทียบ 3 แนวคิด

| | Custom Instructions | Reusable Prompts | Agent Skills |
|---|---|---|---|
| **ไฟล์** | `*.instructions.md` | `*.prompt.md` | `SKILL.md` |
| **ตำแหน่ง** | `.github/instructions/` | `.github/prompts/` | `.github/skills/<name>/` |
| **ทำงานเมื่อไหร่** | **อัตโนมัติ** ตาม `applyTo` | **เรียกใช้** ด้วย `/ชื่อ` | **Agent เรียกเอง** เมื่อคำถามตรงกับ skill |
| **เนื้อหา** | กฎ, conventions | เทมเพลตคำสั่ง | ความรู้เชิงลึก + workflow |
| **อุปมา** | กฎบริษัท | แบบฟอร์มสำเร็จรูป | คู่มือผู้เชี่ยวชาญ |

---

## 1. Custom Instructions — "กฎที่ทำงานอัตโนมัติ"

```yaml
---
applyTo: "**/*.js"
description: "รูปแบบการเขียนโค้ด"
---
```

- Copilot อ่านอัตโนมัติเมื่อเปิดไฟล์ที่ตรงกับ `applyTo`
- ไม่ต้องเรียกใช้ — มีผลตลอดเวลา
- ตัวอย่าง: "ใช้ camelCase", "ตอบภาษาไทย", "ใช้ Functional Components"

## 2. Reusable Prompts — "เทมเพลตที่เรียกใช้เมื่อต้องการ"

```yaml
---
mode: "agent"
description: "สร้าง REST API สำหรับ Todo CRUD"
---
```

- ผู้ใช้เรียกด้วย `/implement-api` ใน Copilot Chat
- ใช้ครั้งเดียวแล้วจบ (one-shot)
- ตัวอย่าง: `/setup-project`, `/code-review`, `/implement-feature`

## 3. Agent Skills — "ชุดความรู้ + workflow สำหรับ agent"

```yaml
---
name: todo-features
description: "CRUD workflow สำหรับ Todo App — ใช้เมื่อต้องเพิ่ม/แก้ feature..."
---
```

- Agent อ่านเองเมื่อเจอคำถามที่ตรงกับ description
- มีไฟล์เสริม (examples, checklist, troubleshooting)
- ตัวอย่าง: `todo-features`, `react-patterns`, `api-design`

## ตัวอย่างเปรียบเทียบ: ถ้าถาม "เพิ่มฟีเจอร์ filter todo ตาม status"

| Instructions | Prompt | Skill |
|---|---|---|
| Copilot รู้ว่าต้อง validate, ใช้ camelCase, ตอบภาษาไทย | ผู้ใช้เรียก `/implement-feature` พร้อมอธิบาย | Agent อ่าน `todo-features` SKILL.md → เห็นขั้นตอน CRUD 6 ขั้น → แก้ server → แก้ client → ทดสอบ |
| ❌ ไม่รู้ขั้นตอน CRUD | ✅ ให้ template | ✅ มี workflow + ตัวอย่างโค้ด + common bugs |

## Skills ในโปรเจคนี้

| Skill | ความเชี่ยวชาญ | ไฟล์เสริม |
|-------|--------------|----------|
| `todo-features` | CRUD workflow end-to-end | examples.md, common-bugs.md |
| `react-patterns` | Component design, state, forms | patterns.md, checklist.md |
| `api-design` | REST API, HTTP methods, validation | endpoints.md, test-commands.md |
