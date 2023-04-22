import { styles } from "./styles"

import { useEffect, useState } from "react"
import { loadProductors } from "../../../../services/loadData"

import { Iproductors } from "./interface"
import { FlatList, Text } from "react-native"

export const Productors = (params: any) => {
    const [productors, setProductors] = useState<Iproductors>()

    useEffect(() => {
        const productorsInfos = loadProductors()
        setProductors(productorsInfos)
        console.log(productorsInfos)
    }, [])

    const topList = () => <>
        {params.top}
        <Text style={styles.title}>{productors?.title}</Text>
    </>

    return <FlatList
            data={productors?.list}
            renderItem={({ item: {name} }) => (
                <Text>{name}</Text>
            )}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={topList}
        />
}