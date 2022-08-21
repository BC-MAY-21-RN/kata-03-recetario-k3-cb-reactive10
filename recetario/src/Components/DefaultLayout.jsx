import * as React from 'react'

import {View} from 'react-native'
import { globalStyles } from "../Styles";

export const DefaultLayout = ({children}) => {
  return (
    <View style={globalStyles.screenContainer} >
        <View style={globalStyles.mainContainer}>
            {children}
        </View>
    </View>
  )
}
