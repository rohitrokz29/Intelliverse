import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");

const Landing = ({ slideTo }) => {
    return (
        <ImageBackground source={require('../../assets/welcome.jpg')} resizeMode="cover" >
            <View style={styles.screen}>
                <View style={styles.imageContainer}>
                    {/* <Image
                    source={require('../../assets/welcome.jpg')}
                    style={styles.image}
                    resizeMode="contain"
                /> */}
                    <Text style={styles.normal}>Enhance your productivity with AI in pocket</Text>

                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity onPress={slideTo} style={styles.button}>
                        <Icon name="arrow-right" size={24} color="black" backgroundColor='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    screen: {
        width,
        height,
        justifyContent: "space-evenly",

    },
    imageContainer: {
        width,
        height: 0.6 * height,
        justifyContent: "flex-end",
        alignItems: "center",
    },
   
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20
    },
    button: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 75,
        boxShadow: "3 '#000'",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

    },
    normal: {
        fontSize: 20,
        fontWeight: '500',
        color:"#fff",
        backgroundColor:'#00000080',
        paddingInline:5,
        borderRadius:10
    }
});

export default Landing;
