import React from 'react';
import {StyleSheet, ImageBackground, FlatList, Text} from 'react-native';
import RallyHeader from '../components/RallyHeader';
import RallyMenuComponent from '../components/RallyMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {gourmetPizzas} from '../assets/products';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderProduct = ({item}) => <RallyMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <RallyHeader />

      <Text style={styles.title}>Меню</Text>

      <FlatList
        data={gourmetPizzas}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        numColumns={2}
        horizontal={false}
        columnWrapperStyle={{
          width: '100%',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.main,
  },
});
