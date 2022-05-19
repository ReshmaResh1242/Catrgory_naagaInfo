import React, { useEffect } from "react";
import {
    StyleSheet, View, Text, Image, ScrollView,
} from 'react-native';

const CategoryDetails = (props) => {

    return (

        <ScrollView style={styles.container}>

            <View style={styles.imageWrap}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: props.route.params.categoryDetails.image ? props.route.params.categoryDetails.image : null,
                    }}
                />
            </View>
            <View style={styles.containerWrap}>
                <View style={styles.categoryTitleWrap}>
                    <Text style={styles.categoryTitleText}>{props.route.params.categoryDetails.name[0].value}</Text>
                    <Text style={styles.categoryTitleHindi}>({props.route.params.categoryDetails.name[1].value})</Text>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row', paddingTop: 5 }}>
                    <Text style={{ color: 'lightgrey', marginHorizontal: 10 }}>{props.route.params.categoryDetails.featured === true ? '⭐Featured' : 'Non Featured'}</Text>

                    <View style={{ width: 30, height: 20, backgroundColor: '#054715', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 12 }}>5★</Text>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 16 }}>Deluna - Palarivattom</Text>
                    <Text style={styles.descriptionText}>123/AB Changapzha, Palarivattom, Kerala</Text>
                </View>
                <View>
                    <Text style={styles.descriptionText}>{props.route.params.categoryDetails.description}</Text>
                </View>
                {props.route.params.categoryDetails.subcategory
                    ? <View>
                        <Text style={{ color: '#DE0E44', fontWeight: 'bold', marginVertical: 10, fontSize: 18, backgroundColor: '#F1EAEB', padding: 10 }}>Categories</Text>
                        <View style={{ borderColor: '#F1EAEB', borderWidth: 0.2 }} />
                        <View style={{ marginBottom: 12 }}>

                            {props.route.params.categoryDetails.subcategory.map((subCategory, indx) => (
                                <View key={indx}>
                                    <Text style={styles.subCategoryText1}><Text style={{ color: "red" }}>▣</Text> {subCategory.name}</Text>
                                    {subCategory.categories && subCategory.categories.map((option, index) => (
                                        <Text style={styles.subCategoryText2}>&#10687; {option.name}</Text>
                                    ))}
                                </View>))}
                        </View>
                    </View> : null}
                <View style={{ borderColor: '#F1EAEB', borderWidth: 0.2 }} />
                <View style={{ marginVertical: 8, marginHorizontal: 10 }}>
                    <Text style={{ color: '#369C2A', fontSize: 12 }}>15 May 2022 at 2:22PM</Text>
                </View>
                <View style={{ borderColor: '#F1EAEB', borderWidth: 0.2 }} />
                <View style={{ alignItems: 'center', marginVertical: 16 }}>
                    <Text style={{ color: 'red', fontSize: 14 }}>Call - 679990090909</Text>
                </View>
            </View>
        </ScrollView>


    );
};

export default CategoryDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerWrap: {
        marginVertical: 12,
        marginHorizontal: 12,
    },
    imageWrap: {
        alignItems: 'center'
    },
    imageStyle: {
        width: '100%',
        height: 200,
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
        justifyContent: 'center',
        marginTop: 12,
    },
    descriptionText: {
        color: 'grey',
    },
    descriptionWrapper: {
        marginVertical: 20,
    },
    subCategoryText1: {
        color: 'grey',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,

    },
    subCategoryText2: {
        color: 'grey',
        paddingLeft: 12,
        paddingTop: 5,

    }


});
