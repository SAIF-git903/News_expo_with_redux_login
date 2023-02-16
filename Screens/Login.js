import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Alert
} from "react-native";
import { loggingIn } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons"
import { Entypo } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message"

export default function Login() {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const signedUsers = useSelector(state => state.signedUsers)
    console.log(signedUsers, "From Login Screen")

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        navigation.navigate("SignUp")
    }

    function handleLogin() {
        let data = {};
        let obj = Object.assign(data, {
            "Email": email,
            "Password": password,
        })


        signedUsers.map((users) => {
            for (let keys in users) {
                let email = users[keys].Email
                let password = users[keys].Passsword
                if (email === obj.Email && password === obj.Password) {
                    dispatch(loggingIn(obj))
                }
            }
        })
    }


    function handleAuthentication() {
        if (!email || !password) {
            Alert.alert("", "Inputs Are Required!", [{
                text: "Ok",
            }])
        }
        handleLogin()
    }

    return (
        <View style={styles.container}>
            <View style={styles.userIcon}>
                <Feather name="user" size={50} color="white" />
            </View>
            <Text style={styles.heading}>Log In</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                    name="email"
                    autoCapitalize="none"
                    autoFocus={true}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    name="password"
                    textContentType="password"
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleAuthentication}>
                <Text style={styles.loginText}>
                    <Entypo name="login" size={20} />
                    <Text>LOGIN</Text>
                </Text>
            </TouchableOpacity>
            <Text style={styles.simpleText}>Don't have an account ?</Text>
            <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.forgot_button}>Sign Up Now</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    heading: {
        fontSize: 30,
        fontFamily: "serif",
        marginBottom: 30,
        fontWeight: "bold",
        color: "black"
    },
    inputView: {
        width: "90%",
        height: 45,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "grey"
    },
    TextInput: {
    	width: 200,
        height: 50,
        flex: 1,
        marginLeft: 20,
    },
    forgot_button: {
        marginBottom: 30,
        borderBottomColor: "violet",
        borderBottomWidth: 1,
        fontWeight: "bold"
    },
    loginBtn: {
        width: "70%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
    loginText: {
        color: "white",
    },
    simpleText: {
        marginTop: 15
    },
    userIcon: {
        borderWidth: 25,
        borderColor: "#FF1493",
        borderRadius: 50,
        backgroundColor: "#FF1493",
    }
});
