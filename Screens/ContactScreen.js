import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, Linking, TextInput, Button, TouchableOpacity, Modal } from "react-native"
import { FontAwesome } from "@expo/vector-icons";
import { Platform } from "react-native";

const ContactScreen = () => {

    function whatsAppMe() {
        if (Platform.OS === "android") {
            Linking.openURL('whatsapp://send?&phone=03017818974')
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.input1}>
                    <View>
                        <TextInput placeholder="saifihsp@gmail.com"
                            editable={false}
                            style={styles.input}
                            autoCapitalize="none" />
                    </View>
                    <View >
                        <TouchableOpacity onPress={() => {
                            Linking.openURL("mailto:saifihsp@gmail.com")
                        }} style={styles.mailIcon}>
                            <FontAwesome name="send" size={25} color="violet" style={styles.icon1} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.input2}>
                    <View>
                        <TextInput
                            placeholder="whatsapp Me"
                            editable={false}
                            style={styles.input}
                            autoCapitalize="none" />
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => whatsAppMe()}>
                            <FontAwesome name="whatsapp" size={25} color="#25d366" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "130%",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontWeight: "bold",
        letterSpacing: 2,
        textTransform: "capitalize",
        margin: 10
    },
    input1: {
        flexDirection: "row",
    },
    input2: {
        flexDirection: "row"
    },
    icon: {
        marginTop: 22,
        left: 17
    },
    icon1: {
        marginTop: 22,
        left: 25,
        marginRight: 25
    },
})