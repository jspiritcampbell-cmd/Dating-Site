export const profiles = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 28,
    location: 'San Francisco, CA',
    bio: 'Coffee enthusiast, yoga lover, and adventure seeker. Looking for someone to explore the city with.',
    interests: ['Yoga', 'Coffee', 'Hiking', 'Photography'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    id: 2,
    name: 'Michael Chen',
    age: 32,
    location: 'New York, NY',
    bio: 'Software engineer by day, chef by night. Love trying new restaurants and cooking exotic dishes.',
    interests: ['Cooking', 'Technology', 'Travel', 'Music'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    age: 26,
    location: 'Austin, TX',
    bio: 'Graphic designer with a passion for art and live music. Always up for concerts and gallery openings.',
    interests: ['Art', 'Music', 'Design', 'Festivals'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
  },
  {
    id: 4,
    name: 'David Martinez',
    age: 30,
    location: 'Los Angeles, CA',
    bio: 'Personal trainer and fitness enthusiast. Believe in living a healthy, balanced lifestyle.',
    interests: ['Fitness', 'Nutrition', 'Beach', 'Sports'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
  },
  {
    id: 5,
    name: 'Jessica Lee',
    age: 27,
    location: 'Seattle, WA',
    bio: 'Bookworm and coffee addict. Spend weekends at local cafes reading and people-watching.',
    interests: ['Reading', 'Coffee', 'Writing', 'Movies'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    age: 29,
    location: 'Denver, CO',
    bio: 'Outdoor enthusiast who loves skiing, hiking, and camping. Looking for an adventure partner.',
    interests: ['Skiing', 'Hiking', 'Camping', 'Nature'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
  },
]

export const matches = [
  {
    id: 1,
    profile: profiles[0],
    matchDate: '2 days ago',
    compatibility: 92,
  },
  {
    id: 2,
    profile: profiles[2],
    matchDate: '5 days ago',
    compatibility: 87,
  },
  {
    id: 3,
    profile: profiles[4],
    matchDate: '1 week ago',
    compatibility: 85,
  },
]

export const messages = [
  {
    id: 1,
    profile: profiles[0],
    lastMessage: "That sounds amazing! I'd love to join you for a hike this weekend.",
    timestamp: '10 min ago',
    unread: true,
  },
  {
    id: 2,
    profile: profiles[2],
    lastMessage: "The art gallery opening was incredible! Thanks for the recommendation.",
    timestamp: '2 hours ago',
    unread: false,
  },
  {
    id: 3,
    profile: profiles[4],
    lastMessage: 'Have you read any good books lately?',
    timestamp: 'Yesterday',
    unread: false,
  },
]
