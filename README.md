# 🏫 Hayat Land Academy — CRM Tizimi

O'quv markaz uchun to'liq boshqaruv tizimi (React + TypeScript + Tailwind CSS)

## 🚀 VS Code da ishga tushirish

### 1-qadam: Node.js o'rnatish
https://nodejs.org saytidan **Node.js 18+** yuklab oling va o'rnating.

### 2-qadam: Loyihani oching
```bash
# Papkani VS Code da oching
code .
```

### 3-qadam: Terminalda paketlarni o'rnating
VS Code ichida `Ctrl+` ` (backtick) bosib terminal oching, keyin:
```bash
npm install
```

### 4-qadam: Loyihani ishga tushiring
```bash
npm run dev
```

Brauzerda **http://localhost:5173** manzilini oching! 🎉

---

## 🔑 Tizimga kirish

| Rol | Username | Parol |
|-----|----------|-------|
| Direktor | `director` | `HayatLand2026` |
| Admin | `admin` | `Admin2026` |
| O'qituvchi | `sardor` | `Teacher2026` |

---

## 📁 Loyiha tuzilishi

```
src/
├── App.tsx          ← Asosiy kod (barcha sahifalar)
├── main.tsx         ← Entry point
├── index.css        ← Global styles + Tailwind
├── components/
│   └── ui/          ← Shadcn/UI komponentlar (55 ta)
├── hooks/           ← Custom React hooks
├── lib/             ← Yordamchi funksiyalar
└── pages/           ← Sahifalar
```

---

## ✨ Imkoniyatlar

- 🏠 **Dashboard** — Statistika va umumiy ko'rinish
- 📚 **Guruhlar** — Guruhlarni boshqarish
- 👥 **O'quvchilar** — O'quvchilar ro'yxati va to'lov holati
- 💰 **To'lovlar** — To'lovlarni qabul qilish
- 📋 **Davomat** — Kunlik davomat
- 📅 **Dars jadvali** — Haftalik jadval
- 📊 **Hisobot** — Moliyaviy hisobotlar
- 💸 **Xarajatlar** — Xarajatlarni boshqarish
- 👨‍🏫 **O'qituvchilar** — Xodimlar va oylik hisob
- 📬 **Xabarlar** — Ichki xabarlash tizimi
- ⚙️ **Sozlamalar** — Profil va markaz ma'lumotlari

---

## 🛠 Texnologiyalar

- **React 18** + **TypeScript**
- **Tailwind CSS v4**
- **Vite** (tezkor build tool)
- **localStorage** (ma'lumotlar saqlash)

---

## 📝 Keyingi qadamlar

1. `src/App.tsx` faylida `STATIC_USERS` ni o'zgartiring
2. `SEED_GURUHLAR` va `SEED_OQUVCHILAR` ni o'z ma'lumotlaringiz bilan almashtiring
3. Dizaynni `src/index.css` da tahrirlang
