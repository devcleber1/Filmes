import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function About(props){
    return(
        <View style={styles.container}>
            
        <View style={styles.modal}>

        <TouchableOpacity style={styles.btn} onPress={ props.voltar} >
            <Text style={{ color: '#fff', fontSize: 16}}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{props.film.nome}</Text>
        <Text style={styles.sinp}>Siinopse:</Text>
        <Text style={styles.desc}>{props.film.sinopse}</Text>

        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    modal:{
        width: '100%',
        height: '50%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },

    btn:{
        backgroundColor: '#ff0000',
        padding: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },

    title: {
        textAlign: 'center',
        color: '#fff',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },

    sinp:{
        color: '#fff',
        fontSize: 15,
        marginBottom: 8,
        marginLeft: 10
    },

    desc:{
        color: '#fff',
        marginLeft: 10,
        marginRight: 10
    }
})