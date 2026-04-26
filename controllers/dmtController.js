const DmtLicense = require('../models/dmtLicenseModel');

const verifyLicense = async (req, res) => {
  const { licenseNumber, nic } = req.body;

  // ── Step 1: Validate input ───────────────────────────────────────
  if (!licenseNumber || !nic) {
    return res.status(400).json({
      success: false,
      message: 'Both licenseNumber and nic are required.'
    });
  }

  const normalizedLicense = licenseNumber.toString().trim().toUpperCase();
  const normalizedNic     = nic.toString().trim().toUpperCase();

  console.log(`[DMT-CTRL] Verifying license: ${normalizedLicense} | NIC: ${normalizedNic}`);

  try {
    // ── Step 2: Search in dmt_db → dmtlicenses collection ──────────
    const record = await DmtLicense.findOne({
      licenseNumber: { $regex: new RegExp(`^${normalizedLicense}$`, 'i') }
    });

    // ── Step 3: License not found ───────────────────────────────────
    if (!record) {
      console.log(`[DMT-CTRL] Not found: ${normalizedLicense}`);
      return res.status(404).json({
        success: false,
        found:   false,
        message: 'No driving license record found for this License Number in the DMT database.'
      });
    }

    // ── Step 4: License found — check NIC match ─────────────────────
    const recordNic = record.nic.toString().trim().toUpperCase();
    if (recordNic !== normalizedNic) {
      console.log(`[DMT-CTRL] NIC mismatch for license: ${normalizedLicense}`);
      return res.status(400).json({
        success:  false,
        found:    true,
        nicMatch: false,
        message:  'NIC Number does not match the license holder record in the DMT database.'
      });
    }

    // ── Step 5: Both match — return full details ────────────────────
    console.log(`[DMT-CTRL] Verified: ${normalizedLicense}`);
    return res.status(200).json({
      success:  true,
      found:    true,
      nicMatch: true,
      message:  'Driving license verified successfully in the DMT database.',
      data: {
        licenseNumber:     record.licenseNumber,
        nic:               record.nic,
        fullName:          record.fullName,
        dateOfBirth:       record.dateOfBirth,
        address:           record.address,
        licenseIssueDate:  record.licenseIssueDate,
        licenseExpiryDate: record.licenseExpiryDate,
        licenseStatus:     record.licenseStatus,
        vehicleClasses:    record.vehicleClasses,
        issuingOffice:     record.issuingOffice
      }
    });

  } catch (error) {
    console.error(`[DMT-CTRL] Server Error: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error:   error.message
    });
  }
};

module.exports = { verifyLicense };
