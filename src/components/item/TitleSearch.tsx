import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList, ImageSourcePropType } from 'react-native';

interface PassSearch {
    id: string,
    title: string,
    icon?: ImageSourcePropType
}

const TitleSearch: React.FC<PassSearch> = (item) => {
    return (
        <View>
            <Text className={`text-[#2D2D2D] text-sm font-normal my-3.5`}>{item.title}</Text>
            <View className={`mx-0 h-0.5 bg-[#F9F9F9]`} />
        </View>
    )
}

export default TitleSearch