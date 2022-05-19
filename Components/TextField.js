import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

const TextField = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textBox}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholderTextColor="grey"
      />

      {props.error && <Text style={styles.error}>{props.error}</Text>}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  placeHolder: {
    fontSize: 14,
    color: '#696969',
  },
  textBox: {
    borderColor: '#F1EAEB',
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 16,
    marginHorizontal: 16,
    color: 'grey'
  },
  error: {
    color: 'red',
    marginTop: -12,
    marginBottom: 8,
    fontSize: 12,
    paddingLeft: 15,
  },
});
