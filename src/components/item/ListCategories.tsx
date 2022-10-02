import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList, ListRenderItem, ScrollView } from 'react-native';
import { Categories } from '../../assets/Data';

interface category {
    id: string,
    title: string,
    image: string
}

const CategoryItem: React.FC<category> = (item) => (
    <View>
        <TouchableOpacity className={`mx-6 mb-5`}>
            <View className={`w-[75px] h-[75px] bg-[#F4F4F2] rounded-[10px] justify-center items-center`}>
                <Image source={item.image} />
            </View>
            <View className={` items-center mt-1.5 justify-items-center w-[80px]`}>
                <Text className={`text-center text-sm leading-[14px] text-[#2E2E2E] font-medium`} >{item.title}</Text>
            </View>
        </TouchableOpacity>
    </View>
)

const ListCategories: React.FC = () => {

    const renderItem: ListRenderItem<category> = (item) => {
        return (
            <CategoryItem title={item.item.title} id={item.item.id} image={item.item.image} />
        )
    }
    return (
        <FlatList data={Categories} renderItem={renderItem} numColumns={3} />
    )
}

export default ListCategories