# 🚀 Sanbercode - OrangeHRM Automation Testing

Proyek ini berisi **automation testing menggunakan [Cypress](https://www.cypress.io/)**  
untuk melakukan pengujian pada website [OrangeHRM](https://opensource-demo.orangehrmlive.com/).

---

## 📌 Dokumentasi Project
- 📑 **[Test Case fitur login](https://docs.google.com/spreadsheets/d/1n75APXnkb5yqCvF_2xhmIO5QXluIHcgdZ1lgD5aWso/edit?usp=sharing)**
- 🔎 **[Locator Strategy](https://docs.google.com/document/d/1EmT3qDY23z0pPbn7zt2fDBH6sq-TtTim7O3fayLwPI/edit?usp=sharing)**
- 🎥 **[Presentasi Project](https://youtu.be/y55ZptuE6LE)**

---

## 🔧 Tech & Tools
- Cypress, JavaScript (ES6)
- Postman / REST API testing
- Git & GitHub, Page Object Model (POM)

---

## 📷 Screenshot & Video
Cypress otomatis menghasilkan:
- Screenshot saat test gagal
- Rekaman video saat test dijalankan

> File tersimpan otomatis di folder bawaan `cypress/`

---

## 📂 Struktur Folder
```bash
Sanbercode-OrangeHRM/
├── cypress/
│   ├── e2e/                # Semua test case masuk sini
│   │   ├── API/
│   │   │   └── reqres.cy.js
│   │   ├── test/  
│   │   │   └── login.cy.js
│   │   │   └── dashboard.cy.js
│   │   │   └── forgotPassword.cy.js
│   │   └── spec.cy.js      # bisa hapus kalau cuma dummy
│   ├── fixtures/           # data dummy/json
│   │   └── directoryData.json
│   │   └── loginData.json
│   ├── support/
│   │   ├── e2e.js
│   │   └── pages/          # Page Object Model
│   │       ├── loginPage.js
│   │       ├── dashboardPage.js
│   │       └── forgotPasswordPage.js
│   ├── screenshots/        # biarin auto-generate
│   └── videos/             # biarin auto-generate
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md

