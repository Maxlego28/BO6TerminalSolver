import { Button, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import SymbolModal from '@/components/symbolModal/SymbolModal';
import SymbolButton from '@/components/SymbolButton';
import { SymbolEnum } from '@/constants/Symbols';

type ModalCallback = (value : number, symbol: SymbolEnum) => void;

export default function SymbolScreen() {

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalCallback, setModalCallback] = useState<ModalCallback | null>(null);

  const openModalWithCallback = (callback : ModalCallback) => {
    setModalCallback(() => callback); // Définit le callback
    setModalVisible(true); // Ouvre la modal
  };

  const colorScheme = useColorScheme();
  const [x, SetX] = useState(0);
  const [y, SetY] = useState(0);
  const [z, SetZ] = useState(0);
  const [xSymbol, SetXSymbol] = useState(SymbolEnum.Symbol0);
  const [ySymbol, SetYSymbol] = useState(SymbolEnum.Symbol0);
  const [zSymbol, SetZSymbol] = useState(SymbolEnum.Symbol0);

  const [num1, SetNum1] = useState("??");
  const [num2, SetNum2] = useState("??");
  const [num3, SetNum3] = useState("??");

  useEffect(() => {
    if( xSymbol != SymbolEnum.Symbol0 &&  ySymbol != SymbolEnum.Symbol0 &&  zSymbol != SymbolEnum.Symbol0){
      SetNum1((2*(x)+11).toString());
      SetNum2(((2*(z)+y)-5).toString());
      SetNum3(Math.abs((y+z)-x).toString());
    }
  }, [x, y, z]);


  return (
    <View style={styles.screen}>
      <View style={styles.rowView}>

        <View style={styles.container}>
          <SymbolButton symbol={xSymbol} onPress={() =>
            openModalWithCallback((value: number, symbol: SymbolEnum) => {
                SetX(value);
                SetXSymbol(symbol)
              })}/>
          <Text style={styles.title}>X</Text>
        </View>

        <View style={styles.container}>
          <SymbolButton symbol={ySymbol} onPress={() =>
            openModalWithCallback((value: number, symbol: SymbolEnum) => {
                SetY(value);
                SetYSymbol(symbol)
              })}/>
          <Text style={styles.title}>Y</Text>
        </View>

        <View style={styles.container}>
          <SymbolButton symbol={zSymbol} onPress={() =>
            openModalWithCallback((value: number, symbol: SymbolEnum) => {
                SetZ(value);
                SetZSymbol(symbol)
              })}/>
          <Text style={styles.title}>Z</Text>
        </View>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.numberRowView}>

        <View style={styles.numberView}>
          <Text style={styles.subTitleText}>Code: </Text>
        </View>

        <View style={styles.numberView}>
          <Text style={[{borderColor: Colors[useColorScheme() ?? 'dark'].border}, styles.codeText]}>{num1}</Text>
        </View>

        <View style={styles.numberView}>
        <Text style={[{borderColor: Colors[useColorScheme() ?? 'dark'].border}, styles.codeText]}>{num2}</Text>
        </View>

        <View style={styles.numberView}>
        <Text style={[{borderColor: Colors[useColorScheme() ?? 'dark'].border}, styles.codeText]}>{num3}</Text>
        </View>
      </View>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <SymbolModal modalVisible={isModalVisible} modalCallback={modalCallback} setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberView: {
  },
  numberRowView: {
    width: "50%",
    flexDirection:'row',
    justifyContent: "space-evenly",
    marginBottom: 5
  },
  rowView: {
    width: "100%",
    flexDirection:'row',
    justifyContent: "space-evenly",
    marginBottom: 5
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  subTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  codeText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 3,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
