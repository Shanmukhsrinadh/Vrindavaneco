export const SITE = {
  name: "Vrindavan Eco Plates",
  tagline: "Pure leaf plates for a healthier table",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  whatsappMessage:
    "Hi Vrindavan Eco Plates, I'd like to know more about your eco-friendly leaf plates and pricing.",
  email: "hello@vrindavaneco.in",
  city: "Vrindavan, Uttar Pradesh, India",
  // Location used for the embedded map and "Open in Maps" button.
  // Update the address string and coordinates to match your actual workshop / store.
  address: "Vrindavan, Mathura, Uttar Pradesh 281121, India",
  mapQuery: "Vrindavan Eco Plates, Vrindavan, Mathura, Uttar Pradesh, India",
  coords: { lat: 27.5805, lng: 77.7006 },
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phone}`;

// OpenStreetMap embed — no API key required, works inside iframes.
const { lat, lng } = SITE.coords;
const d = 0.012; // bounding-box half-size in degrees (~1.3km wide)
export const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
  lng - d
}%2C${lat - d}%2C${lng + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lng}`;

// "Open in Maps" link — opens Google Maps, which is what most users have.
export const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapQuery
)}`;
