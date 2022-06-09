import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter'

export default function Stats(props) {
    const { stats } = props
    // console.log("stats ", stats)
    const barStyles = (num) => {
        const color = num > 49 ? "#00ac17" : "#ff3e3e"
        return {
            backgroundColor: color,
            width: `${num}%`
        }
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Base Stats</Text>
            {stats.map((item, index) => {
                return (
                    <View style={styles.block} key={index}>
                        <View style={styles.blockTitle}>
                            <Text style={styles.statName} >{capitalizeFirstLetter(item.stat.name)}</Text>
                        </View>
                        <View style={styles.blockInfo}>
                            <Text style={styles.number}>{item.base_stat}</Text>

                            <View style={styles.bgBar}>
                                <View style={[styles.bar, barStyles(item.base_stat)]} ></View>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 40,
        marginTop: 20,
        marginBottom: 30
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5,

    },
    blockTitle: {
        width: "40%"
    },
    statName: {
        fontSize: 12,
        color: "#6b6b6b"
    },
    blockInfo: {
        width: "60%",
        flexDirection: "row",
        alignItems: "center",
    },
    number: {
        width: "20%",
        fontSize: 12
    },
    bgBar: {
        backgroundColor: "#dedede",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden",
    },
    bar: {
        // backgroundColor: "red",
        // width: "100%",
        height: 5,
        borderRadius: 20,

    }

})