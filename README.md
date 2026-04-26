# DMT Server — e-Fine SL Sri Lanka

## About

This server simulates the Sri Lanka Department of Motor Traffic (DMT) driving license verification database for the **e-Fine SL Final Year Project**. The e-Fine SL main backend calls this server as a proxy to verify whether a driving license number entered during driver registration actually exists in the DMT database.

> **Important:** This server uses its own **SEPARATE** MongoDB database called `dmt_db`. It is completely independent from the e-Fine SL main backend database.

---

## Tech Stack

- **Runtime:** Node.js 20+
- **Framework:** Express 5
- **Database:** MongoDB Atlas (`dmt_db`)
- **ODM:** Mongoose
- **Security:** helmet, express-rate-limit, dotenv
- **CORS:** cors

---

## Database

| Property | Value |
|----------|-------|
| Database Name | `dmt_db` |
| Collection | `dmtlicenses` |
| Separation | **SEPARATE** from the e-Fine SL main backend database |

Both servers connect to MongoDB Atlas but use **different databases**. The e-Fine SL main backend uses its own database (e.g. `efinesl_db`). The DMT Server uses only `dmt_db`. They must never share a database.

---

## Environment Variables

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `PORT` | Server port | `6000` |
| `MONGODB_URI` | MongoDB Atlas URI (must end in `/dmt_db`) | `mongodb+srv://user:pass@cluster.mongodb.net/dmt_db` |
| `DMT_API_KEY` | Shared API key for authentication | `dmt_efinesl_secure_key_2025` |
| `NODE_ENV` | Environment | `development` |

---

## Setup & Run (Local)

```bash
# 1. Navigate to the project folder
cd D:\Final_Year_Project\DMT_server

# 2. Install dependencies
npm install

# 3. Create .env file and fill in your real MongoDB Atlas URI
#    Make sure the URI ends with /dmt_db

# 4. Seed 60 license records into dmt_db
npm run seed

# 5. Start the dev server on port 6000
npm run dev
```

---

## Seeding the Database

The `seed/seedRunner.js` script inserts **60 hardcoded license records** (55 realistic Sri Lankan records + 5 test records) into the `dmtlicenses` collection inside `dmt_db`.

```bash
npm run seed
```

Expected output:
```
[DMT-SEED] Connecting to dmt_db...
[DMT-SEED] Connected to database: dmt_db
[DMT-SEED] Clearing existing records...
[DMT-SEED] Cleared existing records.
[DMT-SEED] Inserting 60 records...
[DMT-SEED] Successfully seeded 60 license records into dmt_db.
[DMT-SEED] Database connection closed.
```

---

## API Reference

### GET /
Health check — returns server status and database name. No authentication required.

**Response 200:**
```json
{
  "success": true,
  "message": "DMT Server is running — e-Fine SL Sri Lanka",
  "database": "dmt_db (separate from e-Fine SL main database)",
  "environment": "development",
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

---

### GET /api/dmt/health
Routes health check — no API key needed.

**Response 200:**
```json
{
  "success": true,
  "message": "DMT routes are working",
  "database": "dmt_db"
}
```

---

### POST /api/dmt/verify-license
Verify a driving license against the DMT database.

**Required Header:**
```
x-dmt-api-key: dmt_efinesl_secure_key_2025
```

**Request Body:**
```json
{
  "licenseNumber": "B1023456",
  "nic": "901234567V"
}
```

**Response 200 — Verified:**
```json
{
  "success": true,
  "found": true,
  "nicMatch": true,
  "message": "Driving license verified successfully in the DMT database.",
  "data": {
    "licenseNumber": "B1023456",
    "nic": "901234567V",
    "fullName": "Kasun Perera",
    "dateOfBirth": "1990-03-15",
    "address": "45/A, Galle Road, Colombo 06",
    "licenseIssueDate": "2016-05-10",
    "licenseExpiryDate": "2024-05-10",
    "licenseStatus": "ACTIVE",
    "vehicleClasses": [{ "category": "B", "issueDate": "2016-05-10", "expiryDate": "2024-05-10" }],
    "issuingOffice": "Colombo DMT Office"
  }
}
```

**Response 404 — License not found:**
```json
{
  "success": false,
  "found": false,
  "message": "No driving license record found for this License Number in the DMT database."
}
```

**Response 400 — NIC mismatch:**
```json
{
  "success": false,
  "found": true,
  "nicMatch": false,
  "message": "NIC Number does not match the license holder record in the DMT database."
}
```

**Response 401 — Missing or invalid API key:**
```json
{
  "success": false,
  "message": "Unauthorized: API key is missing. Include x-dmt-api-key header."
}
```

**Response 503** — Only returned by the e-Fine SL proxy when THIS server is unreachable. Registration is blocked in that case.

---

## Deployment on Render

1. Push this folder to a new GitHub repository
   - Suggested repo name: `e-fine-sl-dmt-server`

2. Go to [render.com](https://render.com) → **New** → **Web Service**

3. Connect the GitHub repository

4. Set build and start commands:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`

5. Add Environment Variables in the Render dashboard:
   ```
   PORT=6000
   MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/dmt_db
   DMT_API_KEY=dmt_efinesl_secure_key_2025
   NODE_ENV=production
   ```

6. Deploy the service

7. After deployment, open **Render Shell** and run:
   ```bash
   npm run seed
   ```
   Verify log: `Successfully seeded 60 license records into dmt_db.`

8. Copy the Render service URL (e.g. `https://e-fine-sl-dmt-server.onrender.com`)

9. Add the URL to the **e-Fine SL main backend `.env`**:
   ```
   DMT_SERVER_URL=https://e-fine-sl-dmt-server.onrender.com
   DMT_API_KEY=dmt_efinesl_secure_key_2025
   ```

---

## Test Records Cheat Sheet

| License | NIC | Status | Expected |
|---------|-----|--------|----------|
| TEST001 | 900000001V | ACTIVE | 200 verified |
| TEST002 | 900000002V | EXPIRED | 200 verified |
| TEST003 | 900000003V | SUSPENDED | 200 verified |
| TEST004 | 199000000458 | ACTIVE | 200 verified |
| TEST005 | 900000005V | ACTIVE (3 classes) | 200 verified |
| TEST001 | WRONGNIC999 | — | 400 NIC mismatch |
| FAKE999 | 900000001V | — | 404 not found |
| TEST001 | (no API key) | — | 401 unauthorized |

---

## Security

- All endpoints except `GET /` and `GET /api/dmt/health` require the `x-dmt-api-key` header
- Rate limited: **100 requests per 15 minutes** per IP
- **Helmet.js** adds standard security headers
- `.env` is gitignored — API key is never exposed in source code
- The Flutter mobile app never calls this server directly; only the e-Fine SL main backend does (proxy pattern)

---

*DMT Server v1.0.0 — e-Fine SL Final Year Project | Database: dmt_db*
