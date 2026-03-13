import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const InfluencerCard = ({ influencer, onPress }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: influencer.profileImage }} style={styles.image} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{influencer.name}</Text>
        <Text style={styles.location} numberOfLines={1}>{influencer.location}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{(influencer.followersCount / 1000).toFixed(1)}k Followers</Text>
          </View>
          <View style={[styles.badge, styles.engagementBadge]}>
            <Text style={[styles.badgeText, styles.engagementText]}>{influencer.engagementRate}% Eng</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.favoriteButton} 
        onPress={() => setIsFavorite(!isFavorite)}
      >
        <Text style={styles.starIcon}>{isFavorite ? '⭐' : '☆'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 20, // Modern rounded corners
    shadowColor: '#4F46E5', // Subtle indigo shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#E0E7FF',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  location: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    backgroundColor: '#EEF2FF',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    color: '#4F46E5',
    fontWeight: '700',
  },
  engagementBadge: {
    backgroundColor: '#ECFDF5',
  },
  engagementText: {
    color: '#059669',
  },
  favoriteButton: {
    padding: 10,
    marginLeft: 5,
  },
  starIcon: {
    fontSize: 26,
    color: '#FBBF24', // Nice gold color
  }
});

export default InfluencerCard;