import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import logo from "../../../../../assets/logo.png"

import { loadTop } from "../../../../services/loadData"
import { useEffect, useState } from "react"
import { Igreetings } from "./interface"

export const Top = () => {
    const [greetings, setGreetings] = useState<Igreetings>()

    useEffect(() => {
        const greetingsInfo = loadTop()
        setGreetings(greetingsInfo)
    }, [])

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={logo} />
            <Text style={styles.welcome}>{greetings?.welcome}</Text>
            <Text style={styles.describe}>{greetings?.describe}</Text>
        </View>
    )
}