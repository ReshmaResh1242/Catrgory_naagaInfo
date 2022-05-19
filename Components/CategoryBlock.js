import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const CategoryBlock = (props) => {
    const [visibleMore, setVisibleMore] = useState(false);
    const [visibleDown, setVisibleDown] = useState(true);

    return (

        <View style={styles.container}>
            <View>
                <View>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: props.categoryImage ? props.categoryImage : null,
                        }}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginVertical: 8 }}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={styles.categoryTitleWrap}>
                            <Text style={styles.categoryTitleText}>{props.categoryTitleEng}</Text>
                            <Text style={styles.categoryTitleHindi}>({props.categoryTitleHindi})</Text>
                        </View>
                        <View>
                            <Text style={{ color: 'lightgrey', marginHorizontal: 10, paddingTop: 3 }}>{props.featured === true ? '⭐Featured' : 'Non Featured'}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonWrap} onPress={props.onPressView}>
                            <Text style={{ color: "#DE0E44", fontWeight: 'bold', }}>View ‣</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            <View style={{ borderColor: '#F1EAEB', borderWidth: 0.2, marginHorizontal: 10 }} />
            {props.categoryDetails
                ? <View style={{ marginVertical: 8 }}>
                    {props.categoryDetails.map((subCategory, indx) => (
                        <View key={indx}>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
                                <Text style={styles.subCategoryText1}><Text style={{ color: "red" }}>▣</Text> {subCategory.name}</Text>
                                {subCategory.categories
                                    ? <View>
                                        {visibleDown
                                            ? <TouchableOpacity onPress={() => setVisibleDown(false)}>
                                                <Text style={styles.subCategorySeeText}>show</Text>
                                            </TouchableOpacity>
                                            : <TouchableOpacity onPress={() => setVisibleDown(true)}>
                                                <Text style={styles.subCategorySeeText}>close</Text>
                                            </TouchableOpacity>}
                                    </View> : null}
                            </View>
                            {!visibleDown && subCategory.categories && subCategory.categories.map((option, index) => (
                                <Text key={index} style={styles.subCategoryText2}>&#10687; {option.name}</Text>
                            ))}
                        </View>))}
                </View> : null}

            {props.categoryDetails &&
                <View style={{ borderColor: '#F1EAEB', borderWidth: 0.2, marginHorizontal: 10 }} />
            }

            <View style={{ marginVertical: 8, marginHorizontal: 10 }}>
                <Text style={{ color: '#369C2A', fontSize: 12 }}>15 May 2022 at 2:22PM</Text>
            </View>
            <View style={{ borderColor: '#F1EAEB', borderWidth: 0.2, marginHorizontal: 10 }} />
            <View style={{ marginVertical: 8, marginHorizontal: 10, flexDirection: 'row' }}>
                <Text style={{ color: 'grey', fontSize: 12, fontWeight: 'bold', paddingTop: 2 }}>You Rated</Text>
                <View style={{ width: 30, height: 20, backgroundColor: '#054715', marginLeft: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>5★</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        margin: 12,
        borderWidth: 0.7,
        borderColor: '#F1EAEB',
        paddingBottom: 10
    },
    buttonWrap: {
        padding: 10

    },
    categoryTitleText: {
        color: 'black',
        fontSize: 18,

    },
    categoryTitleHindi: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 2,

    },
    categoryTitleWrap: {
        flexDirection: 'row',
        paddingHorizontal: 10,

    },
    descriptionText: {
        color: 'grey',
        paddingHorizontal: 10,
        paddingTop: 3,
    },
    tinyLogo: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    subCategoryText1: {
        color: 'grey',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 3
    },
    subCategoryText2: {
        color: 'grey',
        paddingLeft: 25,
    },
    subCategorySeeText: {
        color: '#DE0E44',
        fontSize: 10,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 6
    },
})

export default CategoryBlock;