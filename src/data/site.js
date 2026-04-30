export const SITE = {
  name: "Vrindavan Eco Plates",
  tagline: "Pure leaf plates for a healthier table",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210",
  whatsappMessage:
    "Hi Vrindavan Eco Plates, I'd like to know more about your eco-friendly leaf plates and pricing.",
  email: "hello@vrindavaneco.in",
  city: "Vrindavan, India",
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phone}`;
