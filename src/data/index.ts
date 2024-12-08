import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Home',
    href: 'main',
  },
  {
    title: 'About Us',
    href: 'about',
  },
  {
    title: 'Services',
    href: 'services',
  },
  {
    title: 'Approach',
    href: 'approach',
  },
  {
    title: 'Contact Us',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'ROI on Paid Advertisement',
    description:
      'Return on Investment (ROI) measures the profitability of your advertising efforts. Tracking ROI ensures your campaigns generate more revenue than they cost, optimizing every dollar spent.',
    services: [
      ['Facebook Ads', 'Instagram Ads'],
      ['Youtube Ads', 'Tiktok Ads'],
    ],
    number: '01.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Email Marketing',
    description:
      'Email marketing delivers exceptional ROI by reaching your audience directly with personalized, cost-effective campaigns. It’s a proven strategy for driving conversions, nurturing leads, and retaining customers.',
    services: [
      ['Promotional Emails', 'Drip Campaigns'],
      ['Welcome Emails', 'Re-engagement'],
      ['Transactional Emails', 'Seasonal Emails'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Video Editing',
    description:
      'Video editing transforms raw footage into compelling visual stories, enhancing brand messaging and audience engagement. ',
    services: [
      ['Short-Form Content', 'Motion Graphics'],  
      ['Promotional Videos', 'Portfolio videos'],
    ],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Integrated Marketing Campaigns',
    description:
      'Combine paid ads, email marketing, and video editing into a cohesive strategy. Use video ads in paid campaigns, integrate them into email campaigns, and amplify reach with platform-specific targeting.',
  },
  {
    icon: Second,
    title: 'Custom-Tailored Strategies',
    description:
      'Offer tailored solutions based on the client’s goals. For example, use paid ads to drive traffic, email marketing to nurture leads, and video editing to create captivating content.',
  },
  {
    icon: Third,
    title: 'Performance-Driven Focus',
    description: 'Emphasize results. Showcase how our paid ad strategies, coupled with compelling videos and email campaigns, lead to measurable growth in sales, engagement, or brand awareness.',
  },
  {
    icon: Fourth,
    title: 'Creative Content Production',
    description:
      'Leverage our video editing expertise to produce visually stunning assets for ad campaigns and email campaigns. Offer unique, creative content tailored to each platform.',
  },
  {
    icon: Fifth,
    title: 'Full-Funnel Marketing Solution',
    description:
      'Provide a start-to-finish service. Use paid ads to attract prospects, video editing to create appealing content, and email marketing to guide them through the conversion funnel.',
  },
];


export const INPUT_FIELDS = [
  { label: 'Name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Phone', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Name of Organization', name: 'company', classes: '', required: true },
  { label: 'Website', name: 'websiteUrl', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
