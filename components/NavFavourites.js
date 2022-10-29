import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code street 123",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Word",
    destination: "Code street 13",
  },
];

const NavFavourites = () => {
  const navigation = useNavigation();

  const renderSeparator = () => {
    return <View style={[tw`bg-gray-200`, { height: 0.5 }]} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => renderSeparator()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`flex-row items-center p-5`}
        >
          <Ionicons
            name={item.icon}
            size={24}
            color="white"
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
