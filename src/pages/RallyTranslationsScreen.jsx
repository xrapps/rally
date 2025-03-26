import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import RallyHeader from '../components/RallyHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <RallyHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('World Cup', '03.04 09:00', 'Men’s 15km Classic \n' + 'Women’s 10km Classic')}
        {renderBroadcast('Tour de Ski', '06.04 10:30', 'Sprint Freestyle \n' + 'Pursuit')}
        {renderBroadcast('Nordic Champ', '09.04 12:45', 'Mass Start \n' + 'Relay')}
        {renderBroadcast('FIS Cup', '12.04 13:00', 'Men’s 30km Freestyle \n' + 'Women’s 15km Freestyle')}
        {renderBroadcast('Skiathlon', '15.04 11:15', 'Mixed Relay \n' + 'Individual Start')}
        {renderBroadcast('Sprint Cup', '18.04 09:45', 'Classic Sprint \n' + 'Freestyle Sprint')}
        {renderBroadcast('Junior World', '21.04 10:00', 'Men’s 50km \n' + 'Women’s 30km')}
        {renderBroadcast('Universiade', '24.04 12:30', 'Mixed Team Sprint \n' + 'Individual Time Trial')}
        {renderBroadcast('Continental', '27.04 11:15', 'Relay Classic \n' + 'Relay Freestyle')}
        {renderBroadcast('World Champ', '30.04 09:00', 'Team Sprint \n' + 'Mass Start')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 28,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    paddingLeft: 10,
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    margin: 20,
    textAlign: 'center',
  },
});
