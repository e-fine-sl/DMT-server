const mongoose = require('mongoose');

const vehicleClassSchema = new mongoose.Schema({
  category:   { type: String },    // A, B, B1, C, CE, D, DE, G
  issueDate:  { type: String },    // Format: "YYYY-MM-DD"
  expiryDate: { type: String }     // Format: "YYYY-MM-DD"
}, { _id: false });

const dmtLicenseSchema = new mongoose.Schema(
  {
    licenseNumber: {
      type: String, required: true, unique: true, uppercase: true, trim: true,
      index: true
    },
    nic: {
      type: String, required: true, unique: true, uppercase: true, trim: true,
      index: true
    },
    fullName:          { type: String, required: true, trim: true },
    dateOfBirth:       { type: String, required: true },    // "YYYY-MM-DD"
    address:           { type: String, trim: true },
    licenseIssueDate:  { type: String, required: true },    // "YYYY-MM-DD"
    licenseExpiryDate: { type: String, required: true },    // "YYYY-MM-DD"
    licenseStatus: {
      type: String,
      enum: ['ACTIVE', 'EXPIRED', 'SUSPENDED', 'REVOKED'],
      default: 'ACTIVE'
    },
    vehicleClasses: [vehicleClassSchema],
    issuingOffice:  { type: String }
  },
  {
    timestamps: true,
    collection: 'dmtlicenses'  // Explicit collection name inside dmt_db
  }
);

module.exports = mongoose.model('DmtLicense', dmtLicenseSchema);
