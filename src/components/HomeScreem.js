import React, { Component } from 'react'
import {
    StyleSheet, Text, View, TextInput, FlatList, ActivityIndicator
} from 'react-native'

import gql from 'graphql-tag' // Permite crear la Query en un String
import { graphql } from 'react-apollo' // Nos permite ejecutar las Querys y hacer las peticiones al servidor

import { ArtisRenderItem } from './ArtisRenderItem'

const ArtistQuery = gql`
    query Artists($artistName: String) {
        queryArtists(byName:$artistName) {
            name
            id
            image
        }
    }
`

class HomeScreen extends Component {

    keyExtractor = item => item.id

    render() {
        const { queryArtists, refetch, loading } = this.props.data
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.searchBox}
                    placeholder='Ingrese el nombre de un artista'
                    onChangeText={(artist) => refetch({ artistName: artist.length > 0 ? artist : ' ' })}
                />
                {
                    (loading) ?
                        (<ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />) :
                        <FlatList
                            data={queryArtists}
                            keyExtractor={this.keyExtractor}
                            renderItem={({ item }) => { return (ArtisRenderItem(item)) }}
                            ListEmptyComponent={<View><Text>No se encontró algún artista</Text></View>}
                        />}
            </View>
        )
    }
}

const ArtistQueryExecutor = graphql(ArtistQuery, {
    options: props => ({
        variables: { artistName: props.artist }
    })
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    searchBox: {
        width: '95%',
        paddingBottom: 10,
        borderRadius: 5,
        borderBottomColor: 'rgba(0,0,0,.1)',
        borderBottomWidth: .5,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center'
    }
})

HomeScreen = (ArtistQueryExecutor)(HomeScreen)
export default HomeScreen