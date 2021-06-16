import React, { Component, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { AuthContext } from '../context'

function Home(props) {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();


  useEffect(() => {
    fetch('http://localhost:8000/api/jobs')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  })


  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.description}</Text>
          )}
        />
      )}
    </View>
  );

}

export default Home;








