export const siteConfig = {
  name: 'Dimco Studio',
  tagline: 'I Design Thumbnails That Make People Click!',
  description: 'Professional YouTube thumbnail designer crafting bold, eye-catching visuals that drive views and engagement.',
  email: 'dimcostudiooffical@gmail.com',
  phone: '+923089074156',
  socials: {
    ytjobs: 'https://ytjobs.co/talent/profile/334535?r=402&t=tnp&utm_campaign=share-new-profile&utm_ref=talent',
    whatsapp: 'https://wa.me/923089074156',
    twitter: 'https://x.com/Dimco_1',
    instagram: 'https://instagram.com/dimcostodiooffical',
  },
};

const featuredModules = import.meta.glob('../assets/featured/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
  query: '?url',
});

export const topClassThumbnails = Object.entries(featuredModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([path, src], index) => ({
    id: index,
    src,
    title: path.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
  }));

export const categories = [{
  id: 'featured',
  title: 'Featured Thumbnails',
  thumbnails: topClassThumbnails,
}];

export const clients = [
  { name: 'Nico Grigg', image: '/images/clients/Nico Grigg.jpg', subscribers: '2.65M', channelUrl: 'https://www.youtube.com/@nicogrigg' },
  { name: 'Xander Budnick', image: '/images/clients/Xander Budnick.jpg', subscribers: '1.68M', channelUrl: 'https://www.youtube.com/@XanderBudnick' },
  { name: 'Matt Batista', image: '/images/clients/Matt Batista.jpg', subscribers: '83.1K', channelUrl: 'https://www.youtube.com/@MattBatista' },
  { name: 'WillNE', image: '/images/clients/WillNE.jpg', subscribers: '5.26M', channelUrl: 'https://www.youtube.com/@WillNE' },
  { name: 'Preston', image: '/images/clients/Preston_yt.jpg', subscribers: '31.5M', channelUrl: 'https://www.youtube.com/@PrestonYT' },
  { name: 'Futcrunch', image: '/images/clients/Futcrunch.jpg', subscribers: '13.5M', channelUrl: 'https://www.youtube.com/@futcrunch' },
  { name: 'CYRILmp4', image: '/images/clients/CYRILmp4.jpg', subscribers: '5.19M', channelUrl: 'https://www.youtube.com/@CYRILmp4' },
  { name: 'Gurky', image: '/images/clients/Gurky.jpg', subscribers: '1.4M', channelUrl: 'https://www.youtube.com/@Gurky' },
  { name: 'Gewoon Thomas', image: '/images/clients/Gewoon Thomas.jpg', subscribers: '1.2M', channelUrl: 'https://www.youtube.com/@GewoonThomas' },
  { name: 'Furtjuh', image: '/images/clients/Furtjuh.jpg', subscribers: '1.22M', channelUrl: 'https://www.youtube.com/@Furtjuh' },
  { name: 'aly brassard', image: '/images/clients/aly brassard.jpg', subscribers: '224K', channelUrl: 'https://www.youtube.com/@alybrassard' },
  { name: 'Colby Martel', image: '/images/clients/Colby Martel.jpg', subscribers: '543K', channelUrl: 'https://www.youtube.com/@ColbyMartel' },
];

const testimonialDetails = {
  'Nico Grigg': { handle: '@nicogrigg', text: 'Clean, modern, and perfectly on-brand — my click-through rates jumped almost immediately after switching.', recommendationLevel: 'Recommended' },
  'Xander Budnick': { handle: '@XanderBudnick', text: "Capturing the energy of outdoor adventure in a single frame isn't easy, but every design pulls viewers straight into the journey.", recommendationLevel: 'Highly Recommended' },
  'Matt Batista': { handle: '@MattBatista', text: 'Fast turnarounds, clear communication, and thumbnails that instantly elevate the whole channel\'s look.', recommendationLevel: 'Recommended' },
  WillNE: { handle: '@WillNE', text: 'Top-tier work, full stop. It hits that exact balance of curiosity and visual punch that real reach demands.', recommendationLevel: 'Highly Recommended' },
  Preston: { handle: '@PrestonYT', text: 'Designing for a multi-million audience means constant innovation — these thumbnails consistently deliver strong engagement and CTR.', recommendationLevel: 'Highly Recommended' },
  Futcrunch: { handle: '@futcrunch', text: 'Bold, vibrant, and impossible to scroll past. A core part of my content strategy.', recommendationLevel: 'Highly Recommended' },
  CYRILmp4: { handle: '@CYRILmp4', text: 'Meticulous attention to detail and color — every thumbnail feels premium and stands out on its own.', recommendationLevel: 'Recommended' },
  Gurky: { handle: '@Gurky', text: 'Seamlessly turns illustration and branding into high-performing YouTube graphics. Creative, sharp, and dependable.', recommendationLevel: 'Recommended' },
  'Gewoon Thomas': { handle: '@GewoonThomas', text: 'Bright, clear, and consistently on-brand — exactly what my channel needed.', recommendationLevel: 'Recommended' },
  Furtjuh: { handle: '@Furtjuh', text: 'A real eye for expression and focal point — the kind of detail that actually earns the click.', recommendationLevel: 'Recommended' },
  'aly brassard': { handle: '@alybrassard', text: "Completely transformed my channel's look. Expressive, sharp, and genuinely effective compositions.", recommendationLevel: 'Highly Recommended' },
  'Colby Martel': { handle: '@ColbyMartel', text: 'Delivers premium thumbnail work on tight deadlines without ever cutting corners on quality.', recommendationLevel: 'Recommended' },
};

export const testimonials = clients.map((client, index) => ({
  id: index + 1,
  name: client.name,
  avatar: client.image,
  ...testimonialDetails[client.name],
}));
