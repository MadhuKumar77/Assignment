import React, { Component, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import DragableMarker from './DraggableMarkers';


export const MapComponent = props => {
  return (
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: props.state.region.latitude,
          longitude: props.state.region.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}>
        <DragableMarker regionOfMap={props.state.region} changePin={props.changePin}/>
      </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 200

    
  },
});
