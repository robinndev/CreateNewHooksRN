import { Top } from "./components/Top"
import { Productors } from "./components/Prodctors"

export const Home = () => {
    return (
        <Productors top={<Top />} />
    )
}