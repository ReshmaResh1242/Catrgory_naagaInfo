import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

const Search = (props) => {

    return (

        <View style={styles.container}>
            <View style={styles.searchTextField}>
                <TextInput
                    placeholder={"Enter category name"}
                    style={styles.textInput}
                    placeholderTextColor="grey"
                    onChangeText={props.onChangeText}
                    value={props.value}
                />
            </View>
            <TouchableOpacity style={styles.buttonWrap}
                onPress={props.onSearch}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 12,
        marginVertical: 25
    },
    searchTextField: {
        flex: 1,
    },
    textInput: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        padding: 10,
        color: 'grey'
    },

    buttonWrap: {
        width: 70,
        height: 40,
        backgroundColor: 'green',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white'
    }
})

export default Search;