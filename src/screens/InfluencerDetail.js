import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { fetchCampaigns } from '../api/fetchData';

const InfluencerDetail = ({ route }) => {
  const { influencer } = route.params;
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCampaigns = async () => {
      const data = await fetchCampaigns();
      setCampaigns(data);
      setLoading(false);
    };
    loadCampaigns();
  }, []);

  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      {/* Colored Banner Area */}
      <View style={styles.banner} />
      
      {/* Profile Info overlapping the banner */}
      <View style={styles.profileSection}>
        <Image source={{ uri: influencer.profileImage }} style={styles.largeImage} />
        <Text style={styles.name}>{influencer.name}</Text>
        <Text style={styles.location}>📍 {influencer.location}</Text>
        
        {/* Clickable Email Button */}
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => Linking.openURL(`mailto:${influencer.email}`)}
        >
          <Text style={styles.contactButtonText}>✉️ Contact {influencer.name.split(' ')[0]}</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Stats Card */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{(influencer.followersCount / 1000).toFixed(1)}k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{influencer.engagementRate}%</Text>
          <Text style={styles.statLabel}>Engagement</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recent Campaigns</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#4F46E5" />
          <Text style={styles.loadingText}>Loading Portfolio...</Text>
        </View>
      ) : (
        <FlatList
          data={campaigns}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={renderHeader}
          renderItem={({ item }) => (
            <View style={styles.campaignCard}>
              <View style={styles.campaignHeader}>
                <Text style={styles.campaignIcon}>✨</Text>
                <Text style={styles.campaignTitle} numberOfLines={1}>{item.title}</Text>
              </View>
              <Text style={styles.campaignBody}>{item.body}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '600',
  },
  headerWrapper: {
    marginBottom: 10,
  },
  banner: {
    height: 140,
    backgroundColor: '#4F46E5', // Premium Indigo matching your cards
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -70, // This negative margin pulls the picture up over the banner
    paddingHorizontal: 20,
  },
  largeImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 28,
    fontWeight: '900',
    color: '#111827',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  location: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '600',
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: '#111827',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 24,
    paddingVertical: 20,
    shadowColor: '#4F46E5',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 5,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#E5E7EB',
  },
  statValue: {
    fontSize: 26,
    fontWeight: '900',
    color: '#4F46E5',
  },
  statLabel: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
    marginLeft: 24,
    marginBottom: 16,
  },
  campaignCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  campaignHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  campaignIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  campaignTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '800',
    color: '#1F2937',
    textTransform: 'capitalize',
  },
  campaignBody: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
  }
});

export default InfluencerDetail;