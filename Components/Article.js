import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react';
import moment from 'moment';
import * as WebBrowser from 'expo-web-browser';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


const Article = (props) => {
    const { title, description, author, urlToImage, publishedAt, sourceName, url } = props
    const [numberofLines, setNumberOfLines] = useState(3)

    const redirectToSource = () => {
        WebBrowser.openBrowserAsync(url);
    }

    const expand = () => {
        setNumberOfLines(9)
    }

    return (
        <Pressable style={styles.container} onPress={redirectToSource
        }>
            <View >
                <Image
                    style={styles.image}
                    source={{
                        uri: urlToImage || "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                    }}
                />   
                <View style={{ padding: 20 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description} numberOfLines={numberofLines} onPress={() => expand()}>{description}</Text>
                    <View style={styles.data}>
                        <Text style={styles.heading}>By: <Text style={styles.author}>{author || "Unknown"}</Text></Text>
                        <Text style={styles.date}>{moment(publishedAt).format("MMM Do YY")}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>Source : <Text style={styles.source}>{sourceName}</Text></Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default Article

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 40,
        marginVertical: 20,
        shadowColor: "green",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    image: {
        height: 250,
        width: 340,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
    },
    description: {
        fontSize: 15,
        opacity: 0.6,
        marginTop: 20
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    author: {
        fontWeight: "bold",
    },
    date: {
        fontWeight: "bold",
        color: "#0a9396",
        fontSize: 13
    },
    source: {
        color: "#0a9396",
        fontWeight: "bold",
        fontSize: 16,
    }
})