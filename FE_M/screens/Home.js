import { CommonActions } from "@react-navigation/native";
import React, { Component, useState, useEffect } from "react";

import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
} from "react-native";
import { Icon } from "react-native-elements";
import { ListItem } from "react-native-elements/dist/list/ListItem";
import { AuthContext } from "../context";
import filter from "lodash.filter";
import { block } from "react-native-reanimated";

function Home(props) {
  const [data, setData] = useState();
  const [query, setQuery] = useState();
  const [fullData, setFullData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api/jobs")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setFullData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="Iskanje..."
        />
      </View>
    );
  };

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (job) => {
      return contains(job, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({ title, description }, query) => {
    if (title.includes(query) || description.includes(query)) {
      return true;
    }

    return false;
  };

  function Job({ title, description, payment, id }) {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.id}>{id}</Text>
        <View style={styles.bodyWrapper}>
          <Text style={styles.body}>{description}</Text>
        </View>
        <Text style={styles.payment}>{payment}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: "#85CDCA" }}>
      <Text style={styles.title}>Odprta delovna mesta</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data}
          renderItem={({ item }) => (
            <Job
              title={item.title}
              description={item.description}
              payment={item.payment}
              id={item.id}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchbarView: {
    backgroundColor: "#84CDCA",
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  searchbar: {
    backgroundColor: "#E8A87C",
    padding: 8,
    width: "50%",
    alignSelf: "center",
    borderRadius: "50px",
  },
  card: {
    backgroundColor: "#E8A87C",
    borderRadius: "50px",
    border: "1px solid black",
    padding: 30,
    margin: 10,
    alignSelf: "center",
    width: "50%",
  },
  bodyWrapper: {
    display: "block",
    width: "500px",
    textAlign: "left",
    alignSelf: "center",
  },
  payment: {
    margin: 6,
    fontWeight: "bold",
    textAlign: "right",
  },
  title: {
    fontSize: 30,
    alignItems: "center",
    textAlign: "center;",
  },
  body: {
    textAlign: "center",
  },
  id: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#C38D9D",
  },
});

export default Home;
