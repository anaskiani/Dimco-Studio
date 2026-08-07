export const siteConfig = {
  name: 'Dimco Studio',
  tagline: 'I Design Thumbnails That Make People Click!',
  description: 'Professional YouTube thumbnail designer crafting bold, eye-catching visuals that drive views and engagement.',
  email: 'dimcostudiooffical@gmail.com',
  phone: '+923089074156',
  socials: {
    ytjobs: 'https://ytjobs.co',
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
  { name: 'C-Squared Podcast', image: '/images/clients/Csquare-podcasts.png', subscribers: '94.7K', channelUrl: 'https://www.youtube.com/@csqpod' },
  { name: 'IM Alex Banzea', image: '/images/clients/alexBanzea.png', subscribers: '136K', channelUrl: 'https://www.youtube.com/@AlexBanzea' },
  { name: 'Madilynn Cameron', image: '/images/clients/madeline cameron.png', subscribers: '314K', channelUrl: 'https://www.youtube.com/@themadivlog' },
  { name: 'Mooda', image: '/images/clients/mooda.png', subscribers: '333K', channelUrl: 'https://www.youtube.com/channel/UCWddLWvMbnB2990RjPIhogg' },
  { name: 'Dina Belenkaya', image: '/images/clients/dina.png', subscribers: '941K', channelUrl: 'https://www.youtube.com/@dinabelenkaya' },
  { name: 'GMHikaru', image: '/images/clients/GMHikaru.jpeg', subscribers: '3.21M', channelUrl: 'https://www.youtube.com/@GMHikaru' },
  { name: 'Chunkz', image: '/images/clients/chunkz.png', subscribers: '4.02M', channelUrl: 'https://www.youtube.com/@Chunkz' },
];

export const testimonials = [
  { id: 1, name: 'Dina Belenkaya', text: 'Fast, reliable, and consistently delivers outstanding work!', avatar: '/images/clients/dina.png' },
  { id: 2, name: 'Mooda', text: 'Great creative direction and even better thumbnails. Highly recommended!', avatar: '/images/clients/mooda.png' },
  { id: 3, name: 'IM Alex Banzea', text: 'Every option was strong, but the winning design stood out immediately and performed brilliantly.', avatar: '/images/clients/alexBanzea.png' },
  { id: 4, name: 'Madilynn Cameron', text: 'Amazing work! The communication and design quality are truly top-notch.', avatar: '/images/clients/madeline cameron.png' },
  { id: 5, name: 'Chunkz', text: 'Super easy to work with and incredibly talented. Dimco Studio always levels up our ideas!', avatar: '/images/clients/chunkz.png' },
  { id: 6, name: 'GMHikaru', text: 'Excellent work every time. The communication and design skills are amazing!', avatar: '/images/clients/GMHikaru.jpeg' },
  { id: 7, name: 'C-Squared Podcast', text: 'Brilliant thumbnail designer—his work is clean, impactful, and optimized for maximum engagement!', avatar: '/images/clients/Csquare-podcasts.png' },
  { id: 8, name: 'Madilynn Cameron', text: 'Super creative with an incredibly fast turnaround. Our channel CTR improved right away!', avatar: '/images/clients/madeline cameron.png' },
];
