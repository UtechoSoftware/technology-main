/**
 * Single source of truth for Protection Technologies LLC — used for
 * JSON-LD schema, AEO, and consistent copy across the site.
 */
export const company = {
  legalName: "Protection Technologies, LLC",
  shortName: "Protection Technologies",
  founder: "Mike Singer",
  founded: 1999,
  /** Locksmith roots (All Secure Locksmiths Inc., acquired by PT LLC) */
  since: 1985,
  description:
    "Protection Technologies, LLC is a security systems integration company specializing in alarm, access control, and CCTV systems for multifamily, commercial, industrial, government, and critical infrastructure. Founded by Mike Singer in 1999, with roots in locksmithing since 1985. East Coast leader expanding nationwide; zero-debt, referral-driven growth; women-led leadership; Iloq Global Platinum Dealer.",
  services: [
    "Alarm systems",
    "Access control",
    "CCTV and video surveillance",
    "24/7 remote video surveillance",
    "Low-voltage infrastructure (Wi-Fi, intercoms, garage gates, fire systems)",
    "Mobile CCTV trailers and perimeter security",
    "Intrusion sensors",
    "Smart locks and electronic locking systems",
  ],
  sectors: [
    "Multifamily",
    "Commercial",
    "Industrial",
    "Government",
    "Critical infrastructure",
    "Residential",
  ],
  partners: {
    manufacturers: [
      "Iloq",
      "Assa Abloy",
      "PDK",
      "Speco",
      "DW",
      "Latch",
      "Butterfly",
      "Amazon",
    ],
    /** Venue / sports partnerships for security and technology */
    venuePartnerships: [
      "NJ Devils",
      "NY Jets",
      "Atlanta Falcons",
      "Brooklyn Nets",
      "Miami Dolphins",
    ],
  },
  location: {
    /** Primary / HQ — adjust with real address when available */
    city: "Pine Brook",
    state: "New Jersey",
    stateShort: "NJ",
    region: "East Coast",
    serviceArea: "East Coast, expanding nationwide",
  },
  accolades: [
    "Iloq Global Platinum Dealer and Partner (first in the United States)",
    "Marquis Who's Who recognition for Mike Singer (security services, top entrepreneur)",
  ],
};
