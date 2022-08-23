import * as React from 'react'

import { DefaultLayout, Search, HorizontalList } from '../Components'
import { ScrollView } from 'react-native'
import DarkMode from '../Components/DarkMode';

import { data } from "../data/data.js";

export const Main = ({ navigation }) => {
    const recent = data.filter(item => item.category === 'Recent')
    const trending = data.filter(item => item.category === 'Trending')
    
    return (
        <DefaultLayout >
            <>
                <Search />
                <DarkMode />
                <ScrollView>
                    <HorizontalList title="TRENDING" data={trending} navigation={navigation} />
                    <HorizontalList title="RECENT" data={recent} isLarge navigation={navigation} />
                </ScrollView>
            </>
        </DefaultLayout>
    )
}