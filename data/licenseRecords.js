// Sri Lanka DMT Driving License Records
// Key insight from real licenses (images):
//   - A person can have multiple vehicle categories, each with its OWN issue date and expiry date.
//   - Categories are acquired in GROUPS at different points in time.
//   - Non-commercial categories (A1, A, B1, B, G1): ~8-year validity.
//   - Commercial categories   (C1, C, CE, D1, D, DE, G, J): ~4-year validity.
//   - "-------" in the real card means the person has no licence for that category (omitted here).
//
// Available categories: A1, A, B1, B, B2, C1, C, CE, D1, D, DE, G1, G, J, H

const licenseRecords = [

  // -- Record 1 --------------------------------------------------------------
  // Simple car-only driver (B only)
  {
    licenseNumber: "B1023456",
    nic: "901234567V",
    fullName: "Kasun Perera",
    dateOfBirth: "1990-03-15",
    address: "45/A, Galle Road, Colombo 06",
    licenseIssueDate: "2016-05-10",
    licenseExpiryDate: "2024-05-10",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2016-05-10", expiryDate: "2024-05-10" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 2 --------------------------------------------------------------
  // Motorcycle + car — both acquired same day (A1, A, B1, B together)
  {
    licenseNumber: "B2198763",
    nic: "198812345678",
    fullName: "Nuwan Silva",
    dateOfBirth: "1988-07-22",
    address: "12, Kandy Road, Peradeniya",
    licenseIssueDate: "2017-03-14",
    licenseExpiryDate: "2025-03-14",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "A1", issueDate: "2017-03-14", expiryDate: "2025-03-14" },
      { category: "A",  issueDate: "2017-03-14", expiryDate: "2025-03-14" },
      { category: "B1", issueDate: "2017-03-14", expiryDate: "2025-03-14" },
      { category: "B",  issueDate: "2017-03-14", expiryDate: "2025-03-14" }
    ],
    issuingOffice: "Kandy DMT Office"
  },

  // -- Record 3 --------------------------------------------------------------
  // Car only
  {
    licenseNumber: "NC3456789",
    nic: "199212367890",
    fullName: "Amali Fernando",
    dateOfBirth: "1992-11-05",
    address: "78/3, Matara Road, Galle",
    licenseIssueDate: "2018-08-20",
    licenseExpiryDate: "2026-08-20",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2018-08-20", expiryDate: "2026-08-20" }
    ],
    issuingOffice: "Galle DMT Office"
  },

  // -- Record 4 --------------------------------------------------------------
  // Car first (2015) ? added commercial C1+C+D1+D later (2019) — EXPIRED status
  {
    licenseNumber: "WP4112390",
    nic: "198534567890",
    fullName: "Chamara Jayawardena",
    dateOfBirth: "1985-01-18",
    address: "23, Kurunegala Road, Negombo",
    licenseIssueDate: "2015-06-01",
    licenseExpiryDate: "2023-06-01",
    licenseStatus: "EXPIRED",
    vehicleClasses: [
      { category: "B",  issueDate: "2015-06-01", expiryDate: "2023-06-01" },
      { category: "C1", issueDate: "2019-03-10", expiryDate: "2023-03-10" },
      { category: "C",  issueDate: "2019-03-10", expiryDate: "2023-03-10" },
      { category: "D1", issueDate: "2019-03-10", expiryDate: "2023-03-10" },
      { category: "D",  issueDate: "2019-03-10", expiryDate: "2023-03-10" }
    ],
    issuingOffice: "Negombo DMT Office"
  },

  // -- Record 5 --------------------------------------------------------------
  // Three-wheeler + car (B1+B)
  {
    licenseNumber: "CP5009812",
    nic: "199567891234",
    fullName: "Dilini Wijesinghe",
    dateOfBirth: "1995-09-30",
    address: "9/B, Main Street, Jaffna",
    licenseIssueDate: "2019-02-15",
    licenseExpiryDate: "2027-02-15",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2019-02-15", expiryDate: "2027-02-15" },
      { category: "B",  issueDate: "2019-02-15", expiryDate: "2027-02-15" }
    ],
    issuingOffice: "Jaffna DMT Office"
  },

  // -- Record 6 --------------------------------------------------------------
  // Full professional: A1+A+B1+B (2014) ? added C1+C+D1+D (2020) — EXPIRED
  {
    licenseNumber: "EP1234567",
    nic: "198023456789",
    fullName: "Arjun Rajagopal",
    dateOfBirth: "1980-04-12",
    address: "34, Badulla Road, Bandarawela",
    licenseIssueDate: "2014-09-05",
    licenseExpiryDate: "2024-03-18",
    licenseStatus: "EXPIRED",
    vehicleClasses: [
      { category: "A1", issueDate: "2014-09-05", expiryDate: "2022-09-05" },
      { category: "A",  issueDate: "2014-09-05", expiryDate: "2022-09-05" },
      { category: "B1", issueDate: "2014-09-05", expiryDate: "2022-09-05" },
      { category: "B",  issueDate: "2014-09-05", expiryDate: "2022-09-05" },
      { category: "C1", issueDate: "2020-03-18", expiryDate: "2024-03-18" },
      { category: "C",  issueDate: "2020-03-18", expiryDate: "2024-03-18" }
    ],
    issuingOffice: "Badulla DMT Office"
  },

  // -- Record 7 --------------------------------------------------------------
  // Car only
  {
    licenseNumber: "NP2345678",
    nic: "199312378901",
    fullName: "Nadeeka Rajapaksa",
    dateOfBirth: "1993-06-28",
    address: "56/2, Colombo Road, Kurunegala",
    licenseIssueDate: "2020-01-10",
    licenseExpiryDate: "2028-01-10",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2020-01-10", expiryDate: "2028-01-10" }
    ],
    issuingOffice: "Kurunegala DMT Office"
  },

  // -- Record 8 --------------------------------------------------------------
  // B (2013) ? C1+C+D1+D (2017) — SUSPENDED
  {
    licenseNumber: "SP3456780",
    nic: "197823456780",
    fullName: "Dilan Dissanayake",
    dateOfBirth: "1978-12-03",
    address: "7/A, Temple Road, Ratnapura",
    licenseIssueDate: "2013-07-22",
    licenseExpiryDate: "2021-11-14",
    licenseStatus: "SUSPENDED",
    vehicleClasses: [
      { category: "B",  issueDate: "2013-07-22", expiryDate: "2021-07-22" },
      { category: "C1", issueDate: "2017-11-14", expiryDate: "2021-11-14" },
      { category: "C",  issueDate: "2017-11-14", expiryDate: "2021-11-14" },
      { category: "D1", issueDate: "2017-11-14", expiryDate: "2021-11-14" },
      { category: "D",  issueDate: "2017-11-14", expiryDate: "2021-11-14" }
    ],
    issuingOffice: "Ratnapura DMT Office"
  },

  // -- Record 9 --------------------------------------------------------------
  // Motorcycle + car (A1+A on same date as B)
  {
    licenseNumber: "B5678901",
    nic: "199034567891",
    fullName: "Lahiru Bandara",
    dateOfBirth: "1990-08-17",
    address: "18, Lake Road, Anuradhapura",
    licenseIssueDate: "2016-11-30",
    licenseExpiryDate: "2024-11-30",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "A1", issueDate: "2016-11-30", expiryDate: "2024-11-30" },
      { category: "A",  issueDate: "2016-11-30", expiryDate: "2024-11-30" },
      { category: "B",  issueDate: "2016-11-30", expiryDate: "2024-11-30" }
    ],
    issuingOffice: "Anuradhapura DMT Office"
  },

  // -- Record 10 -------------------------------------------------------------
  // Car only
  {
    licenseNumber: "NC6789012",
    nic: "198745678901",
    fullName: "Priya Selvaraj",
    dateOfBirth: "1987-02-25",
    address: "22/C, Trinco Road, Trincomalee",
    licenseIssueDate: "2015-04-18",
    licenseExpiryDate: "2023-04-18",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2015-04-18", expiryDate: "2023-04-18" }
    ],
    issuingOffice: "Trincomalee DMT Office"
  },

  // -- Record 11 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "WP7890123",
    nic: "199156789012",
    fullName: "Sachith Wickramasinghe",
    dateOfBirth: "1991-05-14",
    address: "44, Gampaha Road, Gampaha",
    licenseIssueDate: "2017-08-09",
    licenseExpiryDate: "2025-08-09",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2017-08-09", expiryDate: "2025-08-09" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 12 -------------------------------------------------------------
  // B1+B (2016) + G1 special vehicle (2016)
  {
    licenseNumber: "CP8901234",
    nic: "198667890123",
    fullName: "Sanduni Seneviratne",
    dateOfBirth: "1986-10-20",
    address: "31/B, Kandy Road, Matale",
    licenseIssueDate: "2016-03-25",
    licenseExpiryDate: "2024-03-25",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2016-03-25", expiryDate: "2024-03-25" },
      { category: "B",  issueDate: "2016-03-25", expiryDate: "2024-03-25" },
      { category: "G1", issueDate: "2016-03-25", expiryDate: "2024-03-25" }
    ],
    issuingOffice: "Kandy DMT Office"
  },

  // -- Record 13 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "EP2345670",
    nic: "199478901234",
    fullName: "Asanka Karunaratne",
    dateOfBirth: "1994-03-08",
    address: "5/A, Hospital Road, Ampara",
    licenseIssueDate: "2019-12-01",
    licenseExpiryDate: "2027-12-01",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2019-12-01", expiryDate: "2027-12-01" }
    ],
    issuingOffice: "Batticaloa DMT Office"
  },

  // -- Record 14 -------------------------------------------------------------
  // Full professional: A1+A+B1+B+G1 (2014) ? added C1+C+D1+D+G (2018) — REVOKED
  {
    licenseNumber: "NP3456701",
    nic: "198289012345",
    fullName: "Thilina Gunawardena",
    dateOfBirth: "1982-09-16",
    address: "67, Station Road, Vavuniya",
    licenseIssueDate: "2014-05-12",
    licenseExpiryDate: "2026-07-20",
    licenseStatus: "REVOKED",
    vehicleClasses: [
      { category: "A1", issueDate: "2014-05-12", expiryDate: "2022-05-12" },
      { category: "A",  issueDate: "2014-05-12", expiryDate: "2022-05-12" },
      { category: "B1", issueDate: "2014-05-12", expiryDate: "2022-05-12" },
      { category: "B",  issueDate: "2014-05-12", expiryDate: "2022-05-12" },
      { category: "G1", issueDate: "2014-05-12", expiryDate: "2022-05-12" },
      { category: "C1", issueDate: "2018-07-20", expiryDate: "2022-07-20" },
      { category: "C",  issueDate: "2018-07-20", expiryDate: "2022-07-20" },
      { category: "D1", issueDate: "2018-07-20", expiryDate: "2022-07-20" },
      { category: "D",  issueDate: "2018-07-20", expiryDate: "2022-07-20" },
      { category: "G",  issueDate: "2018-07-20", expiryDate: "2026-07-20" }
    ],
    issuingOffice: "Anuradhapura DMT Office"
  },

  // -- Record 15 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "SP4567812",
    nic: "199390123456",
    fullName: "Gayan Amarasinghe",
    dateOfBirth: "1993-01-29",
    address: "88/C, Ratnapura Road, Embilipitiya",
    licenseIssueDate: "2018-07-14",
    licenseExpiryDate: "2026-07-14",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2018-07-14", expiryDate: "2026-07-14" }
    ],
    issuingOffice: "Ratnapura DMT Office"
  },

  // -- Record 16 -------------------------------------------------------------
  // A1+A (2015) + B (2015) — motorcycle + car same day
  {
    licenseNumber: "B6789023",
    nic: "901234568V",
    fullName: "Ruwan Rathnayake",
    dateOfBirth: "1990-07-04",
    address: "14/D, Beach Road, Trincomalee",
    licenseIssueDate: "2015-10-20",
    licenseExpiryDate: "2023-10-20",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "A1", issueDate: "2015-10-20", expiryDate: "2023-10-20" },
      { category: "A",  issueDate: "2015-10-20", expiryDate: "2023-10-20" },
      { category: "B",  issueDate: "2015-10-20", expiryDate: "2023-10-20" }
    ],
    issuingOffice: "Trincomalee DMT Office"
  },

  // -- Record 17 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "NC7890134",
    nic: "198501234567",
    fullName: "Priyanka Weerasinghe",
    dateOfBirth: "1985-04-11",
    address: "29, Negombo Road, Chilaw",
    licenseIssueDate: "2014-02-28",
    licenseExpiryDate: "2022-02-28",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2014-02-28", expiryDate: "2022-02-28" }
    ],
    issuingOffice: "Negombo DMT Office"
  },

  // -- Record 18 -------------------------------------------------------------
  // B (2017) ? added C1+C (2021) — different dates for commercial
  {
    licenseNumber: "WP8901245",
    nic: "199112345670",
    fullName: "Prabath Liyanage",
    dateOfBirth: "1991-12-22",
    address: "3/A, Main Street, Colombo 01",
    licenseIssueDate: "2017-06-05",
    licenseExpiryDate: "2025-09-12",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B",  issueDate: "2017-06-05", expiryDate: "2025-06-05" },
      { category: "C1", issueDate: "2021-09-12", expiryDate: "2025-09-12" },
      { category: "C",  issueDate: "2021-09-12", expiryDate: "2025-09-12" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 19 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "CP9012356",
    nic: "199623456781",
    fullName: "Kumaran Navaratnam",
    dateOfBirth: "1996-08-30",
    address: "77/B, Point Pedro Road, Jaffna",
    licenseIssueDate: "2020-09-15",
    licenseExpiryDate: "2028-09-15",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2020-09-15", expiryDate: "2028-09-15" }
    ],
    issuingOffice: "Jaffna DMT Office"
  },

  // -- Record 20 -------------------------------------------------------------
  // B1+B (2013) ? C1+C+D1+D (2018) — two separate date groups
  {
    licenseNumber: "EP3456781",
    nic: "198334567892",
    fullName: "Malith Pathirana",
    dateOfBirth: "1983-03-07",
    address: "55, Kandy Road, Kurunegala",
    licenseIssueDate: "2013-11-18",
    licenseExpiryDate: "2022-04-09",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2013-11-18", expiryDate: "2021-11-18" },
      { category: "B",  issueDate: "2013-11-18", expiryDate: "2021-11-18" },
      { category: "C1", issueDate: "2018-04-09", expiryDate: "2022-04-09" },
      { category: "C",  issueDate: "2018-04-09", expiryDate: "2022-04-09" },
      { category: "D1", issueDate: "2018-04-09", expiryDate: "2022-04-09" },
      { category: "D",  issueDate: "2018-04-09", expiryDate: "2022-04-09" }
    ],
    issuingOffice: "Kurunegala DMT Office"
  },

  // -- Record 21 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "NP4567892",
    nic: "199045678903",
    fullName: "Chathurika Samarawickrama",
    dateOfBirth: "1990-06-15",
    address: "8/C, Ampara Road, Batticaloa",
    licenseIssueDate: "2016-04-03",
    licenseExpiryDate: "2024-04-03",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2016-04-03", expiryDate: "2024-04-03" }
    ],
    issuingOffice: "Batticaloa DMT Office"
  },

  // -- Record 22 -------------------------------------------------------------
  // A1+A+B1+B (2013) ? C1+C (2018) — SUSPENDED
  {
    licenseNumber: "SP5678923",
    nic: "198156789014",
    fullName: "Indunil Jayasuriya",
    dateOfBirth: "1981-11-09",
    address: "42/A, Galle Road, Matara",
    licenseIssueDate: "2013-08-27",
    licenseExpiryDate: "2022-02-05",
    licenseStatus: "SUSPENDED",
    vehicleClasses: [
      { category: "A1", issueDate: "2013-08-27", expiryDate: "2021-08-27" },
      { category: "A",  issueDate: "2013-08-27", expiryDate: "2021-08-27" },
      { category: "B1", issueDate: "2013-08-27", expiryDate: "2021-08-27" },
      { category: "B",  issueDate: "2013-08-27", expiryDate: "2021-08-27" },
      { category: "C1", issueDate: "2018-02-05", expiryDate: "2022-02-05" },
      { category: "C",  issueDate: "2018-02-05", expiryDate: "2022-02-05" }
    ],
    issuingOffice: "Matara DMT Office"
  },

  // -- Record 23 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "B7890134",
    nic: "199267890145",
    fullName: "Vignesh Krishnamurthy",
    dateOfBirth: "1992-04-18",
    address: "11, Mannar Road, Mannar",
    licenseIssueDate: "2018-01-22",
    licenseExpiryDate: "2026-01-22",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2018-01-22", expiryDate: "2026-01-22" }
    ],
    issuingOffice: "Anuradhapura DMT Office"
  },

  // -- Record 24 -------------------------------------------------------------
  // B1+B (2016)
  {
    licenseNumber: "NC8901245",
    nic: "901234569V",
    fullName: "Nimasha Kumara",
    dateOfBirth: "1990-09-01",
    address: "63, Colombo Road, Kalutara",
    licenseIssueDate: "2016-07-14",
    licenseExpiryDate: "2024-07-14",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2016-07-14", expiryDate: "2024-07-14" },
      { category: "B",  issueDate: "2016-07-14", expiryDate: "2024-07-14" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 25 -------------------------------------------------------------
  // B1+B+G1 (2015) — three-wheeler + car + special vehicle
  {
    licenseNumber: "WP9012356",
    nic: "198878901256",
    fullName: "Chathura Bandara",
    dateOfBirth: "1988-02-14",
    address: "25/B, Kandy Road, Kegalle",
    licenseIssueDate: "2015-09-08",
    licenseExpiryDate: "2023-09-08",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2015-09-08", expiryDate: "2023-09-08" },
      { category: "B",  issueDate: "2015-09-08", expiryDate: "2023-09-08" },
      { category: "G1", issueDate: "2015-09-08", expiryDate: "2023-09-08" }
    ],
    issuingOffice: "Kandy DMT Office"
  },

  // -- Record 26 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "CP1023467",
    nic: "199489012367",
    fullName: "Suresh Thambipillai",
    dateOfBirth: "1994-07-26",
    address: "4, Hospital Road, Kilinochchi",
    licenseIssueDate: "2019-05-30",
    licenseExpiryDate: "2027-05-30",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2019-05-30", expiryDate: "2027-05-30" }
    ],
    issuingOffice: "Jaffna DMT Office"
  },

  // -- Record 27 -------------------------------------------------------------
  // B (2014) ? added C1+C+D1+D+G+J (2020) — heavy commercial driver
  {
    licenseNumber: "EP4567892",
    nic: "198290123478",
    fullName: "Buddhika Wijesinghe",
    dateOfBirth: "1982-12-05",
    address: "37, Badulla Road, Nuwara Eliya",
    licenseIssueDate: "2014-03-17",
    licenseExpiryDate: "2030-11-08",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B",  issueDate: "2014-03-17", expiryDate: "2022-03-17" },
      { category: "C1", issueDate: "2020-11-08", expiryDate: "2024-11-08" },
      { category: "C",  issueDate: "2020-11-08", expiryDate: "2024-11-08" },
      { category: "D1", issueDate: "2020-11-08", expiryDate: "2024-11-08" },
      { category: "D",  issueDate: "2020-11-08", expiryDate: "2024-11-08" },
      { category: "G",  issueDate: "2020-11-08", expiryDate: "2028-11-08" },
      { category: "J",  issueDate: "2020-11-08", expiryDate: "2024-11-08" }
    ],
    issuingOffice: "Badulla DMT Office"
  },

  // -- Record 28 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "NP5678903",
    nic: "199501234589",
    fullName: "Chamari Dissanayake",
    dateOfBirth: "1995-03-22",
    address: "19/A, Colombo Road, Puttalam",
    licenseIssueDate: "2020-11-04",
    licenseExpiryDate: "2028-11-04",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2020-11-04", expiryDate: "2028-11-04" }
    ],
    issuingOffice: "Kurunegala DMT Office"
  },

  // -- Record 29 -------------------------------------------------------------
  // A1+A+B1+B (2013) ? C1+C (2016) — two date groups
  {
    licenseNumber: "SP6789034",
    nic: "198101234590",
    fullName: "Sanjeewa Perera",
    dateOfBirth: "1981-06-10",
    address: "81, Ratnapura Road, Balangoda",
    licenseIssueDate: "2013-04-09",
    licenseExpiryDate: "2020-08-23",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "A1", issueDate: "2013-04-09", expiryDate: "2021-04-09" },
      { category: "A",  issueDate: "2013-04-09", expiryDate: "2021-04-09" },
      { category: "B1", issueDate: "2013-04-09", expiryDate: "2021-04-09" },
      { category: "B",  issueDate: "2013-04-09", expiryDate: "2021-04-09" },
      { category: "C1", issueDate: "2016-08-23", expiryDate: "2020-08-23" },
      { category: "C",  issueDate: "2016-08-23", expiryDate: "2020-08-23" }
    ],
    issuingOffice: "Ratnapura DMT Office"
  },

  // -- Record 30 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "B8901245",
    nic: "199312345601",
    fullName: "Yasoda Fernando",
    dateOfBirth: "1993-10-14",
    address: "6/D, Station Road, Wennappuwa",
    licenseIssueDate: "2018-12-20",
    licenseExpiryDate: "2026-12-20",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2018-12-20", expiryDate: "2026-12-20" }
    ],
    issuingOffice: "Negombo DMT Office"
  },

  // -- Record 31 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "NC9012356",
    nic: "198723456712",
    fullName: "Harsha Jayawardena",
    dateOfBirth: "1987-05-30",
    address: "52/A, Galle Road, Hikkaduwa",
    licenseIssueDate: "2015-08-16",
    licenseExpiryDate: "2023-08-16",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2015-08-16", expiryDate: "2023-08-16" }
    ],
    issuingOffice: "Galle DMT Office"
  },

  // -- Record 32 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "WP1123467",
    nic: "199434567823",
    fullName: "Nithya Krishnamurthy",
    dateOfBirth: "1994-01-07",
    address: "16, Jaffna Road, Vavuniya",
    licenseIssueDate: "2019-07-22",
    licenseExpiryDate: "2027-07-22",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2019-07-22", expiryDate: "2027-07-22" }
    ],
    issuingOffice: "Anuradhapura DMT Office"
  },

  // -- Record 33 -------------------------------------------------------------
  // A1+A+B1+B (2015) — full non-commercial set same day
  {
    licenseNumber: "CP2134578",
    nic: "198545678934",
    fullName: "Thisara Wickramasinghe",
    dateOfBirth: "1985-08-19",
    address: "33/B, Colombo Road, Gampola",
    licenseIssueDate: "2015-01-13",
    licenseExpiryDate: "2023-01-13",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "A1", issueDate: "2015-01-13", expiryDate: "2023-01-13" },
      { category: "A",  issueDate: "2015-01-13", expiryDate: "2023-01-13" },
      { category: "B1", issueDate: "2015-01-13", expiryDate: "2023-01-13" },
      { category: "B",  issueDate: "2015-01-13", expiryDate: "2023-01-13" }
    ],
    issuingOffice: "Kandy DMT Office"
  },

  // -- Record 34 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "EP5678903",
    nic: "199256789045",
    fullName: "Kavitha Rajagopal",
    dateOfBirth: "1992-07-03",
    address: "7, Batticaloa Road, Ampara",
    licenseIssueDate: "2018-04-10",
    licenseExpiryDate: "2026-04-10",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2018-04-10", expiryDate: "2026-04-10" }
    ],
    issuingOffice: "Batticaloa DMT Office"
  },

  // -- Record 35 -------------------------------------------------------------
  // Full professional: A1+A+B1+B+G1 (2013) ? C1+C+CE+D1+D+G+J (2018)
  // Matches image 4 pattern — most comprehensive license
  {
    licenseNumber: "NP6789014",
    nic: "198167890156",
    fullName: "Ravindra Seneviratne",
    dateOfBirth: "1981-03-28",
    address: "48, Temple Road, Polonnaruwa",
    licenseIssueDate: "2013-09-05",
    licenseExpiryDate: "2030-03-15",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "A1", issueDate: "2013-09-05", expiryDate: "2021-09-05" },
      { category: "A",  issueDate: "2013-09-05", expiryDate: "2021-09-05" },
      { category: "B1", issueDate: "2013-09-05", expiryDate: "2021-09-05" },
      { category: "B",  issueDate: "2013-09-05", expiryDate: "2021-09-05" },
      { category: "G1", issueDate: "2013-09-05", expiryDate: "2021-09-05" },
      { category: "C1", issueDate: "2018-03-15", expiryDate: "2022-03-15" },
      { category: "C",  issueDate: "2018-03-15", expiryDate: "2022-03-15" },
      { category: "CE", issueDate: "2018-03-15", expiryDate: "2022-03-15" },
      { category: "D1", issueDate: "2018-03-15", expiryDate: "2022-03-15" },
      { category: "D",  issueDate: "2018-03-15", expiryDate: "2022-03-15" },
      { category: "G",  issueDate: "2018-03-15", expiryDate: "2026-03-15" },
      { category: "J",  issueDate: "2018-03-15", expiryDate: "2022-03-15" }
    ],
    issuingOffice: "Anuradhapura DMT Office"
  },

  // -- Record 36 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "SP7890125",
    nic: "199378901267",
    fullName: "Tharaka Bandara",
    dateOfBirth: "1993-11-17",
    address: "21/C, Mahinda Road, Tangalle",
    licenseIssueDate: "2018-10-28",
    licenseExpiryDate: "2026-10-28",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2018-10-28", expiryDate: "2026-10-28" }
    ],
    issuingOffice: "Matara DMT Office"
  },

  // -- Record 37 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "B9012356",
    nic: "901234570V",
    fullName: "Ruwanthika Silva",
    dateOfBirth: "1990-02-06",
    address: "9, Negombo Road, Ja-Ela",
    licenseIssueDate: "2016-09-19",
    licenseExpiryDate: "2024-09-19",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2016-09-19", expiryDate: "2024-09-19" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 38 -------------------------------------------------------------
  // B (2015) ? C1+C (2019) — added commercial later
  {
    licenseNumber: "NC1123467",
    nic: "198889012378",
    fullName: "Isuru Karunaratne",
    dateOfBirth: "1988-06-24",
    address: "36/A, Kurunegala Road, Wariyapola",
    licenseIssueDate: "2015-12-07",
    licenseExpiryDate: "2023-06-14",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B",  issueDate: "2015-12-07", expiryDate: "2023-12-07" },
      { category: "C1", issueDate: "2019-06-14", expiryDate: "2023-06-14" },
      { category: "C",  issueDate: "2019-06-14", expiryDate: "2023-06-14" }
    ],
    issuingOffice: "Kurunegala DMT Office"
  },

  // -- Record 39 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "WP2234578",
    nic: "199590123489",
    fullName: "Meena Selvaraj",
    dateOfBirth: "1995-05-11",
    address: "28, Jaffna Road, Chavakachcheri",
    licenseIssueDate: "2020-06-15",
    licenseExpiryDate: "2028-06-15",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2020-06-15", expiryDate: "2028-06-15" }
    ],
    issuingOffice: "Jaffna DMT Office"
  },

  // -- Record 40 -------------------------------------------------------------
  // B1+B (2014) + G1 (2018) — three-wheeler + car first, special vehicle added later
  {
    licenseNumber: "CP3245689",
    nic: "198201234600",
    fullName: "Danushka Amarasinghe",
    dateOfBirth: "1982-09-02",
    address: "14, Hospital Road, Dambulla",
    licenseIssueDate: "2014-04-30",
    licenseExpiryDate: "2026-08-17",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2014-04-30", expiryDate: "2022-04-30" },
      { category: "B",  issueDate: "2014-04-30", expiryDate: "2022-04-30" },
      { category: "G1", issueDate: "2018-08-17", expiryDate: "2026-08-17" }
    ],
    issuingOffice: "Kandy DMT Office"
  },

  // -- Record 41 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "EP6789014",
    nic: "199312345712",
    fullName: "Rajan Navaratnam",
    dateOfBirth: "1993-04-17",
    address: "5/B, Trinco Road, Batticaloa",
    licenseIssueDate: "2018-03-12",
    licenseExpiryDate: "2026-03-12",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2018-03-12", expiryDate: "2026-03-12" }
    ],
    issuingOffice: "Batticaloa DMT Office"
  },

  // -- Record 42 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "NP7890125",
    nic: "198423456823",
    fullName: "Anitha Krishnamurthy",
    dateOfBirth: "1984-01-21",
    address: "66, Main Road, Mullaitivu",
    licenseIssueDate: "2014-10-08",
    licenseExpiryDate: "2022-10-08",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2014-10-08", expiryDate: "2022-10-08" }
    ],
    issuingOffice: "Trincomalee DMT Office"
  },

  // -- Record 43 -------------------------------------------------------------
  // A1+A (2017) — motorcycle added first, then B added separately
  // Matches image 5 pattern (B1+B older date, A1+A newer date)
  {
    licenseNumber: "SP8901236",
    nic: "199134567834",
    fullName: "Malith Rathnayake",
    dateOfBirth: "1991-07-29",
    address: "12/A, Galle Road, Ambalangoda",
    licenseIssueDate: "2014-06-11",
    licenseExpiryDate: "2025-02-19",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2014-06-11", expiryDate: "2022-06-11" },
      { category: "B",  issueDate: "2014-06-11", expiryDate: "2022-06-11" },
      { category: "G1", issueDate: "2014-06-11", expiryDate: "2022-06-11" },
      { category: "A1", issueDate: "2017-02-19", expiryDate: "2025-02-19" },
      { category: "A",  issueDate: "2017-02-19", expiryDate: "2025-02-19" }
    ],
    issuingOffice: "Galle DMT Office"
  },

  // -- Record 44 -------------------------------------------------------------
  // B only — REVOKED
  {
    licenseNumber: "B1123467",
    nic: "198645678945",
    fullName: "Chathura Pathirana",
    dateOfBirth: "1986-12-13",
    address: "39, Kandy Road, Matale",
    licenseIssueDate: "2015-05-27",
    licenseExpiryDate: "2023-05-27",
    licenseStatus: "REVOKED",
    vehicleClasses: [
      { category: "B", issueDate: "2015-05-27", expiryDate: "2023-05-27" }
    ],
    issuingOffice: "Kandy DMT Office"
  },

  // -- Record 45 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "NC2234578",
    nic: "199256789156",
    fullName: "Dilini Jayasuriya",
    dateOfBirth: "1992-03-06",
    address: "27/C, Colombo Road, Negombo",
    licenseIssueDate: "2018-06-11",
    licenseExpiryDate: "2026-06-11",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2018-06-11", expiryDate: "2026-06-11" }
    ],
    issuingOffice: "Negombo DMT Office"
  },

  // -- Record 46 -------------------------------------------------------------
  // B (2015) ? D1+D (2020) — bus driver; got car first, added bus categories later
  {
    licenseNumber: "WP3345689",
    nic: "198767890267",
    fullName: "Prabath Gunawardena",
    dateOfBirth: "1987-08-04",
    address: "53/A, Airport Road, Katunayake",
    licenseIssueDate: "2015-11-23",
    licenseExpiryDate: "2024-04-30",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B",  issueDate: "2015-11-23", expiryDate: "2023-11-23" },
      { category: "D1", issueDate: "2020-04-30", expiryDate: "2024-04-30" },
      { category: "D",  issueDate: "2020-04-30", expiryDate: "2024-04-30" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 47 -------------------------------------------------------------
  // B1+B (2019) + G1+G (2022) — car + special/heavy vehicle, different dates
  {
    licenseNumber: "CP4356790",
    nic: "199478901378",
    fullName: "Kasun Bandara",
    dateOfBirth: "1994-10-25",
    address: "8/B, Mahara Road, Kadawatha",
    licenseIssueDate: "2019-10-17",
    licenseExpiryDate: "2030-03-09",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2019-10-17", expiryDate: "2027-10-17" },
      { category: "B",  issueDate: "2019-10-17", expiryDate: "2027-10-17" },
      { category: "G1", issueDate: "2022-03-09", expiryDate: "2030-03-09" },
      { category: "G",  issueDate: "2022-03-09", expiryDate: "2030-03-09" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 48 -------------------------------------------------------------
  // A1+A+B1+B (2014) ? C1+C+D1+D (2020) — two date groups
  {
    licenseNumber: "EP7890125",
    nic: "198289012489",
    fullName: "Nuwan Dissanayake",
    dateOfBirth: "1982-06-30",
    address: "44/D, Badulla Road, Welimada",
    licenseIssueDate: "2014-07-06",
    licenseExpiryDate: "2024-02-18",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "A1", issueDate: "2014-07-06", expiryDate: "2022-07-06" },
      { category: "A",  issueDate: "2014-07-06", expiryDate: "2022-07-06" },
      { category: "B1", issueDate: "2014-07-06", expiryDate: "2022-07-06" },
      { category: "B",  issueDate: "2014-07-06", expiryDate: "2022-07-06" },
      { category: "C1", issueDate: "2020-02-18", expiryDate: "2024-02-18" },
      { category: "C",  issueDate: "2020-02-18", expiryDate: "2024-02-18" },
      { category: "D1", issueDate: "2020-02-18", expiryDate: "2024-02-18" },
      { category: "D",  issueDate: "2020-02-18", expiryDate: "2024-02-18" }
    ],
    issuingOffice: "Badulla DMT Office"
  },

  // -- Record 49 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "NP8901236",
    nic: "199090123500",
    fullName: "Sanduni Perera",
    dateOfBirth: "1990-11-15",
    address: "17, Anuradhapura Road, Mihintale",
    licenseIssueDate: "2016-01-30",
    licenseExpiryDate: "2024-01-30",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2016-01-30", expiryDate: "2024-01-30" }
    ],
    issuingOffice: "Anuradhapura DMT Office"
  },

  // -- Record 50 -------------------------------------------------------------
  // B (2014) ? C1+C (2019) — added commercial later
  {
    licenseNumber: "SP9012347",
    nic: "198301234611",
    fullName: "Chamara Liyanage",
    dateOfBirth: "1983-04-08",
    address: "31, Matara Road, Weligama",
    licenseIssueDate: "2014-12-14",
    licenseExpiryDate: "2023-07-01",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B",  issueDate: "2014-12-14", expiryDate: "2022-12-14" },
      { category: "C1", issueDate: "2019-07-01", expiryDate: "2023-07-01" },
      { category: "C",  issueDate: "2019-07-01", expiryDate: "2023-07-01" }
    ],
    issuingOffice: "Matara DMT Office"
  },

  // -- Record 51 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "B2234578",
    nic: "199434567934",
    fullName: "Lahiru Rajapaksa",
    dateOfBirth: "1994-09-20",
    address: "22/A, Galle Road, Moratuwa",
    licenseIssueDate: "2019-08-05",
    licenseExpiryDate: "2027-08-05",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2019-08-05", expiryDate: "2027-08-05" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 52 -------------------------------------------------------------
  // A1+A+B1+B all same date
  {
    licenseNumber: "NC3345689",
    nic: "198545679045",
    fullName: "Chamara Wickramasinghe",
    dateOfBirth: "1985-02-16",
    address: "58, Kandy Road, Rambukkana",
    licenseIssueDate: "2015-03-09",
    licenseExpiryDate: "2023-03-09",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "A1", issueDate: "2015-03-09", expiryDate: "2023-03-09" },
      { category: "A",  issueDate: "2015-03-09", expiryDate: "2023-03-09" },
      { category: "B1", issueDate: "2015-03-09", expiryDate: "2023-03-09" },
      { category: "B",  issueDate: "2015-03-09", expiryDate: "2023-03-09" }
    ],
    issuingOffice: "Kandy DMT Office"
  },

  // -- Record 53 -------------------------------------------------------------
  // B only
  {
    licenseNumber: "WP4456790",
    nic: "199167890156",
    fullName: "Thilina Amarasinghe",
    dateOfBirth: "1991-08-14",
    address: "4/C, Colombo Road, Panadura",
    licenseIssueDate: "2017-10-22",
    licenseExpiryDate: "2025-10-22",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2017-10-22", expiryDate: "2025-10-22" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 54 -------------------------------------------------------------
  // B (2016) ? C1+C+D1+D (2021) — heavy driver, two date groups
  {
    licenseNumber: "CP5467801",
    nic: "198878901367",
    fullName: "Asanka Silva",
    dateOfBirth: "1988-11-03",
    address: "71/B, Kurunegala Road, Giriulla",
    licenseIssueDate: "2016-06-18",
    licenseExpiryDate: "2025-09-22",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B",  issueDate: "2016-06-18", expiryDate: "2024-06-18" },
      { category: "C1", issueDate: "2021-09-22", expiryDate: "2025-09-22" },
      { category: "C",  issueDate: "2021-09-22", expiryDate: "2025-09-22" },
      { category: "D1", issueDate: "2021-09-22", expiryDate: "2025-09-22" },
      { category: "D",  issueDate: "2021-09-22", expiryDate: "2025-09-22" }
    ],
    issuingOffice: "Kurunegala DMT Office"
  },

  // -- Record 55 -------------------------------------------------------------
  // B1+B (2018) + G1 (2022) — three-wheeler + car, special vehicle added later
  {
    licenseNumber: "EP8901236",
    nic: "199289012578",
    fullName: "Nadeeka Seneviratne",
    dateOfBirth: "1992-01-27",
    address: "38/A, Badulla Road, Haputale",
    licenseIssueDate: "2018-09-03",
    licenseExpiryDate: "2030-04-15",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B1", issueDate: "2018-09-03", expiryDate: "2026-09-03" },
      { category: "B",  issueDate: "2018-09-03", expiryDate: "2026-09-03" },
      { category: "G1", issueDate: "2022-04-15", expiryDate: "2030-04-15" }
    ],
    issuingOffice: "Badulla DMT Office"
  },

  // ------------------------------------------------------------------------
  // TEST RECORDS — Records 56-60
  // These 5 records are included exactly as specified for API testing.
  // ------------------------------------------------------------------------

  // -- Record 56 — TEST001 ---------------------------------------------------
  {
    licenseNumber: "TEST001",
    nic: "900000001V",
    fullName: "Test Driver Active",
    dateOfBirth: "1990-01-01",
    address: "Test Address, Colombo 07",
    licenseIssueDate: "2015-01-01",
    licenseExpiryDate: "2023-01-01",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2015-01-01", expiryDate: "2023-01-01" }
    ],
    issuingOffice: "Colombo DMT Office"
  },

  // -- Record 57 — TEST002 ---------------------------------------------------
  {
    licenseNumber: "TEST002",
    nic: "900000002V",
    fullName: "Test Driver Expired",
    dateOfBirth: "1990-01-02",
    address: "Test Address, Kandy",
    licenseIssueDate: "2010-01-01",
    licenseExpiryDate: "2018-01-01",
    licenseStatus: "EXPIRED",
    vehicleClasses: [
      { category: "B", issueDate: "2010-01-01", expiryDate: "2018-01-01" }
    ],
    issuingOffice: "Kandy DMT Office"
  },

  // -- Record 58 — TEST003 ---------------------------------------------------
  {
    licenseNumber: "TEST003",
    nic: "900000003V",
    fullName: "Test Driver Suspended",
    dateOfBirth: "1990-01-03",
    address: "Test Address, Galle",
    licenseIssueDate: "2014-01-01",
    licenseExpiryDate: "2022-01-01",
    licenseStatus: "SUSPENDED",
    vehicleClasses: [
      { category: "B", issueDate: "2014-01-01", expiryDate: "2022-01-01" }
    ],
    issuingOffice: "Galle DMT Office"
  },

  // -- Record 59 — TEST004 ---------------------------------------------------
  // New NIC format + two categories different dates
  {
    licenseNumber: "TEST004",
    nic: "199000000458",
    fullName: "Test Driver New NIC Format",
    dateOfBirth: "1990-02-01",
    address: "Test Address, Negombo",
    licenseIssueDate: "2016-03-01",
    licenseExpiryDate: "2024-03-01",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B", issueDate: "2016-03-01", expiryDate: "2024-03-01" },
      { category: "A", issueDate: "2016-03-01", expiryDate: "2024-03-01" }
    ],
    issuingOffice: "Negombo DMT Office"
  },

  // -- Record 60 — TEST005 ---------------------------------------------------
  // Multi-class with 3 different date groups (B older, C1+C middle, G newest)
  {
    licenseNumber: "TEST005",
    nic: "900000005V",
    fullName: "Test Driver Multi Class",
    dateOfBirth: "1985-06-15",
    address: "Test Address, Matara",
    licenseIssueDate: "2012-07-01",
    licenseExpiryDate: "2028-07-01",
    licenseStatus: "ACTIVE",
    vehicleClasses: [
      { category: "B",  issueDate: "2012-07-01", expiryDate: "2020-07-01" },
      { category: "C",  issueDate: "2016-03-10", expiryDate: "2020-03-10" },
      { category: "B1", issueDate: "2012-07-01", expiryDate: "2020-07-01" },
      { category: "G",  issueDate: "2020-07-01", expiryDate: "2028-07-01" }
    ],
    issuingOffice: "Matara DMT Office"
  }

];

module.exports = licenseRecords;
