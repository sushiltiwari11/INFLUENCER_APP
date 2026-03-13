# Magic Influencers - React Native Assignment

A modern React Native mobile application that simulates an influencer marketing platform. This project demonstrates core React Native fundamentals, including functional components, hooks (`useState`, `useEffect`), external API integration, and multi-screen navigation.

## 🚀 Features

* **Influencer List Screen:** Displays a dynamic list of influencers fetched from the `randomuser.me` API.
* **Smart Search:** Real-time filtering allowing users to search for influencers by either name or location.
* **Favorites System:** Users can toggle a star icon to mark specific influencers as favorites.
* **Detailed Profiles:** A dedicated screen showing in-depth influencer statistics, including randomly generated metrics for followers and engagement rates.
* **Simulated Campaigns:** Integrates with `jsonplaceholder` to display recent marketing campaign posts for each profile, automatically formatted into professional English marketing copy.
* **Modern UI/UX:** Features a polished, responsive design with floating cards, custom badges, overlapping profile headers, and smooth scrolling.

## 🛠 Tech Stack

* **Framework:** React Native (Expo)
* **Navigation:** React Navigation (`@react-navigation/native-stack`)
* **State Management:** React Hooks
* **Data Fetching:** Native Fetch API

## 📂 Project Structure

The codebase is organized into a clean, modular structure for readability and scalability:

```text
InfluencerApp/
├── App.js                   # Application entry point & Navigation Stack
├── package.json             # Dependencies and scripts
└── src/
    ├── api/
    │   └── fetchData.js     # Centralized API logic and data formatting
    ├── components/
    │   └── InfluencerCard.js # Reusable UI component for the list view
    └── screens/
        ├── InfluencerList.js # Main landing and search screen
        └── InfluencerDetail.js # Expanded profile and campaign view
