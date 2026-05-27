export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // e.g., "2025-11-07"
  time: string; // e.g., "09:00 AM"
};

// Curated list of upcoming/popular developer events.
// Image assets live under public/images and can be used directly with next/image
// via paths like "/images/event1.png".
export const events: EventItem[] = [
  {
    image: '/images/event1.png',
    title: 'React Summit US 2025',
    slug: 'react-summit-us-2025',
    location: 'San Francisco, CA, USA',
    date: '2025-11-07',
    time: '09:00 AM'
  },
  {
    image: '/images/event2.png',
    title: 'Next.js Conf 2025',
    slug: 'nextjs-conf-2025',
    location: 'New York, NY, USA',
    date: '2025-10-15',
    time: '10:00 AM'
  },
  {
    image: '/images/event3.png',
    title: 'JavaScript Hackathon',
    slug: 'js-hackathon-2025',
    location: 'Austin, TX, USA',
    date: '2025-08-20',
    time: '08:00 AM'
  },
  {
    image: '/images/event4.png',
    title: 'Web Dev Meetup - React & Node.js',
    slug: 'webdev-meetup-2025',
    location: 'Seattle, WA, USA',
    date: '2025-06-22',
    time: '06:00 PM'
  },
  {
    image: '/images/event5.png',
    title: 'TypeScript Advanced Workshop',
    slug: 'typescript-workshop-2025',
    location: 'Boston, MA, USA',
    date: '2025-07-15',
    time: '02:00 PM'
  },
  {
    image: '/images/event6.png',
    title: 'Full Stack Development Conference',
    slug: 'fullstack-conf-2025',
    location: 'Las Vegas, NV, USA',
    date: '2025-09-01',
    time: '09:00 AM'
  }
]
