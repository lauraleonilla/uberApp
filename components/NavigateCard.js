//import liraries
import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>NavigateCard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          styles={{
            container: { flex: 0, backgroundColor: "white", paddingTop: 20 },
            textInput: {
              fontSize: 18,
              borderRadius: 0,
              backgroundColor: "#DDDDDF",
            },
            textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
          }}
          minLength={2}
          query={{ key: GOOGLE_MAPS_KEY, language: "en" }}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
