import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, StyleSheet, ActivityIndicator, Text } from 'react-native';
import InfluencerCard from '../components/InfluencerCard';
import { fetchInfluencers } from '../api/fetchData';

const InfluencerList = ({ navigation }) => {
  const [influencers, setInfluencers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchInfluencers();
      setInfluencers(data);
      setLoading(false);
    };
    loadData();
  }, []);

  // Filter logic: checks if the search string exists in the name or location
  const filteredInfluencers = influencers.filter(inf => 
    inf.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    inf.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{marginTop: 10}}>Loading Influencers...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or location..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <FlatList
        data={filteredInfluencers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <InfluencerCard 
            influencer={item} 
            onPress={() => navigation.navigate('InfluencerDetail', { influencer: item })}
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB', // Very light cool gray background
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '600',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 25, // Pill shaped search bar
    fontSize: 15,
    color: '#1F2937',
    fontWeight: '500',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  }
});

export default InfluencerList;