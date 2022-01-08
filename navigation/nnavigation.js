import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text, Linking } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import AnimeList from '../screens/animeList';

export default function buttton(){
    link(){
        this.props.navigation.navigate
    }
    return(
        <Button title="One Piece" onPress={()}/>
    );
}