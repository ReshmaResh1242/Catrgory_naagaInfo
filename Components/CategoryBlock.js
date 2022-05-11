import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

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
                <View style={styles.categoryTitleWrap}>
                    <Text style={styles.categoryTitleText}>{props.categoryTitleEng}</Text>
                    <Text style={styles.categoryTitleHindi}>{props.categoryTitleHindi}</Text>
                </View>
                <View>
                    <Text style={styles.descriptionText}>{props.categoryDescription}</Text>
                </View>
            </View>
            {visibleMore
                ? <View>
                    {props.categoryDetails && props.categoryDetails.map((subCategory, indx) => (
                        <View key={indx}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.subCategoryText1}>{subCategory.name}</Text>
                                {subCategory.categories
                                    ? <View>
                                        {visibleDown
                                            ? <TouchableOpacity onPress={() => setVisibleDown(false)}>
                                                <Text style={styles.subCategorySeeText}>more</Text>
                                            </TouchableOpacity>
                                            : <TouchableOpacity onPress={() => setVisibleDown(true)}>
                                                <Text style={styles.subCategorySeeText}>less</Text>
                                            </TouchableOpacity>}
                                    </View> : null}
                            </View>
                            {!visibleDown && subCategory.categories && subCategory.categories.map((option, index) => (
                                <Text key={index} style={styles.subCategoryText2}>&#10687; {option.name}</Text>
                            ))}
                        </View>))}
                </View>
                : null}

            {props.categoryDetails
                ? <View>
                    {!visibleMore ?
                        <TouchableOpacity style={styles.buttonWrap} onPress={() => setVisibleMore(true)}>
                            <Text style={{ color: "blue" }}>more</Text>
                        </TouchableOpacity>
                        : <TouchableOpacity style={styles.buttonWrap} onPress={() => setVisibleMore(false)}>
                            <Text style={{ color: "blue" }}>less</Text>
                        </TouchableOpacity>
                    }
                </View>
                : null}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 12,
    },
    buttonWrap: {
        alignItems: 'flex-end'
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
    },
    descriptionText: {
        color: 'grey',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    subCategoryText1: {
        color: 'grey',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    subCategoryText2: {
        color: 'grey',
        paddingLeft: 12,
        paddingTop: 2,
    },
    subCategorySeeText: {
        color: 'blue',
        fontSize: 14,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 5,
    },
})

export default CategoryBlock;