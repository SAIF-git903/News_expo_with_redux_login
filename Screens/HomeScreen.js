import { StyleSheet, View, ScrollView, ActivityIndicator, TouchableOpacity, Modal, Text, Button } from 'react-native'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import Article from '../Components/Article'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../redux/action'

const HomeScreen = () => {

    const [articles, setArticles] = useState([])
    const [animating, setAnimating] = useState(true)
    const [modal, setModal] = useState(false)
    const email = useSelector(state => state.token.user.Email);
    const dispatch = useDispatch()

    const navigation = useNavigation()

    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=24ca1645c82a439ea9b572e505c4a68f', {
            params: {
                category: "technology"
            }
        })
            .then((response) => {
                // handle success
                setArticles(response.data.articles)
                setAnimating(false)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    useEffect(() => {
        getNews()
    }, [])


    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20, backgroundColor: "#FF1493", borderWidth: 10, borderRadius: 30, borderColor: "#FF1493" }} onPress={handleModal}>
                    <AntDesign name="user" size={20} color="white" />
                </TouchableOpacity>
            )
        })
    }, [])

    function handleModal() {
        setModal(!modal)
    }

    function handleBack() {
        setModal(!modal)
    }


    return (
        <>
            <ScrollView>
                {animating ?
                    <View style={styles.spinner}><ActivityIndicator size={40} color="red" animating={animating} /></View> :
                    <View style={styles.container}>
                        {articles.map((item, index) => {
                            return (
                                <Article
                                    key={index}
                                    urlToImage={item.urlToImage}
                                    title={item.title}
                                    description={item.description}
                                    author={item.author}
                                    publishedAt={item.publishedAt}
                                    sourceName={item.source.name}
                                    url={item.url}
                                />
                            )
                        })}
                    </View>
                }
            </ScrollView>
            <View >
                <Modal
                    visible={modal}
                    animationType="slide"
                >
                    <TouchableOpacity style={{ marginTop: 40, }} onPress={handleBack}>
                        <Ionicons name="ios-chevron-back-circle" size={40} color="#FF1493" />
                    </TouchableOpacity>
                    <View style={styles.modalText}>
                        <Text style={styles.email}>{email}</Text>
                        <Button title="Logout" onPress={() => dispatch(logOut())} />
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    spinner: {
        marginTop: 10,
    },
    modalText: {
        flex: 1,
        alignItems: 'center',
    },
    email: {
        backgroundColor: "grey",
        color: "white",
        padding: 20,
        marginBottom: 30
    }
})
