export const contactInfo = {
  email: 'montapartman@gmail.com',
  phone: '+36 30 648 2016',
  facebook: 'https://www.facebook.com/groups/1809817815893473/',
  instagram: 'https://www.instagram.com/_montapart_/',
  messengerIcon: '/images/messenger.png',
  viberIcon: '/images/viber.svg',
  whatsappIcon: '/images/whatsapp.png',
  telegramIcon: '/images/telegram.png',
};

const internationalPhone = contactInfo.phone.replace(/\s/g, '');
const phoneDigits = internationalPhone.replace(/\D/g, '');

export const contactLinks = {
  phone: `tel:${internationalPhone}`,
  // Replace the explicit telephone fallback with the client's Messenger profile link when confirmed.
  messenger: `tel:${internationalPhone}`,
  viber: `viber://chat?number=${encodeURIComponent(internationalPhone)}`,
  whatsapp: `https://wa.me/${phoneDigits}`,
  telegram: `https://t.me/+${phoneDigits}`,
};

export const aboutText = {
  name: 'Sztipanov Alexandra Tijana',
  image: '/images/rolam.jpg',
};
