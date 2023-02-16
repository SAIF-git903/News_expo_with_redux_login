import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signigUsers} from '../redux/action';
import {useNavigation} from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector(state => state);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function handleSubmit() {
    let data = {};
    let obj = Object.assign(data, {
      Name: name,
      Email: email,
      Passsword: password,
      ConfirmPassword: confirmPassword,
    });
    dispatch(signigUsers(obj));
    navigation.navigate('Login');
  }

  function navigateToLogin() {
    navigation.navigate('Login');
  }

  function handleAuthentication() {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('', 'Inputs Are Required!', [
        {
          text: 'Ok',
        },
      ]);
      return;
    }

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      alert('Invalid Email Address!');
      return;
    }

    if (password.length < 6) {
      Alert.alert('', 'Password Must be AtLeast Six Chars Long!', [
        {
          text: 'Ok',
        },
      ]);
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('', 'Passwords do not match!', [
        {
          text: 'Ok',
        },
      ]);
      return;
    }

    return handleSubmit();
  }

  return (
    <View style={styles.container}>
      <View style={styles.addUserIcon}>
        <AntDesign name="adduser" size={50} color="white" />
      </View>
      <Text style={styles.heading}>Sign Up For Free</Text>
      <View style={styles.signUp_text}>
        <Text style={styles.txt}>
          You can Sign-up free at News-Fetcher and get the latest Tech-News
        </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Name"
          style={styles.TextInput}
          name="name"
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email"
          style={styles.TextInput}
          name="email"
          onChangeText={text => setEmail(text)}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="password"
          style={styles.TextInput}
          name="password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Confirm Password"
          style={styles.TextInput}
          name="confirmPassword"
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleAuthentication}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <Text>Already have an account ?</Text>
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.linkStyle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
    width: '90%',
    height: 45,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'grey',
  },
  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 5,
    fontFamily: 'serif',
    fontWeight: 'bold',
    color: 'black',
  },
  loginBtn: {
    width: '50%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    backgroundColor: '#FF1493',
    marginBottom: 10,
    borderRadius: 25,
  },
  loginText: {
    color: 'white',
  },
  linkStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'violet',
    fontWeight: 'bold',
  },
  signUp_text: {
    marginHorizontal: 50,
    marginBottom: 50,
  },
  txt: {
    fontSize: 15,
    color: 'grey',
  },
  addUserIcon: {
    borderWidth: 25,
    borderColor: '#FF1493',
    borderRadius: 50,
    backgroundColor: '#FF1493',
  },
});
