import Colors from "@/constants/Colors";
import Symbols, { SymbolEnum } from "@/constants/Symbols";
import React from "react";
import { Pressable, useColorScheme, StyleSheet, Image } from "react-native";

interface Props {
    symbol : SymbolEnum;
    onPress : Function;
}

export default function SymbolButton({symbol, onPress, ...props} : Props) {
    let themed = useColorScheme() ?? "dark";
    const imgSrc = Symbols[themed][symbol];
    let buttonStyle = Colors[useColorScheme() ?? 'dark'].button;
    let buttonPressedStyle = Colors[useColorScheme() ?? 'dark'].buttonPressed;

    return (
        <Pressable
            style={ ({pressed}) => [
              (pressed ? {backgroundColor: buttonStyle}: {backgroundColor: buttonPressedStyle}),
              styles.button,
            ]}
            onPress={() => {
                onPress();
            }}>
            <Image style={styles.symbolImg} source={imgSrc} />
        </Pressable>
    )

}

const styles = StyleSheet.create({
    symbolImg:{
      width: 50,
      height: 50,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 6,
    },
    buttonOpen: {
      backgroundColor: '#3f3f46',
    },
    buttonClose: {
      backgroundColor: '#52525b',
    },
  });
