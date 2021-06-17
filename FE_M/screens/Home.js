import { CommonActions } from '@react-navigation/native';
import React, { Component, useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { AuthContext } from '../context'
import filter from 'lodash.filter';

function Home(props) {

  const [data, setData] = useState();
  const [query, setQuery] = useState();
  const [fullData, setFullData] = useState([]);
  const [isLoading, setIsLoading] = useState();


  useEffect(() => {
    fetch('http://localhost:8000/api/jobs')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFullData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  const renderHeader = () => {
    return (
      <View style={styles.searchbarView}>
        <TextInput
          autoFocus={true}
          style={styles.searchbar}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Iskanje"  />
      </View>
    )
  }

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, job => {
      return contains(job, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({ title, description, employer }, query) =>{
    if ( title.includes(query) || description.includes(query) || employer.includes(query)) {
      return true;
    }

    return false;

  }

  function Job({ title, description, employer, category, location }) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.otherInfo}>{description}</Text>
        <Text style={styles.otherInfo}>{employer}</Text>
        <Text>{category}</Text>
        <Text>{location}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator /> : (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data}
          renderItem={({ item }) => (
            <Job title={item.title} description={item.description} employer={item.employer} />
          )}
        />
      )}
    </View>
  );

}

const styles = StyleSheet.create({
  searchbarView: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20
  },
  searchbar: {
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  card: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  title: {
    fontSize: 30,
    alignItems: 'center'
  },
  otherInfo: {
    alignSelf: 'center'
  }
});

export default Home;








