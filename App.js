import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api';
import Films from './src/Films';

export default function App() {

  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadFilms() {
      const response = await api.get('r-api/?api=filmes');
      setFilms(response.data);
      setLoading(false)
    }

    loadFilms();
  }, []);

  if(loading){
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator color='#000000' size={50} />
      </View>
    )
  } else{
    return (
      <View>
        <FlatList
        showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          data={films}
          renderItem={({ item }) => <Films data={item} />}
        />
      </View>
    );
  }


}

