// ─── Shared product catalogue ───────────────────────────────────────────────
// Sample data only — replace array contents with real Supabase fetches when
// the products table is connected. Do NOT add real business data here.

export const PRODUCTS = [
  {
    id: 1,
    name: "Hikvision DS-2CD2143G2 Dome Camera",
    category: "Dome Camera",
    price: 4299,
    originalPrice: 5499,
    rating: 4.7,
    reviewCount: 128,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop&crop=center",
    imageAlt:
      "Hikvision dome security camera with black housing, mounted on ceiling",
    specs: ["4MP", "IR 30m", "IP67"],
    description:
      "A compact dome camera offering 4MP clarity and reliable IR night vision up to 30 m. Vandal-resistant IP67 housing makes it suitable for both indoor and outdoor installations.",
    features: [
      "4MP 2688×1520 resolution",
      "IR night vision up to 30 m",
      "IP67 weather & IK10 vandal-resistant",
      "Wide Dynamic Range (WDR)",
      "H.265+ compression",
      "PoE powered (802.3af)",
    ],
  },
  {
    id: 2,
    name: "Dahua IPC-HFW2849S Bullet Camera",
    category: "Bullet Camera",
    price: 3799,
    originalPrice: null,
    rating: 4.5,
    reviewCount: 89,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=600&h=450&fit=crop&crop=center",
    imageAlt:
      "Outdoor bullet security camera with cylindrical housing and sun shield",
    specs: ["8MP", "IR 60m", "IP67"],
    description:
      "An 8MP bullet camera with Smart IR and long-range 60 m night vision. Ideal for perimeter protection and long-corridor coverage outdoors.",
    features: [
      "8MP 3840×2160 (4K) resolution",
      "Smart IR up to 60 m",
      "IP67 weatherproof housing",
      "Built-in microphone",
      "AI features: SMD Plus, people & vehicle detection",
      "PoE powered",
    ],
  },
  {
    id: 3,
    name: "CP Plus 16-Channel DVR System",
    category: "DVR System",
    price: 8999,
    originalPrice: 10499,
    rating: 4.6,
    reviewCount: 54,
    badge: "Sale",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=450&fit=crop&crop=center",
    imageAlt: "16-channel DVR recording unit with front panel controls",
    specs: ["16 CH", "5MP", "H.265+"],
    description:
      "A 16-channel DVR supporting up to 5MP recording with H.265+ compression for efficient storage. Compatible with analogue HD, AHD, CVI and TVI cameras.",
    features: [
      "16-channel simultaneous recording",
      "Up to 5MP resolution per channel",
      "H.265+ smart compression",
      "Supports AHD / CVI / TVI / CVBS",
      "Remote access via mobile app",
      "Supports up to 8 TB HDD",
    ],
  },
  {
    id: 4,
    name: "Hikvision DS-2DE4425IW PTZ Camera",
    category: "PTZ Camera",
    price: 18500,
    originalPrice: 22000,
    rating: 4.8,
    reviewCount: 42,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=450&fit=crop&crop=center",
    imageAlt:
      "Pan-tilt-zoom camera with motorized lens and weather-resistant casing",
    specs: ["4MP", "25× Zoom", "IP66"],
    description:
      "A motorised PTZ camera with 25× optical zoom and 4MP resolution. Supports auto-tracking and wide-area patrol for large open spaces.",
    features: [
      "4MP 2560×1440 resolution",
      "25× optical zoom",
      "Auto-tracking of moving targets",
      "IR night vision up to 100 m",
      "IP66 weatherproof",
      "Preset patrol routes",
    ],
  },
  {
    id: 5,
    name: "CP Plus 8-Channel NVR Kit",
    category: "NVR System",
    price: 12499,
    originalPrice: 14999,
    rating: 4.4,
    reviewCount: 67,
    badge: "Value Kit",
    image:
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&h=450&fit=crop&crop=center",
    imageAlt: "8-channel NVR network video recorder with hard drive bay",
    specs: ["8 CH", "4K", "2TB HDD"],
    description:
      "An 8-channel 4K NVR bundled with a 2 TB hard drive. Supports PoE cameras directly and provides centralised IP recording for small to medium sites.",
    features: [
      "8-channel 4K (8MP) recording",
      "Built-in 8-port PoE switch",
      "2 TB HDD included",
      "ONVIF compatible",
      "Mobile app remote viewing",
      "H.265+ compression",
    ],
  },
  {
    id: 6,
    name: "Universal Camera Mounting Kit",
    category: "Accessories",
    price: 599,
    originalPrice: null,
    rating: 4.3,
    reviewCount: 201,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=450&fit=crop&crop=center",
    imageAlt: "Camera wall mount bracket with hardware accessories",
    specs: ["Steel", "Universal Fit", "Weatherproof"],
    description:
      "A heavy-duty steel mounting bracket compatible with most dome and bullet cameras. Includes all fixings and a waterproof junction box for outdoor cable management.",
    features: [
      "Heavy-duty galvanised steel",
      "Universal 1/4-inch thread",
      "Adjustable arm (up to 180°)",
      "Includes stainless fixings",
      "Weatherproof junction box",
      "Load capacity: up to 3 kg",
    ],
  },
];

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id)) ?? null;
}
