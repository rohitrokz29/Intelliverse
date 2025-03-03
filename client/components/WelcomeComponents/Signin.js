import React, { useRef, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, StyleSheet, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get("window");


const SignIn = ({ slideTo }) => {

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    const handleSignin = () => {
        console.log({ email, password });
    }
    return (
        <>
            <View style={styles.screen}>
                <View style={styles.topBolck} >
                    <Image
                        source={require('../../assets/signin.jpg')}
                        style={styles.image} />
                    <Text style={styles.text}>Enter the world of AI </Text>
                </View>
                <View style={styles.forms}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeEmail}
                        value={email}
                        placeholder="Email "
                        keyboardType="email-address"
                        inputMode="email"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={slideTo}
                        style={styles.link}>
                        <Text style={{ color: "blue" }}>Create new account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleSignin}
                        style={styles.button}>
                        <Text style={styles.text}>Signin</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const SignUp = () => {
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [name, onChangeName] = useState("");

    const handleSignup = () => {
        console.log({ name, email, password });
    }

    return (
        <>
            <ImageBackground source={require('../../assets/signin-bg.jpg')} resizeMode="cover" >
                {/* <View style={styles.screen}>
                    <View style={styles.topBolck} >
                        <Image
                            source={require('../../assets/signin.jpg')}
                            style={styles.image} />
                        <Text style={styles.text}>Unlock The Power of AI</Text>
                    </View>
                    <View style={styles.forms}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeName}
                            value={name}
                            placeholder="Name "
                            keyboardType="default"
                            inputMode="text"
                        />

                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeEmail}
                            value={email}
                            placeholder="Email "
                            keyboardType="email-address"
                            inputMode="email"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Password"
                            secureTextEntry={true}
                        />

                        <TouchableOpacity
                            onPress={handleSignup}
                            style={styles.button}>
                            <Text style={styles.text}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </ImageBackground>

        </>
    )
}


const styles = StyleSheet.create({
    screen: {
        width, height,
        backgroundColor:'transparent',
        justifyContent: "space-between", alignItems: "center"
    },
    image: {
        width: width * 0.5,
        height: width * 0.5,
        borderRadius: 100
    },
    topBolck: {
        height: 0.5 * height,
        marginTop: 10,
        justifyContent: "space-evenly",
        alignItems: "center",

    },
    text: {
        fontSize: 20,
        textAlign: 'center'

    },
    forms: {
        height: 0.5 * height,
        justifyContent: "space-evenly",
        paddingBottom: 100,
        alignItems: 'center'
    },
    input: {
        width: 0.75 * width,
        height: 50,
        borderWidth: 1,
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        borderRadius: 20,
        backgroundColor: '#fff',
        borderColor: "grey",
    },
    button: {
        backgroundColor: "#fff",
        padding: 10,
        width: 0.5 * width,
        borderRadius: 75,
        boxShadow: "3 '#000'",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

    }

})


export { SignIn, SignUp }