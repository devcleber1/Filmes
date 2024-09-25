import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

import Detalhes from '../About'

export default function Films({data}) {

  const [modal, setModal] = useState(false)

  function openModal(){
    return setModal(true)
  }

  return (
    <View>

      <View style={styles.card}>
      <Text style={styles.title}>{data.nome}</Text>
      <Image
      source={{uri: data.foto}}
      style={styles.capa}
      />

  <View style={styles.btn}>
    <TouchableOpacity style={styles.button} onPress={openModal}>
    <Text style={styles.textButtom}>Leia Mais</Text>
    </TouchableOpacity>
  </View>

</View>

<Modal transparent={true} animationType='slide' visible={modal}>
  <Detalhes film={data} voltar={ () => setModal(false)} />
</Modal>
     
    </View>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: '#f3f3f3',
    margin: 15,
    elevation: 2
  },

 capa:{
  width: 'auto',
  height: 250,
  zIndex: 2
 },

 title:{
  fontSize: 18,
  padding: 15,
  fontWeight: '700'
 },

 btn:{
  alignItems: 'flex-end',
  marginTop: -45,
  zIndex: 9
 },

button:{
  width: 100,
  backgroundColor: '#ff0000',
  opacity: 1,
  padding: 8,
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8
},

textButtom:{
  fontSize: 15,
  fontWeight: '500',
  color: '#ffffff',
  textAlign: 'center'
}

});
