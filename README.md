tugas Sesi 14 – Advanced Mobile Testing with Appium.

---

```markdown
# 📱 Tugas Sesi 14 – Advanced Mobile Testing with Appium

## 👤 Nama
Cheps – Digital Skola QA Automation

## 🗓️ Tanggal
02 November 2025

---

## Deskripsi
Project ini merupakan implementasi dari tugas sesi 14 kelas QA Automation Digital Skola. Tujuannya adalah menguji fitur **Text Entry Dialog** pada aplikasi **API Demos** menggunakan Appium dan WebDriverIO.

---

## Test Scenario
**Judul:** Text Entry Dialog  
**Langkah-langkah:**
1. Navigasi ke: `App > Alert Dialogs > Text Entry Dialog`
2. Isi field:
   - Name: `ChepsQA`
   - Password: `123456`
3. Klik tombol OK

Locator diperoleh dari **Appium Inspector** dengan metode:
- `content-desc` untuk navigasi menu
- `resource-id` untuk field input
- `class` untuk tombol

---

##  Tools & Teknologi
- Appium v3.1.0
- WebDriverIO
- Android Emulator (API 30 / Android 11)
- Allure Report
- Appium Inspector

---

## Struktur Folder
```
sesi-14/
├── test/
│   └── textEntryDialog.test.js
├── wdio.conf.js
├── package.json
├── README.md
├── allure-results/
└── allure-report/
```

---

## 🚀 Cara Menjalankan Test
1. Jalankan Appium Server:
   ```bash
   appium --allow-cors
   ```
2. Jalankan test:
   ```bash
   npm run test
   ```
3. Generate dan buka report:
   ```bash
   npm run allure:generate
   npm run allure:open
   ```

---

## 📸 Dokumentasi
- Screenshot hasil eksekusi test di terminal
- Screenshot Allure report di browser
- Screenshot struktur folder dan test script di VS Code

---

## 🔗 Link Repository
[GitHub Repo](https://github.com/chepsneo/Tugas-Sesi-14-Advanced-Mobile-Testing-with-Appium)

---

## 📝 Catatan
- Emulator Android 11 digunakan
- Appium dijalankan dengan flag `--allow-cors`
- Semua test dijalankan secara lokal dan berhasil `passing`
```



