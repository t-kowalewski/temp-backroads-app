import tourImg1 from './images/tour-1.jpeg';
import tourImg2 from './images/tour-2.jpeg';
import tourImg3 from './images/tour-3.jpeg';
import tourImg4 from './images/tour-4.jpeg';

export const navLinks = [
  { id: 1, href: 'home', text: 'home' },
  { id: 2, href: 'about', text: 'about' },
  { id: 3, href: 'services', text: 'services' },
  { id: 4, href: 'tours', text: 'tours' },
];

export const navIcons = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    faIcon: 'fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    faIcon: 'fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    faIcon: 'fa-squarespace',
  },
];

export const services = [
  {
    id: 1,
    faIcon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    faIcon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    faIcon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    img: tourImg1,
    title: 'Tibet Adventure',
    country: 'China',
    date: 'august 26th, 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tourImg2,
    title: 'best of java',
    country: 'indonesia',
    date: 'october 1th, 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tourImg3,
    title: 'explore hong kong',
    country: 'hong kong',
    date: 'september 15th, 2020',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tourImg4,
    title: 'kenya highlights',
    country: 'kenya',
    date: 'december 5th, 2019',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    duration: 20,
    price: 3300,
  },
];
