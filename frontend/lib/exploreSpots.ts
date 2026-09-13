export interface ExploreSpot {
  name: string;
  mapsQuery: string;
  imageSeed: string;
}

// imageSeed feeds a placeholder image service (picsum.photos) so every card
// has a consistent, good-looking photo without needing a paid Places Photos
// API key. These are NOT real photos of the specific spot — flagged here so
// it's an informed choice, not a hidden shortcut.
export const EXPLORE_SPOTS: Record<string, ExploreSpot[]> = {
  "Saudi Arabia": [
    { name: "Dammam Corniche", mapsQuery: "Dammam Corniche Saudi Arabia", imageSeed: "dammam-corniche" },
    { name: "Qatif Old Town", mapsQuery: "Qatif Old Town Saudi Arabia", imageSeed: "qatif-town" },
    { name: "King Fahd Park", mapsQuery: "King Fahd Park Dammam", imageSeed: "kfahd-park" },
    { name: "Half Moon Bay", mapsQuery: "Half Moon Bay Al Khobar", imageSeed: "half-moon-bay" },
    { name: "Al Khobar Corniche", mapsQuery: "Al Khobar Corniche", imageSeed: "khobar-corniche" },
    { name: "Riyadh Boulevard", mapsQuery: "Boulevard Riyadh City", imageSeed: "riyadh-blvd" },
    { name: "Edge of the World", mapsQuery: "Edge of the World Riyadh", imageSeed: "edge-world" },
    { name: "Diriyah At-Turaif", mapsQuery: "At-Turaif Diriyah", imageSeed: "diriyah" },
  ],
  "United Arab Emirates": [
    { name: "Dubai Marina Walk", mapsQuery: "Dubai Marina Walk", imageSeed: "dubai-marina" },
    { name: "Al Fahidi District", mapsQuery: "Al Fahidi Historic District Dubai", imageSeed: "al-fahidi" },
    { name: "Burj Khalifa", mapsQuery: "Burj Khalifa Dubai", imageSeed: "burj-khalifa" },
    { name: "Jumeirah Beach", mapsQuery: "Jumeirah Beach Dubai", imageSeed: "jumeirah-beach" },
    { name: "Dubai Frame", mapsQuery: "Dubai Frame", imageSeed: "dubai-frame" },
    { name: "Abu Dhabi Corniche", mapsQuery: "Abu Dhabi Corniche", imageSeed: "abudhabi-corniche" },
    { name: "Sheikh Zayed Mosque", mapsQuery: "Sheikh Zayed Grand Mosque Abu Dhabi", imageSeed: "zayed-mosque" },
    { name: "Global Village", mapsQuery: "Global Village Dubai", imageSeed: "global-village" },
  ],
  "Qatar": [
    { name: "Doha Corniche", mapsQuery: "Doha Corniche", imageSeed: "doha-corniche" },
    { name: "Souq Waqif", mapsQuery: "Souq Waqif Doha", imageSeed: "souq-waqif" },
    { name: "Museum of Islamic Art", mapsQuery: "Museum of Islamic Art Doha", imageSeed: "mia-doha" },
    { name: "Katara Cultural Village", mapsQuery: "Katara Cultural Village Doha", imageSeed: "katara" },
    { name: "The Pearl-Qatar", mapsQuery: "The Pearl Qatar Doha", imageSeed: "pearl-qatar" },
    { name: "Al Zubarah Fort", mapsQuery: "Al Zubarah Fort Qatar", imageSeed: "zubarah-fort" },
    { name: "Aspire Park", mapsQuery: "Aspire Park Doha", imageSeed: "aspire-park" },
    { name: "National Museum of Qatar", mapsQuery: "National Museum of Qatar", imageSeed: "nmoq" },
  ],
  "Bahrain": [
    { name: "Bahrain National Museum", mapsQuery: "Bahrain National Museum Manama", imageSeed: "bh-museum" },
    { name: "Bahrain Fort", mapsQuery: "Bahrain Fort Manama", imageSeed: "bh-fort" },
    { name: "Manama Souq", mapsQuery: "Manama Souq", imageSeed: "manama-souq" },
    { name: "Al Fateh Mosque", mapsQuery: "Al Fateh Grand Mosque Manama", imageSeed: "fateh-mosque" },
    { name: "Bahrain World Trade Center", mapsQuery: "Bahrain World Trade Center", imageSeed: "bwtc" },
    { name: "Amwaj Islands", mapsQuery: "Amwaj Islands Bahrain", imageSeed: "amwaj" },
    { name: "Tree of Life", mapsQuery: "Tree of Life Bahrain", imageSeed: "tree-of-life" },
    { name: "Qal'at al-Bahrain", mapsQuery: "Qal'at al-Bahrain Fort", imageSeed: "qalat-bahrain" },
  ],
  "Oman": [
    { name: "Mutrah Corniche", mapsQuery: "Mutrah Corniche Muscat", imageSeed: "mutrah-corniche" },
    { name: "Mutrah Souq", mapsQuery: "Mutrah Souq Muscat", imageSeed: "mutrah-souq" },
    { name: "Sultan Qaboos Grand Mosque", mapsQuery: "Sultan Qaboos Grand Mosque Muscat", imageSeed: "sqgm" },
    { name: "Royal Opera House Muscat", mapsQuery: "Royal Opera House Muscat", imageSeed: "opera-muscat" },
    { name: "Qurum Beach", mapsQuery: "Qurum Beach Muscat", imageSeed: "qurum-beach" },
    { name: "Muttrah Fort", mapsQuery: "Muttrah Fort Muscat", imageSeed: "muttrah-fort" },
    { name: "Al Alam Palace", mapsQuery: "Al Alam Palace Muscat", imageSeed: "al-alam" },
    { name: "Wadi Al Khoud", mapsQuery: "Wadi Al Khoud Muscat", imageSeed: "wadi-khoud" },
  ],
  "Türkiye": [
    { name: "Sultanahmet Square", mapsQuery: "Sultanahmet Square Istanbul", imageSeed: "sultanahmet" },
    { name: "Hagia Sophia", mapsQuery: "Hagia Sophia Istanbul", imageSeed: "hagia-sophia" },
    { name: "Blue Mosque", mapsQuery: "Blue Mosque Istanbul", imageSeed: "blue-mosque" },
    { name: "Grand Bazaar", mapsQuery: "Grand Bazaar Istanbul", imageSeed: "grand-bazaar" },
    { name: "Galata Tower", mapsQuery: "Galata Tower Istanbul", imageSeed: "galata-tower" },
    { name: "Bosphorus Strait", mapsQuery: "Bosphorus Strait Istanbul", imageSeed: "bosphorus" },
    { name: "Topkapi Palace", mapsQuery: "Topkapi Palace Istanbul", imageSeed: "topkapi" },
    { name: "Taksim Square", mapsQuery: "Taksim Square Istanbul", imageSeed: "taksim" },
  ],
};

export const GENERIC_EXPLORE_SPOTS: ExploreSpot[] = [
  { name: "City Center", mapsQuery: "city center landmarks", imageSeed: "generic-1" },
  { name: "Old Town", mapsQuery: "old town historic district", imageSeed: "generic-2" },
  { name: "Waterfront", mapsQuery: "waterfront promenade", imageSeed: "generic-3" },
];
