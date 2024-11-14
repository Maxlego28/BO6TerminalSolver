import Colors from "@/constants/Colors";
import Symbols, { SymbolEnum } from "@/constants/Symbols";
import React, { useState } from "react";
import { Pressable, Image, StyleSheet, useColorScheme, ColorValue } from "react-native";

interface Props {
  symbol : SymbolEnum;
  callback : Function;
}

export default function SymbolButtonModal({symbol, callback, ...props} : Props) {
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
                callback();
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
    }
  });

