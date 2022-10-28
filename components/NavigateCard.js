//import liraries
import React, { Component } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>NavigateCard</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where to?"
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
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionsCard");
          }}
          fetchDetails={true}
          returnKeyType={"search"}
        />
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          style={tw`flex-row justify-between w-24 px-4 py-3 rounded-full bg-black`}
        >
          <FontAwesome name="car" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row justify-between w-24 px-4 py-3 rounded-full bg-white`}
        >
          <Ionicons name="fast-food-outline" color="black" size={16} />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
