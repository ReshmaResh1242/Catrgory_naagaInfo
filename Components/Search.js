import React from "react";
import { StyleSheet, View, TextInput, Image } from 'react-native';

const Search = (props) => {

    return (

        <View style={styles.container}>
            <View style={styles.textInput}>
                <Image
                    style={{ width: 30, height: 30, borderRadius: 15, marginLeft: 10 }}
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8fVRbzomE8UxAfdF_d1qgcln-V1NCBwStg&usqp=CAU",
                    }} />
                <TextInput
                    placeholder={"Enter category name"}
                    style={styles.searchTextField}
                    placeholderTextColor="grey"
                    onChangeText={props.onChangeText}
                    value={props.value}
                />
            </View>
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
        color: 'grey',
        flex: 1,
        width: '100%',
        height: 40,
    },
    textInput: {
        flex: 1,
        height: 40,
        borderColor: 'grey',
        borderWidth: 0.2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    buttonWrap: {
        width: 60,
        height: 40,
        backgroundColor: '#DE0E44',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: 'white'
    }
})

export default Search;