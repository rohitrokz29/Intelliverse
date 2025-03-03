import React, { useRef, useState } from "react";
import { View, Animated, Dimensions, StyleSheet } from "react-native";
import Landing from "./WelcomeComponents/Landing";
import { SignIn, SignUp } from "./WelcomeComponents/Signin";

const { width } = Dimensions.get("window");

const Welcome = () => {
    const translateX = useRef(new Animated.Value(0)).current; // FIXED
    const [index, setIndex] = useState(0);

    const slideTo = () => {
        const newIndex = index +1
        // Prevents going out of bounds
        Animated.timing(translateX, {
            toValue: -newIndex * width,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIndex(newIndex);

    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { transform: [{ translateX }] }]}>
                <Landing slideTo={slideTo} />
                <SignIn slideTo={slideTo} />
                <SignUp  />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, },
    slider: { flexDirection: "row", width: width * 3 }, // Adjust width to 2 screens
});

export default Welcome;
