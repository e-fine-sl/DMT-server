require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const mongoose = require('mongoose');
const DmtLicense = require('../models/dmtLicenseModel');
const licenseRecords = require('../data/licenseRecords');

const seed = async () => {
  try {
    console.log('[DMT-SEED] Connecting to dmt_db...');
    // dbName: 'dmt_db' is set explicitly so the seed ALWAYS targets dmt_db,
    // even if the MONGODB_URI string does not contain the database name.
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'dmt_db' });
    console.log('[DMT-SEED] Connected to database:', mongoose.connection.name);
    // Must print "dmt_db" — confirming the correct separate database

    console.log('[DMT-SEED] Clearing existing records...');
    await DmtLicense.deleteMany({});
    console.log('[DMT-SEED] Cleared existing records.');

    console.log(`[DMT-SEED] Inserting ${licenseRecords.length} records...`);
    await DmtLicense.insertMany(licenseRecords);
    console.log(`[DMT-SEED] Successfully seeded ${licenseRecords.length} license records into dmt_db.`);

  } catch (error) {
    console.error('[DMT-SEED] Seed failed:', error.message);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('[DMT-SEED] Database connection closed.');
    process.exit(0);
  }
};

seed();
