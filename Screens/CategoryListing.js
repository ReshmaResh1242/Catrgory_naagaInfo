import React, { useState, useCallback, useEffect } from "react";
import {
    StyleSheet, View, TouchableOpacity, Text, FlatList, SafeAreaView, Image
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Search from '../Components/Search';
import CategoryBlock from '../Components/CategoryBlock';
import Data from '../Data/Data';

const CategoryListing = (props) => {


    const [categoryList, setCategoryList] = useState([]);
    const [text, setText] = useState("");

    useFocusEffect(
        useCallback(() => {
            setCategory();
        }, []),
    );

    useEffect(() => {
        setCategory();
    }, []);

    const setCategory = async () => {

        AsyncStorage.getItem('categoryListItems').then((res) => {
            let categoryListItems = JSON.parse(res);
            if (categoryListItems) {
                setCategoryList(categoryListItems);
            } else {
                setCategoryList(Data);
            }
        });
    };

    const dynamicSort = (property) => {

        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    };

    const search = (value) => {
        if (value) {
            const newData = Data.filter((data) => {
                const itemData = data.name[0].value ? data.name[0].value.toUpperCase() : ''.toUpperCase();
                const textData = value.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setCategoryList(newData);
            setText(value);
        } else {
            setCategoryList(Data);
            setText(value);
        }
    };

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.searchBarStyle}>
                <Search
                    value={text}
                    onChangeText={(value) => {
                        search(value);
                    }}
                />
            </View>
            {categoryList.length
                ?
                <View style={styles.filterStyle}>
                    <TouchableOpacity style={styles.filterWrap} onPress={() => setCategoryList(Data.filter((data => data.featured === true)))}>
                        <Text style={styles.filterText}>⭐Featured</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterWrap} onPress={() => setCategoryList(Data.filter((data => data.featured === false)))}>
                        <Text style={styles.filterText}>Non Featured</Text>
                    </TouchableOpacity>
                </View>
                : null}
            <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold' }}>Jobs Recommended</Text>
            </View>

            <View style={styles.categoryListStyle}>
                {categoryList.length
                    ?
                    <View style={{ flex: 1, width: '100%' }}>
                        <FlatList
                            data={categoryList.sort(dynamicSort("value"))}
                            keyExtractor={(item, index) => `${item.id}-${index}`}
                            horizontal={false}
                            renderItem={({ item }) => {
                                return (
                                    <View
                                        style={{ flex: 1, width: '100%' }}
                                    >
                                        <CategoryBlock
                                            categoryTitleEng={item.name[0].value}
                                            categoryTitleHindi={item.name[1].value}
                                            categoryDescription={item.description}
                                            categoryImage={item.image}
                                            categoryDetails={item.subcategory ? item.subcategory : null}
                                            featured={item.featured}
                                            onPressView={() =>
                                                props.navigation.navigate('CategoryDetails', {
                                                    categoryDetails: item,
                                                })
                                            }
                                        />
                                    </View>
                                );
                            }}
                        />
                    </View>
                    :
                    <View style={styles.emptyData}>
                        <Image
                            style={{ width: 150, height: 150, borderRadius: 15, marginLeft: 10 }}
                            source={{
                                uri: "https://www.aclproduct.com/images/empty.png",
                            }} />
                        <Text style={styles.emptyDataText}>Ooops, No Data Found</Text>
                    </View>
                }
            </View>

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                    props.navigation.navigate('CategoryCreate')}
                style={styles.createButton}>
                <Text style={styles.createText}>+</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default CategoryListing;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerActivity: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBarStyle: {
        height: 80,
        backgroundColor: "white",
    },
    filterStyle: {
        height: 40,
        backgroundColor: "white",
        flexDirection: 'row'
    },
    filterWrap: {
        width: 110,
        height: 30,
        backgroundColor: 'white',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.2,
        borderRadius: 5,
        borderColor: 'grey'
    },
    filterText: {
        color: 'grey',
        fontSize: 14,
    },
    categoryListStyle: {
        flex: 1,
        backgroundColor: "white",
        marginBottom: 10,
    },
    createButton: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#A6161E',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,

    },
    createText: {
        color: 'white',
        fontSize: 30,
    },
    emptyData: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
    },
    emptyDataText: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
