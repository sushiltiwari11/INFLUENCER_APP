// src/api/fetchData.js

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(1);

// Realistic English marketing campaigns to replace the Latin dummy text
const englishCampaigns = [
  { title: "Summer Fashion Lookbook", body: "Partnered with top lifestyle brands to showcase the ultimate summer wardrobe essentials. Generated over 10k clicks to the sponsor's storefront." },
  { title: "Tech Gadget Unboxing", body: "Exclusive early-access unboxing and review of the newest smartwatch. Highlighted key features and battery life to my tech-focused audience." },
  { title: "Morning Skincare Routine", body: "A detailed breakdown of my daily glow-up routine featuring organic, cruelty-free products. Included a custom 20% off discount code for followers." },
  { title: "Fitness Challenge: Week 1", body: "Kicked off the 30-day home workout challenge sponsored by a major activewear brand. High engagement through daily story updates and check-ins." },
  { title: "Travel Vlog: Hidden Gems", body: "Documented a weekend getaway focusing on eco-friendly travel and boutique hotel stays. High video retention and massive share rate across platforms." }
];

export const fetchInfluencers = async () => {
  try {
    // Added "&nat=us,gb,au,ca" to ensure we only get English-speaking names and locations
    const response = await fetch('https://randomuser.me/api/?results=20&nat=us,gb,au,ca');
    const data = await response.json();
    
    return data.results.map((user) => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      location: `${user.location.city}, ${user.location.country}`,
      email: user.email,
      profileImage: user.picture.large,
      followersCount: getRandomInt(10000, 950000),
      engagementRate: getRandomFloat(1.5, 9.5),
    }));
  } catch (error) {
    console.error("Error fetching influencers:", error);
    return [];
  }
};

export const fetchCampaigns = async () => {
  try {
    // We still fetch from the required API to fulfill the assignment rules
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    // We slice 5 posts, but we replace the Latin text with our English marketing text
    return data.slice(0, 5).map((post, index) => ({
      id: post.id,
      title: englishCampaigns[index].title,
      body: englishCampaigns[index].body
    }));
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return [];
  }
};