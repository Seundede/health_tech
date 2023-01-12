import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const Home = () => {
    return (
      <View style={tw`p-4 pt-12 bg-black w-full text-white h-full`}>
        <Text>Home</Text>
      </View>
    );
};

export default Home;