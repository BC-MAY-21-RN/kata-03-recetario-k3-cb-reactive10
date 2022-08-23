import React, { useState, useEffect } from 'react'

import { DefaultLayout, Search, HorizontalList } from '../Components'
import { ScrollView } from 'react-native'

import { data } from "../data/data.js";

export const Main = ({ navigation }) => {

    const [recent, setRecent] = useState([])
    const [trending, setTrending] = useState([])

    useEffect(() => {
        setRecent(data.filter(item => item.category === 'Recent'))
        setTrending(data.filter(item => item.category === 'Trending'))
    }, [])


    return (
        <DefaultLayout >
            <>
                <Search />
                <ScrollView>
                    <HorizontalList title="TRENDING" data={trending} navigation={navigation} />
                    <HorizontalList title="RECENT" data={recent} isLarge navigation={navigation} />
                </ScrollView>
            </>
        </DefaultLayout>
    )
}