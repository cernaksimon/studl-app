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

function Employers(props) {
  const [data, setData] = useState();
  const [query, setQuery] = useState();
  const [fullData, setFullData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/api/employers")
      .then((response) => response.json())
      .then((json) => {
        let count = 0;
        let array = [];
        json.forEach((element, index) => {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ employer_id: element.id }),
          };

          fetch("http://localhost:8000/api/avgEmployerScore/", requestOptions)
            .then((response) => response.json())
            .then((rating) => {
              count++;
              array[index] = { rating, ...element };

              if (count === json.length - 1) {
                setData(array);
                setFullData(array);
                console.log(array);
              }
            })
            .catch((error) => console.error(error));
        });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // const getRating = () => {
  //     data.map((el) => {
  //         const requestOptions = {
  //             method: 'POST',
  //             headers: { 'Content-Type': 'application/json' },
  //             body: JSON.stringify({ employer_id: el.id })
  //         };

  //         fetch('http://localhost:8000/api/avgEmployerScore/', requestOptions)
  //             .then((response) => response.json())
  //             .then((rate) => {
  //                 rate.average_score ?
  //                     setRating(rate) : []
  //             })
  //             .catch((error) => console.error(error))
  //             .finally(() => {
  //                 setIsLoading(false);
  //             });
  //     }, [])
  // }

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
          placeholder="Iskanje"
        />
      </View>
    );
  };

  const handleSearch = (text) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (employer) => {
      return contains(employer, formattedQuery);
    });
    setData(filteredData);
    setQuery(text);
  };

  const contains = ({ title, description, email }, query) => {
    if (
      title.includes(query) ||
      description.includes(query) ||
      email.includes(query)
    ) {
      return true;
    }

    return false;
  };

  function Job({ title, email, description, phone, rating }) {
    return (
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.rating}>
            {rating.average_score
              ? rating.average_score + "/5"
              : rating.message}
          </Text>
        </View>
        <Text style={styles.otherInfo}>{email}</Text>
        <Text style={styles.otherInfo}>{description}</Text>
        <Text>{phone}</Text>
      </View>
    );
  }

  console.log(data);

  return (
    <View style={{ flex: 1, padding: 24 }}>
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
              email={item.email}
              phone={item.phone}
              rating={item.rating}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  searchbarView: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  searchbar: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
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
    alignItems: "center",
    marginRight: 3000,
  },
  rating: {
    fontSize: 10,
    marginLeft: 200,
    color: "blue",
  },
  otherInfo: {
    alignSelf: "center",
  },
  rating: {},
  rate: {},
});

export default Employers;
