import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Places to visit in Buenos Aires</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.place}
                source={require('./assets/img/place1.jpg')}
              />
              <Text style={styles.subTitle}>Teatro Colón</Text>
            </View>
            <View>
              <Image
                style={styles.place}
                source={require('./assets/img/place2.jpg')}
              />
              <Text style={styles.subTitle}>La Boca</Text>
            </View>
            <View>
              <Image
                style={styles.place}
                source={require('./assets/img/place3.jpg')}
              />
              <Text style={styles.subTitle}>Puerto Madero</Text>
            </View>
            <View>
              <Image
                style={styles.place}
                source={require('./assets/img/place4.jpg')}
              />
              <Text style={styles.subTitle}>Librería El Ateneo</Text>
            </View>
            <View>
              <Image
                style={styles.place}
                source={require('./assets/img/place5.jpg')}
              />
              <Text style={styles.subTitle}>Jardín Japonés</Text>
            </View>
          </ScrollView>
        </View>

        <Text style={styles.title}>Cities you must visit</Text>
        <View>
          <View>
            <Image
              style={styles.cities}
              source={require('./assets/img/city1.jpg')}
            />
            <Text style={styles.subTitle}>Bariloche</Text>
          </View>
          <View>
            <Image
              style={styles.cities}
              source={require('./assets/img/city2.jpg')}
            />
            <Text style={styles.subTitle}>Cataratas del Iguazú</Text>
          </View>
          <View>
            <Image
              style={styles.cities}
              source={require('./assets/img/city3.jpg')}
            />
            <Text style={styles.subTitle}>Mendoza</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Don't Leave with out eat this</Text>
          <View style={styles.list}>
            <View style={styles.listItem}>
              <Image
                style={styles.food}
                source={require('./assets/img/food1.jpg')}
              />
              <Text style={styles.subTitle}>Asado</Text>
            </View>
            <View style={styles.listItem}>
              <Image
                style={styles.food}
                source={require('./assets/img/food2.jpg')}
              />
              <Text style={styles.subTitle}>Locro</Text>
            </View>
            <View style={styles.listItem}>
              <Image
                style={styles.food}
                source={require('./assets/img/food3.jpg')}
              />
              <Text style={styles.subTitle}>Empanadas</Text>
            </View>
            <View style={styles.listItem}>
              <Image
                style={styles.food}
                source={require('./assets/img/food4.jpg')}
              />
              <Text style={styles.subTitle}>Choripán</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    height: 250,
    borderColor: '#000',
    borderWidth: 1,
  },
  container: {
    marginHorizontal: 5,
    marginBottom: 5,
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  place: {
    width: 250,
    height: 300,
    marginHorizontal: 2.5,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  cities: {
    width: '100%',
    height: 300,
    marginVertical: 5,
  },
  food: {
    height: 200,
    width: '100%',
    marginVertical: 1,
    borderRadius: 3,
    borderColor: '#000',
    borderWidth: 1,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  listItem: {
    flexBasis: '49%',
  },
  subTitle: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default App;
