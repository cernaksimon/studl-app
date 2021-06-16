import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

  class Hometest extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        isLoading: true
      };
    }

    
  
    

    


    render() {
        const list = [
            {
              name: 'Amy Farha',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              subtitle: 'Vice President'
            },
            {
              name: 'Chris Jackson',
              avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              subtitle: 'Vice Chairman'
            }
          ];
      
      <View>
          bbbbbbb
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>
    }
}
 export default Hometest;




  

  

