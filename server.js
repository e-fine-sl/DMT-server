require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');

const connectDB = require('./config/db');
const dmtRouter = require('./routes/dmtRoutes');

// ── Rate limiter ─────────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests. Please try again later.' }
});

// ── Connect to dmt_db ────────────────────────────────────────────────────────
connectDB();

// ── Express app ──────────────────────────────────────────────────────────────
const app = express();

// Trust reverse proxy (e.g. Render, Heroku) so req.ip is correct for rate limiting
app.set('trust proxy', 1);

// ── Middleware (order matters) ───────────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(limiter);

// ── Health check (no auth required) ─────────────────────────────────────────
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'DMT Server is running — e-Fine SL Sri Lanka',
    database: 'dmt_db (separate from e-Fine SL main database)',
    environment: process.env.NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

// ── Mount DMT routes ─────────────────────────────────────────────────────────
app.use('/api/dmt', dmtRouter);

// ── Handle unknown routes ────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Start server ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`[DMT-SERVER] Running on port ${PORT}`);
  console.log(`[DMT-SERVER] Database: dmt_db (separate DMT database)`);
  console.log(`[DMT-SERVER] Environment: ${process.env.NODE_ENV}`);
});
