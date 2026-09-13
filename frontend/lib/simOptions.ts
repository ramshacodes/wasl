export interface SimPlan {
  provider: string;
  name: string;
  data: string;
  validity: string;
  price: string;
}

export const SIM_PLANS: Record<string, SimPlan[]> = {
  "Saudi Arabia": [
    { provider: "STC", name: "Tourist SIM", data: "20GB", validity: "7 days", price: "SAR 75" },
    { provider: "Mobily", name: "Zajil eSIM", data: "10GB", validity: "7 days", price: "SAR 55" },
    { provider: "Zain KSA", name: "Visitor Pack", data: "30GB", validity: "14 days", price: "SAR 110" },
  ],
  "United Arab Emirates": [
    { provider: "Etisalat", name: "Visitor Line", data: "10GB", validity: "7 days", price: "AED 100" },
    { provider: "du", name: "Tourist eSIM", data: "8GB", validity: "7 days", price: "AED 75" },
    { provider: "Etisalat", name: "Visitor Line XL", data: "20GB", validity: "14 days", price: "AED 165" },
  ],
  "Qatar": [
    { provider: "Ooredoo", name: "Tourist SIM", data: "15GB", validity: "7 days", price: "QAR 65" },
    { provider: "Vodafone Qatar", name: "Travel eSIM", data: "10GB", validity: "7 days", price: "QAR 50" },
    { provider: "Ooredoo", name: "Tourist SIM XL", data: "25GB", validity: "14 days", price: "QAR 110" },
  ],
  "Bahrain": [
    { provider: "Batelco", name: "Tourist SIM", data: "10GB", validity: "7 days", price: "BHD 8" },
    { provider: "Zain Bahrain", name: "Visitor Pack", data: "8GB", validity: "7 days", price: "BHD 6" },
    { provider: "stc Bahrain", name: "Travel eSIM", data: "15GB", validity: "14 days", price: "BHD 12" },
  ],
  "Oman": [
    { provider: "Omantel", name: "Tourist SIM", data: "8GB", validity: "7 days", price: "OMR 5" },
    { provider: "Ooredoo Oman", name: "Visitor eSIM", data: "6GB", validity: "7 days", price: "OMR 4" },
    { provider: "Omantel", name: "Tourist SIM XL", data: "15GB", validity: "14 days", price: "OMR 9" },
  ],
  "Türkiye": [
    { provider: "Turkcell", name: "Welcome SIM", data: "15GB", validity: "7 days", price: "TRY 600" },
    { provider: "Vodafone TR", name: "Travel eSIM", data: "10GB", validity: "7 days", price: "TRY 450" },
    { provider: "Turkcell", name: "Welcome SIM XL", data: "25GB", validity: "14 days", price: "TRY 950" },
  ],
};

export const GENERIC_SIM_PLANS: SimPlan[] = [
  { provider: "Local carrier", name: "Tourist SIM", data: "10GB", validity: "7 days", price: "~$15" },
  { provider: "Local carrier", name: "Travel eSIM", data: "5GB", validity: "7 days", price: "~$10" },
];
