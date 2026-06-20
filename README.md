# 🏎️ Apex Tracker

https://f1-apex-tracker.netlify.app/

F1 Data-Tracker für Teams, Fahrer und Fahrzeuge.
Modul 295 Projekt – BWZ Rapperswil-Jona.

---

## Inhalt

- Überblick
- Features
- Tech-Stack
- Projektstruktur
- Installation & Start
- Konfiguration
- API Endpoints
- Test-Login
- Sicherheitshinweise
- Lizenz & Autoren

---

## Überblick

Apex Tracker ist eine Web-Applikation, mit der F1-Teams, Fahrer und Fahrzeuge verwaltet und ausgewertet werden können. Der Fokus liegt auf einer einfachen Bedienung im Browser und einer klar strukturierten API für Authentifizierung und Favoritenverwaltung.

---

## Features

- Registrierung und Login mit JWT-basierter Authentifizierung
- Verwaltung einer persönlichen "Garage" mit Favoriten
- Getrenntes Backend (API) und Frontend
- Einfache lokale Entwicklung mit `npm run dev`

---

## Tech-Stack

- Backend: Next.js, TypeScript, JavaScript, NeDB, JWT
- Frontend: TypeScript, HTML, CSS

---

## Projektstruktur

- `backend/` – API-Routen, Datenbank (NeDB), Authentifizierung, .env-Konfiguration
- `frontend/` – UI, Seiten und Komponenten für den Zugriff auf die API

---

## Installation & Start

### 1. Repository klonen

```bash
git clone https://github.com/Oberlin-bzra/M295_Project.git
cd M295_Project
```

### 2. Backend starten

```bash
cd backend
npm install
npm run dev
```

Backend läuft standardmäßig auf: http://localhost:3000

### 3. Frontend starten (neues Terminal)

```bash
cd frontend
npm install
npm run dev
```

Frontend läuft standardmäßig auf: http://localhost:8100

---

## Konfiguration

Erstelle eine Datei `backend/.env` mit folgendem Inhalt:

```env
JWT_SECRET=dein-geheimer-schluessel-hier-mindestens-64-zeichen
```

Hinweis: Der Secret-Key sollte nur lokal bekannt sein und nicht ins Repository committet werden.

---

## API Endpoints

| Methode | Endpoint               | Beschreibung                  |
| ------- | ---------------------- | ----------------------------- |
| POST    | `/api/auth/register`  | Registrierung eines Benutzers |
| POST    | `/api/auth/login`     | Login und JWT-Erstellung      |
| GET     | `/api/garage`         | Favoriten abrufen             |
| PUT     | `/api/garage`         | Favorit hinzufügen/entfernen  |

---

## Test-Login

Zum schnellen Testen steht ein Demo-Account zur Verfügung:

| E-Mail            | Passwort  |
| ----------------- | --------- |
| admin@example.com | $user1234 |

---

## Sicherheitshinweise

- Verwende für produktive Umgebungen einen langen, zufälligen `JWT_SECRET`.
- Lege `backend/.env` niemals im Repository ab.
- Ändere den Demo-Account oder entferne ihn, bevor die Anwendung öffentlich zugänglich gemacht wird.

---

## Lizenz & Autoren

Dieses Projekt wird im Rahmen des Moduls 295 am BWZ Rapperswil-Jona entwickelt.

- Autoren: Noel Oberlin & Felix Vogele
- Jahr: 2025
