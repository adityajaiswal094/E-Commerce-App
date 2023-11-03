/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigate} from 'react-router-native';
import moment from 'moment';

export default function SearchPage() {
  const navigate = useNavigate();

  const d1 = moment().format('MM DD YYYY, HH:mm:ss');
  const d2 = moment(moment() - moment(12599 * 1000)).format(
    'MM DD YYYY, HH:mm:ss',
  );

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.searchBarContainer}>
        <Pressable
          onPress={() => {
            navigate(-1);
          }}>
          <View style={styles.iconButtonStyle}>
            <Icon name="arrow-back" size={25} />
          </View>
        </Pressable>
        <Searchbar
          style={styles.searchbarStyle}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Pressable>
          <View style={styles.iconButtonStyle}>
            <Icon name="filter" size={25} />
          </View>
        </Pressable>
      </View>

      <Text style={{color: 'black'}}>{d1}</Text>
      <Text style={{color: 'black'}}>{d2}</Text>
      <Text style={{color: 'black'}}>{d1 > d2 ? 'true' : 'false'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 10,
    gap: 5,
  },
  iconButtonStyle: {
    padding: 5,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchbarStyle: {
    flex: 1,
    // marginHorizontal: 8,
    // marginTop: 10,
    // top: 0,
    // position: 'absolute',
  },
});
