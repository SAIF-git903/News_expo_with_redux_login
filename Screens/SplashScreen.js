import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const SplashScreen = () => {

    const img = require("../assets/splashFolder/mobile.jpg")

    let [fontsLoaded] = useFonts({
        "instaBold": require("../assets/fonts/instaBold.otf"),
        "instaReg": require("../assets/fonts/instaReg.otf")
    })

    if (!fontsLoaded) {
        return false
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground source={img} resizeMode="cover" style={styles.image} >
                    <Text style={styles.text}>Tech News</Text>
                    <View style={styles.icon}>
                        <Ionicons name="logo-designernews" size={100} />
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

export default SplashScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        fontSize: 50,
        fontFamily: "instaReg",
        marginLeft: 90
    }, 
    icon: {
        marginLeft: 120,
    }
})