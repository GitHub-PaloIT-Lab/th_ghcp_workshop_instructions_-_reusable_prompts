## Custom Instruction 

Custom Instructions จะทำงานอัตโนมัติตาม `applyTo` pattern — ไม่ต้องเรียกเอง แค่ถามเกี่ยวกับไฟล์ที่ตรง pattern ก็จะมีผล

> ไฟล์ที่เกี่ยวข้อง:
> - `.github/copilot-instructions.md` — กฎกลางของโปรเจค (ใช้กับทุกไฟล์)
> - `.github/instructions/general.instructions.md` — โครงสร้างโฟลเดอร์, หลักการออกแบบ
> - `.github/instructions/code-style.instructions.md` — naming, React/Express patterns
> - `.github/instructions/security.instructions.md` — validation, sanitization
> - `.github/instructions/tech-stack.instructions.md` — dependencies, versions
> - `.github/instructions/project.instructions.md` — สถาปัตยกรรม, CRUD, API endpoints

### ตัวอย่าง Prompt

**1. ทดสอบ copilot-instructions.md (กฎกลาง)**
```
อับดุลเอ้ย
```
> คาดหวัง: Copilot ตอบ "เอ้ยยย" ตามกฎใน copilot-instructions.md

**2. ทดสอบ copilot-instructions.md (กฎกลาง)**
```
เตา
```
> คาดหวัง: Copilot ตอบ "อั้งโล่!!" ตามกฎใน copilot-instructions.md

**3. ทดสอบ general.instructions.md (โครงสร้างโปรเจค)**
```
โปรเจคนี้มีโครงสร้างโฟลเดอร์เป็นอย่างไร?
```
> คาดหวัง: Copilot ตอบตามโครงสร้างที่กำหนดใน general.instructions.md และขึ้นต้นด้วย "📋 ใช้ general.instruction.md"

**4. ทดสอบ code-style.instructions.md (naming conventions)**
```
ถ้าผมจะตั้งชื่อตัวแปรเก็บรายการ todo ควรตั้งชื่อว่าอะไร?
```
> คาดหวัง: Copilot แนะนำชื่อแบบ camelCase เช่น `todoList`, `todoItems` ตาม code-style instructions

**5. ทดสอบ code-style.instructions.md (React patterns)**
```
ช่วยสร้าง component แสดงจำนวน todo ทั้งหมด ชื่อ TodoCounter
```
> คาดหวัง: Copilot สร้าง Functional Component + Hooks, ไฟล์ PascalCase, ไม่ใช้ Class Component ตาม code-style instructions

**6. ทดสอบ security.instructions.md (input validation)**
```
ช่วยดูว่า POST /api/todos ใน server.js มี validation ครบไหม?
```
> คาดหวัง: Copilot ตรวจ validation ตาม security instructions — ตรวจ type, trim, length limit, error response

**7. ทดสอบ security.instructions.md (middleware)**
```
server.js ใช้ security middleware อะไรบ้าง? ขาดอะไรหรือเปล่า?
```
> คาดหวัง: Copilot ตรวจ Helmet, CORS origin config ตามที่กำหนดใน security instructions

**8. ทดสอบ project.instructions.md (API endpoints)**
```
API ของ Todo App มี endpoint อะไรบ้าง? แต่ละตัวทำอะไร?
```
> คาดหวัง: Copilot ตอบตาม CRUD table ใน project.instructions.md — GET, POST, PUT, DELETE

**9. ทดสอบ tech-stack.instructions.md (dependencies)**
```
โปรเจคนี้ใช้ library อะไรบ้าง? ทั้ง frontend และ backend
```
> คาดหวัง: Copilot ตอบตาม tech-stack instructions — React 18 (CRA), Express, cors, helmet, morgan, dotenv

**10. ทดสอบ instructions หลายตัวพร้อมกัน**
```
ช่วยเขียน endpoint PATCH /api/todos/:id/toggle ใน server.js ให้หน่อย
```
> คาดหวัง: Copilot ใช้ code-style (naming, Express patterns), security (validation), project (data format) instructions ร่วมกัน และแจ้งว่าใช้ instructions ตัวไหนบ้าง


---

## Reuseable Prompt

Reusable Prompts เรียกใช้ผ่าน Copilot Chat โดยพิมพ์ `/` แล้วเลือก prompt ที่ต้องการ หรือเลือกจาก prompt picker

> ไฟล์ที่เกี่ยวข้อง:
> - `.github/prompts/setup-project.prompt.md` — scaffold โปรเจคตั้งแต่ต้น
> - `.github/prompts/implement-api.prompt.md` — สร้าง REST API endpoints
> - `.github/prompts/implement-ui.prompt.md` — สร้าง React components
> - `.github/prompts/implement-feature.prompt.md` — เพิ่ม feature end-to-end (มี placeholder `{{feature_description}}`)
> - `.github/prompts/code-review.prompt.md` — รีวิวโค้ดตาม checklist

### ตัวอย่าง Prompt

**1. ใช้ setup-project — สร้างโครงสร้างโปรเจค**
```
/setup-project
```
> Copilot จะสร้าง server/ + client/ พร้อม dependencies ตาม prompt file

**2. ใช้ implement-api — สร้าง CRUD API**
```
/implement-api
```
> Copilot จะสร้าง GET, POST, PUT, DELETE endpoints ตาม spec ใน prompt file พร้อม validation

**3. ใช้ implement-ui — สร้าง React components**
```
/implement-ui
```
> Copilot จะสร้าง TodoForm, TodoList, TodoItem components พร้อม CSS ตาม prompt file

**4. ใช้ implement-feature — เพิ่มฟีเจอร์ priority**
```
/implement-feature feature_description:"เพิ่มระบบ priority ให้ todo (high/medium/low) แสดงเป็น badge สีต่างกัน"
```
> Copilot จะวางแผน end-to-end: API → state → UI ตามขั้นตอนใน prompt file

**5. ใช้ implement-feature — เพิ่มฟีเจอร์ filter**
```
/implement-feature feature_description:"เพิ่มปุ่ม filter แสดงเฉพาะ todo ที่ยังไม่เสร็จ / เสร็จแล้ว / ทั้งหมด"
```
> Copilot จะวิเคราะห์ไฟล์ที่ต้องแก้, เพิ่ม state filter ใน App.js, สร้าง UI filter buttons

**6. ใช้ implement-feature — เพิ่มฟีเจอร์ search**
```
/implement-feature feature_description:"เพิ่มช่อง search ค้นหา todo ตาม text แบบ realtime"
```
> Copilot จะเพิ่ม search input, filter todos ตาม keyword, อาจเพิ่ม query parameter ใน API

**7. ใช้ code-review — รีวิวโค้ดทั้งโปรเจค**
```
/code-review
```
> Copilot จะตรวจ code style, security, React best practices, API design ตาม checklist ใน prompt file

**8. ใช้ implement-feature — เพิ่มฟีเจอร์ due date**
```
/implement-feature feature_description:"เพิ่ม due date ให้ todo โดยแสดงว่าเหลืออีกกี่วัน ถ้าเลยกำหนดให้แสดงเป็นสีแดง"
```
> Copilot จะเพิ่ม field dueDate ใน server, date picker ใน form, แสดง countdown ใน TodoItem

**9. ใช้ implement-feature — เพิ่มฟีเจอร์ bulk delete**
```
/implement-feature feature_description:"เพิ่มปุ่ม 'ลบที่เสร็จแล้ว' สำหรับลบ todo ที่ completed=true ทั้งหมดในครั้งเดียว"
```
> Copilot จะเพิ่ม DELETE endpoint ใหม่ หรือใช้ endpoint เดิมหลายครั้ง, เพิ่มปุ่มใน UI

**10. ใช้ implement-feature — เพิ่มฟีเจอร์ drag & drop reorder**
```
/implement-feature feature_description:"เพิ่มการลากจัดเรียงลำดับ todo ด้วยการ drag & drop"
```
> Copilot จะวิเคราะห์ว่าต้องเพิ่ม order field, เพิ่ม PUT endpoint สำหรับ reorder, เพิ่ม drag handler ใน UI


---

## Agent Skill

Agent Skills จะถูกเรียกใช้อัตโนมัติเมื่อ Copilot ตรวจจับว่าคำถามตรงกับ skill description — ไม่ต้องเรียกเอง

> Skills ที่มี:
> - `todo-features` — CRUD workflow, เพิ่ม/แก้/ลบ feature, แก้ปัญหา state ไม่อัปเดต
> - `api-design` — REST API design, เลือก HTTP method, status code, validation
> - `react-patterns` — state management, form handling, props/callback, component design

### ตัวอย่าง Prompt

**1. Trigger todo-features — เพิ่ม feature ใหม่**
```
ผมอยากเพิ่มฟีเจอร์ "priority" ให้ todo ได้ เช่น high/medium/low ต้องแก้ไฟล์ไหนบ้าง?
```
> คาดหวัง: Copilot ใช้ skill todo-features แสดงขั้นตอน end-to-end + ตารางไฟล์ที่ต้องแก้

**2. Trigger todo-features — แก้ปัญหา state ไม่อัปเดต**
```
ผมเพิ่ม todo แล้ว แต่หน้าจอไม่อัปเดตจนกว่าจะ refresh ทำไมถึงเป็นแบบนั้น?
```
> คาดหวัง: Copilot ใช้ skill todo-features ตรวจ data flow: API call → setTodos → re-render

**3. Trigger todo-features — แก้ไข CRUD**
```
อยากเปลี่ยนวิธี edit todo จาก double-click เป็นกดปุ่ม edit แล้วพิมพ์ใน modal แทน
```
> คาดหวัง: Copilot ใช้ skill todo-features วิเคราะห์ไฟล์ที่กระทบ + ขั้นตอนแก้ไข

**4. Trigger api-design — เพิ่ม endpoint ใหม่**
```
อยากเพิ่ม endpoint สำหรับ filter todo ตาม status (completed/active) ควรออกแบบ API ยังไง?
```
> คาดหวัง: Copilot ใช้ skill api-design แนะนำ GET /api/todos?status=completed, HTTP method, status codes

**5. Trigger api-design — เลือก HTTP method**
```
ถ้าผมอยาก toggle completed ของ todo ควรใช้ PUT หรือ PATCH?
```
> คาดหวัง: Copilot ใช้ skill api-design อธิบายความแตกต่าง PUT vs PATCH พร้อมแนะนำ

**6. Trigger api-design — เพิ่ม validation**
```
ช่วยเพิ่ม validation ที่ PUT /api/todos/:id ให้ตรวจว่า id เป็นตัวเลขที่ถูกต้อง
```
> คาดหวัง: Copilot ใช้ skill api-design เพิ่ม validation + error response ที่เหมาะสม

**7. Trigger api-design — ทดสอบ API ด้วย curl**
```
ช่วยเขียนคำสั่ง curl ทดสอบทุก endpoint ของ Todo API ให้หน่อย
```
> คาดหวัง: Copilot ใช้ skill api-design สร้าง curl commands สำหรับ GET, POST, PUT, DELETE

**8. Trigger react-patterns — state management**
```
ถ้าผมเพิ่ม filter (all/active/completed) state ควรอยู่ที่ component ไหน?
```
> คาดหวัง: Copilot ใช้ skill react-patterns + decision tree บอกว่า filter state ควรอยู่ที่ App.js

**9. Trigger react-patterns — props/callback**
```
ถ้าผมอยากให้ TodoItem ส่งค่า priority กลับไปอัปเดตที่ App.js ต้องทำยังไง?
```
> คาดหวัง: Copilot ใช้ skill react-patterns อธิบาย callback pattern — ส่ง handler จาก App → TodoList → TodoItem

**10. Trigger react-patterns — แก้ปัญหา re-render**
```
TodoList re-render ทุกครั้งที่พิมพ์ใน TodoForm ทั้งที่ todos ไม่เปลี่ยน ต้องแก้ยังไง?
```
> คาดหวัง: Copilot ใช้ skill react-patterns วิเคราะห์สาเหตุ + แนะนำ React.memo หรือแยก state