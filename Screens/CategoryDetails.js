import React, { useEffect } from "react";
import {
    StyleSheet, View, Text, Image, ScrollView,
} from 'react-native';

const CategoryDetails = (props) => {

    useEffect(() => {
        console.log(props.route.params.categoryDetails);
    }, []);

    return (

        <ScrollView style={styles.container}>
            <View style={styles.containerWrap}>
                <View style={styles.imageWrap}>
                    <Image
                        style={styles.imageStyle}
                        source={{
                            uri: props.route.params.categoryDetails.image ? props.route.params.categoryDetails.image : null,
                        }}
                    />
                </View>
                <View style={styles.categoryTitleWrap}>
                    <Text style={styles.categoryTitleText}>{props.route.params.categoryDetails.name[0].value}</Text>
                    <Text style={styles.categoryTitleHindi}>{props.route.params.categoryDetails.name[1].value}</Text>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.descriptionText}>{props.route.params.categoryDetails.description}</Text>
                </View>
                <View style={styles.descriptionWrapper}>

                    {props.route.params.categoryDetails.subcategory && props.route.params.categoryDetails.subcategory.map((subCategory, indx) => (
                        <View key={indx}>
                            <Text style={styles.subCategoryText1}>{subCategory.name}</Text>
                            {subCategory.categories && subCategory.categories.map((option, index) => (
                                <Text style={styles.subCategoryText2}>&#10687; {option.name}</Text>
                            ))}
                        </View>))}
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
        paddingLeft: 10,
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
        marginTop: 20,
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
