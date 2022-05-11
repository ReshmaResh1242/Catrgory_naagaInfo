import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as yup from 'yup';
import TextField from '../Components/TextField';
import Data from '../Data/Data';

const CategoryCreate = (props) => {

    const validationSchema = yup.object().shape({
        name_eng: yup.string().trim().label('Category Name in English').required(),
        name_hi: yup.string().trim().label('Category Name in Hindi').required(),
        description: yup.string().trim().label('Description').required(),
        image: yup.string().trim().label('Image').required(),
    });

    return (

        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                }}>
                <Formik
                    initialValues={{
                        name_eng: '',
                        name_hi: '',
                        description: '',
                        image: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        Data.push(
                            {
                                "categoryId": "3",
                                "Name": values.name_eng,
                                "name": [
                                    {
                                        "_id": "01",
                                        "language": "en",
                                        "value": values.name_eng
                                    },
                                    {
                                        "_id": "02",
                                        "language": "hi",
                                        "value": values.name_hi
                                    }
                                ],
                                "description": values.description,
                                "parentID": "612a2bc0c162761c5a2bdbc2",
                                "categoryNumber": 1112,
                                "featured": true,
                                "image": values.image,
                            },
                        )
                        console.log(Data);
                        AsyncStorage.setItem(
                            'categoryListItems',
                            JSON.stringify(Data),
                        ).then((res) => {
                            if (Data) {
                                props.navigation.navigate('CategoryListing')
                                console.log("suvv");
                            } else {
                                props.navigation.navigate('CategoryListing')
                            }

                        });
                    }}
                >
                    {(formikProps) => (
                        <React.Fragment>
                            <View style={styles.headerWrap}>
                                <Text style={styles.headeTextColor}>Create Category</Text>
                            </View>
                            <TextField
                                placeholder="Category Name in English"
                                value={formikProps.values.name_eng}
                                error={
                                    formikProps.touched['name_eng'] &&
                                    formikProps.errors['name_eng']
                                }
                                onChangeText={(value) => {
                                    formikProps.setFieldValue('name_eng', value);
                                }}
                            />
                            <TextField
                                placeholder="Category Name in Hindi"
                                value={formikProps.values.name_hi}
                                error={
                                    formikProps.touched['name_hi'] &&
                                    formikProps.errors['name_hi']
                                }
                                onChangeText={(value) => {
                                    formikProps.setFieldValue('name_hi', value);
                                }}
                            />
                            <TextField
                                placeholder="Description"
                                value={formikProps.values.description}
                                error={
                                    formikProps.touched['description'] &&
                                    formikProps.errors['description']
                                }
                                onChangeText={(value) => {
                                    formikProps.setFieldValue('description', value);
                                }}
                            />
                            <View style={styles.imageWrap}>
                                {!formikProps.values['image']
                                    ?
                                    <Text style={{ color: 'grey', fontSize: 16 }}>Upload Image</Text>
                                    : <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: formikProps.values['image'] ? formikProps.values['image'] : null,
                                        }}
                                    />}
                                <TouchableOpacity onPress={
                                    async () => {
                                        try {
                                            const res = await DocumentPicker.pick({
                                                type: [DocumentPicker.types.images],
                                            });
                                            console.log('DocumentPicker res : ' + JSON.stringify(res));
                                            formikProps.setFieldValue('image', res[0].uri);

                                        } catch (err) {
                                            if (DocumentPicker.isCancel(err)) {
                                            } else {
                                                alert('Unknown Error: ' + JSON.stringify(err));
                                                throw err;
                                            }
                                        }
                                    }} style={styles.photoPickerStyle}>
                                    <Text style={{ color: 'grey' }}>+</Text>
                                </TouchableOpacity>
                            </View>
                            {formikProps.errors.image && <Text style={styles.error}>{formikProps.errors.image}</Text>}
                            <View>
                                <TouchableOpacity style={styles.buttonWrap}
                                    onPress={formikProps.handleSubmit}
                                >
                                    <Text style={styles.createButtonText}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
                        </React.Fragment>
                    )}


                </Formik>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrap: {
        alignItems: 'center',
        paddingVertical: 50,

    },
    headeTextColor: {
        color: 'black',
        fontSize: 30,
    },
    buttonWrap: {
        height: 50,
        backgroundColor: 'green',
        marginHorizontal: 16,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    createButtonText: {
        fontSize: 16,
        color: 'white'
    },
    imageWrap: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 16,
        justifyContent: 'space-between',
    },
    tinyLogo: {
        width: 150,
        height: 150,
    },
    photoPickerStyle: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderColor: 'lightgrey',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    error: {
        color: 'red',
        marginTop: -12,
        marginBottom: 8,
        fontSize: 12,
        paddingLeft: 15,
    },
})

export default CategoryCreate;