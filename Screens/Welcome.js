import React from "react";
import { View, Text, Button, StyleSheet } from "react-native"
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/action";

const Welcome = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state)
    console.log(data, "From USerData ///////////////////////")

    return (
        <View style={styles.container}>
            <Text> Welcome, User!</Text>
            <Button title="Logout" onPress={() => {
                console.log("function Running Now!")
                dispatch(logOut())
            }} />
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})