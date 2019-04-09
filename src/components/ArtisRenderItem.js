import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ArtisRenderItem = (item) => {
    return (
        <View style={styles.constainer}>
            <Image style={styles.imageView} source={{ uri: item.image.length > 0 ? item.image : 'https://dummyimage.com/300' }} />
            <View style={{ paddingLeft: '2%' }}>
                <Text>{item.name}</Text>
            </View>
        </View>
    )
}

export { ArtisRenderItem }

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageView: {
        width: 100,
        height: 100,
        borderRadius: 20
    }
})