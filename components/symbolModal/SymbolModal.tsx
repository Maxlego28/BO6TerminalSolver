import React from 'react';
import { Modal, Pressable, StyleSheet, useColorScheme } from 'react-native';

import { Text, View } from '../Themed';
import SymbolButtonModal from './SymbolButtonModal';
import { SymbolEnum } from '@/constants/Symbols';
import Colors from '@/constants/Colors';

type ModalCallback = (value : number, symbol: SymbolEnum) => void;

interface Props {
  modalVisible: boolean;
  modalCallback: ModalCallback | null
  setModalVisible : Function;
}

export default function SymbolModal({modalVisible, modalCallback, setModalVisible, ...props} : Props) {

  const handleClose = (value: number, symbol: SymbolEnum) => {
    if (modalCallback) {
      modalCallback(value, symbol);
    }

    setModalVisible(false);
  };

  let backgroundColor = Colors[useColorScheme() ?? 'dark'].background;

  return (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>

          <View style={styles.centeredView}>
            <View style={[{backgroundColor: backgroundColor}, styles.modalView]}>

              <View style={[{backgroundColor: backgroundColor}, styles.rowView]}>
                <SymbolButtonModal symbol={SymbolEnum.Symbol1} callback={() => handleClose(0, SymbolEnum.Symbol1)}/>
                <SymbolButtonModal symbol={SymbolEnum.Symbol2} callback={() => handleClose(11, SymbolEnum.Symbol2)}/>
                <SymbolButtonModal symbol={SymbolEnum.Symbol3} callback={() => handleClose(10, SymbolEnum.Symbol3)}/>
              </View>

              <View style={[{backgroundColor: backgroundColor}, styles.rowView]}>
                <SymbolButtonModal symbol={SymbolEnum.Symbol4} callback={() => handleClose(22, SymbolEnum.Symbol4)}/>
                <SymbolButtonModal symbol={SymbolEnum.Symbol5} callback={() => handleClose(21, SymbolEnum.Symbol5)}/>
                <SymbolButtonModal symbol={SymbolEnum.Symbol6} callback={() => handleClose(20, SymbolEnum.Symbol6)}/>
              </View>

              <Pressable
                style={ ({pressed}) => [
                  (pressed ? styles.cancelButtonClose : styles.cancelButtonOpen),
                  styles.cancelButton,
                ]}
                onPress={() => {
                  setModalVisible(false);
                }}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
  )};


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "80%",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-evenly",
  },
  rowView: {
    width: "100%",
    flexDirection:'row',
    justifyContent: "space-evenly",
    marginBottom: 5
  },
  symbolImg:{
    width: 50,
    height: 50,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  cancelButton: {
    marginTop: 20,
    borderRadius: 12,
    padding: 10,
    elevation: 6,
  },
  cancelButtonOpen: {
    backgroundColor: '#ef4444',
  },
  cancelButtonClose: {
    backgroundColor: '#991b1b',
  },
});