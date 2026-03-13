Magic Influencers - React Native Assignment

A modern React Native mobile application built for the Magic brand to simulate a premium influencer marketing platform. This project demonstrates proficiency in React Native fundamentals, API integration, and clean UI/UX design.

🚀 Key Features

Dynamic Influencer Discovery: Fetches real-time data from the randomuser.me API, localized for English-speaking regions.

Intelligent Search: Allows users to filter influencers instantaneously by Name or Location.

Favorites System: Interactive "Favorite" toggles to save top influencers.

Premium Profile Experience: A redesigned detail screen featuring overlapping profile images, brand-themed banners, and a clickable contact button.

Campaign Portfolio: Integrates with jsonplaceholder to display recent marketing campaigns, automatically translated from Latin placeholder text into professional English marketing copy.

Polished UI/UX: Built with a modern Indigo theme, high-quality typography, rounded "pill" components, and smooth scroll interactions.

🛠 Tech Stack

Framework: React Native (Expo)

Navigation: React Navigation Stack

State Management: React Hooks (useState, useEffect)

Networking: Fetch API with custom data mapping for English localization

Styling: StyleSheet with modern design tokens (Shadows, Flexbox, Border Radii)

📂 Project Structure

The project follows a modular architecture for high maintainability:

InfluencerApp/
├── App.js                   # Navigation config & Entry Point
├── package.json             # Dependencies & Project Scripts
└── src/
    ├── api/
    │   └── fetchData.js     # API logic & English data translation
    ├── components/
    │   └── InfluencerCard.js # List-item UI component
    └── screens/
        ├── InfluencerList.js # Home screen & Search functionality
        └── InfluencerDetail.js # Premium profile & Campaign view


⚙️ Setup & Installation Instructions

Follow these steps to run the application on your local machine:

1. Clone the repository

git clone [https://github.com/sushiltiwari11/INFLUENCER_APP.git](https://github.com/sushiltiwari11/INFLUENCER_APP.git)
cd INFLUENCER_APP


2. Install dependencies

npm install


3. Start the development server

npx expo start -c


4. View the Application

Mobile Device: Open the Expo Go app and scan the QR code.

Android: Press a in your terminal to open the Android Emulator.

iOS: Press i in your terminal to open the iOS Simulator.

📸 Visual Proof

App Screenshots
screenshot 1: ![img1](https://github.com/user-attachments/assets/2f443a67-f8f8-47c9-9795-6b17d97c87ef)
screenshot 2: ![img2](https://github.com/user-attachments/assets/69368b4c-3c8e-4080-9743-b7bed91097ad)
screenshot 3: ![img3](https://github.com/user-attachments/assets/9f28940e-2dbc-49ac-8ad0-19ced705354e)


App Walkthrough Video

video link : https://github.com/user-attachments/assets/a2164c2a-628a-415d-8c41-9eb01e7b6ab0



Author: Sushil Tiwari

