import React from 'react'
import { View } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { styles } from './styles';

export const MainLoader = () => {
    return (
        [...Array(10)].map((_, i) => {
            return (
                <SkeletonPlaceholder>
                    <View style={{ flexDirection: "row", alignItems: "center",margin:8 }}>
                        <View style={{height:50,width:50,borderRadius:100}} />
                        <View style={{ marginLeft: 16 }}>
                            <View style={{ width: 180, height: 20, borderRadius: 4 ,marginTop:6}} />
                            <View style={{ marginTop: 6, width: 100, height: 20, borderRadius: 4 }}/>
                        </View>
                    </View>
                </SkeletonPlaceholder>
            )
        })
    )
}

