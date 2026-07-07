# 🛠️ How to Fix PostgreSQL Connection in VS Code / วิธีแก้ไขการเชื่อมต่อ PostgreSQL ใน VS Code

If you encounter this connection error when connecting to your Supabase PostgreSQL database:
หากคุณพบข้อผิดพลาดในการเชื่อมต่อกับฐานข้อมูล Supabase PostgreSQL:

```text
pgsql: Error: Connection error: connection failed: connection to server at "13.213.241.248", port 5432 failed: fe_sendauth: no password supplied
```

---

## 💡 Solution / ขั้นตอนการแก้ไขด้วยการแก้ไข JSON

### English
1. Open VS Code Command Palette: Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS).
2. Search and select **Preferences: Open User Settings (JSON)**.
3. Locate the `"pgsql.connections"` config block.
4. Replace the placeholder `[YOUR-PASSWORD]` inside `"connectionString"` with your actual database password.
5. Set your actual database password in the `"password"` field directly below it.
6. Save the settings file (`Ctrl + S`) and try reconnecting.

### ภาษาไทย
1. เปิด Command Palette ของ VS Code: กดปุ่ม `Ctrl + Shift + P` (หรือ `Cmd + Shift + P` สำหรับ macOS)
2. ค้นหาและเลือก **Preferences: Open User Settings (JSON)**
3. ค้นหาบล็อกคำสั่งที่ชื่อ `"pgsql.connections"`
4. เปลี่ยนคำว่า `[YOUR-PASSWORD]` ในช่อง `"connectionString"` เป็นรหัสผ่านจริงของ Supabase
5. ใส่รหัสผ่านจริงในช่อง `"password"` ในบรรทัดถัดมาด้วยเช่นกัน
6. บันทึกไฟล์ (`Ctrl + S`) แล้วลองกดเชื่อมต่อใหม่อีกครั้ง

---

## 📝 Example Configuration / ตัวอย่างการตั้งค่าใน `settings.json`

```json
"pgsql.connections": [
    {
        "id": "6AF5D2DF-3E37-421A-8A5B-05017CFD069D",
        "groupId": "7E91B52E-618C-4DA7-8932-DDB1782A3EFA",
        "authenticationType": "SqlLogin",
        "connectTimeout": 15,
        "applicationName": "vscode-pgsql",
        "clientEncoding": "utf8",
        "sslmode": "require",
        "sshSavePassword": true,
        "savePassword": true,
        "sslRootCertMode": "none",
        "connectionString": "postgresql://postgres.zpjbxvuqmzdwljgmwmdv:YOUR_ACTUAL_PASSWORD_HERE@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres",
        "server": "aws-1-ap-southeast-1.pooler.supabase.com",
        "user": "postgres.zpjbxvuqmzdwljgmwmdv",
        "port": "5432",
        "database": "postgres",
        "password": "YOUR_ACTUAL_PASSWORD_HERE",
        "profileName": "aws-1-ap-southeast-1.pooler.supabase.com, postgres (postgres.zpjbxvuqmzdwljgmwmdv)",
        "expiresOn": 0,
        "sshPassword": ""
    }
]
```
