import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import ChooseSymbolModal from '@/components/symbolModal/SymbolModal';

type ModalCallback = (value : number) => void;

export default function ModalScreen() {
  const [isModalVisible, setModalVisible] = useState(true);
  const [modalCallback, setModalCallback] = useState<ModalCallback | null>(null);

  return (
    <View style={styles.container}>
      <ChooseSymbolModal modalVisible={isModalVisible} modalCallback={modalCallback} setModalVisible={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
