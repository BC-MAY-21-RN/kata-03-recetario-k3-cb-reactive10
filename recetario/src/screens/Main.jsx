import * as React from 'react'

import { DefaultLayout, Search, HorizontalList } from '../Components'
import { ScrollView } from 'react-native'

import { data } from "../data/data.js";

export const Main = ({ navigation }) => {
    return (
        <DefaultLayout >
            <>
                <Search />
                <ScrollView>
                    <HorizontalList title="TRENDING" data={data} navigation={navigation} />
                    <HorizontalList title="RECENT" data={data} isLarge navigation={navigation} />
                </ScrollView>
            </>
        </DefaultLayout>
    )
}