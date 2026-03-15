# README.KNOWLEDGE.MD

## วัตถุประสงค์

Repository นี้จัดทำขึ้นเพื่อเป็น**สื่อการสอน**การใช้งาน **GitHub Copilot** 3 เรื่องหลัก:
1. **Custom Instructions** — กฎอัตโนมัติที่ Copilot อ่านตาม `applyTo`
2. **Reusable Prompts** — เทมเพลตคำสั่งที่เรียกใช้ด้วย `/ชื่อ`
3. **Agent Skills** — ชุดความรู้เชิงลึกที่ Agent เรียกใช้เอง

## Demo App: Todo CRUD

แอปตัวอย่างเป็น **Todo App** ง่าย ๆ ที่มี CRUD operations:
- **Frontend**: React 18 (CRA) — port 3000
- **Backend**: Express REST API — port 8000
- **Data**: In-memory array (ไม่มี database)

### CRUD Features
| Feature | Method | Endpoint |
|---------|--------|----------|
| ดึงทั้งหมด | GET | `/api/todos` |
| สร้าง | POST | `/api/todos` |
| แก้ไข | PUT | `/api/todos/:id` |
| ลบ | DELETE | `/api/todos/:id` |

---

## โครงสร้าง Repository

```
.
├── server/                  # Express REST API
│   ├── server.js            # CRUD endpoints + middleware
│   ├── package.json
│   └── .env
│
├── client/                  # React 18 (CRA)
│   ├── src/
│   │   ├── App.js           # State หลัก + API calls
│   │   └── components/
│   │       ├── TodoForm.js  # ฟอร์มเพิ่ม todo
│   │       ├── TodoList.js  # แสดงรายการ
│   │       └── TodoItem.js  # todo แต่ละรายการ
│   └── package.json
│
├── .github/
│   ├── copilot-instructions.md    # สรุปรวม (auto-loaded)
│   ├── instructions/              # 5 Custom Instructions
│   │   ├── general.instructions.md
│   │   ├── tech-stack.instructions.md
│   │   ├── code-style.instructions.md
│   │   ├── security.instructions.md
│   │   └── project.instructions.md
│   ├── prompts/                   # 5 Reusable Prompts
│   │   ├── setup-project.prompt.md
│   │   ├── implement-api.prompt.md
│   │   ├── implement-ui.prompt.md
│   │   ├── code-review.prompt.md
│   │   └── implement-feature.prompt.md
│   └── skills/                    # 3 Agent Skills
│       ├── todo-features/         # CRUD workflow
│       ├── react-patterns/        # React component patterns
│       └── api-design/            # REST API design
│
├── todo-app-tasks/          # 6 Task files (สร้างแอปทีละขั้นตอน)
│
└── learning/                # เอกสารการเรียนรู้
    ├── Custom Instructions/
    └── Reusable Prompts/
```

## 3 แนวคิดหลัก

### Custom Instructions (`.github/instructions/`)
- **YAML Frontmatter**: `applyTo` + `description`
- **ทำงานอัตโนมัติ**: Copilot อ่านเมื่อไฟล์ตรงกับ pattern
- **ตัวอย่าง**: `applyTo: "**/*.js"` → ทุกไฟล์ JS ได้กฎนี้

### Reusable Prompts (`.github/prompts/`)
- **YAML Frontmatter**: `mode: "agent"` + `description`
- **เรียกใช้ด้วย**: `/setup-project`, `/implement-api` ใน chat
- **ตัวอย่าง**: `/code-review` → รีวิวโค้ดตาม checklist

### Agent Skills (`.github/skills/`)
- **YAML Frontmatter**: `name` + `description` (ระบุ trigger + DO NOT USE FOR)
- **Agent เรียกใช้เอง**: เมื่อคำถามตรงกับ description
- **มีไฟล์เสริม**: ตัวอย่างโค้ด, checklist, troubleshooting

---

*Last updated: สร้างสำหรับ session "Custom Instructions & Reusable Prompts" — GitHub Copilot adoption workshop*
