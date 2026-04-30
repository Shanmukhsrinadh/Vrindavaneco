export const SITE = {
  name: "Vrindavan Eco Plates",
  tagline: "Pure leaf plates for a healthier table",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  whatsappMessage:
    "Hi Vrindavan Eco Plates, I'd like to know more about your eco-friendly leaf plates and pricing.",
  email: "hello@vrindavaneco.in",
  city: "Visakhapatnam, Andhra Pradesh, India",
  // Location used for the embedded map and "Open in Maps" button.
  address: "RTC Complex, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh, India",
  mapQuery: "RTC Complex, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh",
  coords: { lat: 17.7281, lng: 83.3025 },
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phone}`;

// Google Maps Embed URL (the official "pb=" format) — works in iframes
// without any API key. Centred on the address above.
export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.7!2d83.3025!3d17.7281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433c48d3ccef%3A0xe5713133f27dc6ff!2sRTC+Complex%2C+Dwaraka+Nagar%2C+Visakhapatnam%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

// "Open in Maps" link — opens Google Maps to the same place.
export const mapOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.mapQuery
)}`;
