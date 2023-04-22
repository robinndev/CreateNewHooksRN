import green from '../../assets/produtores/green.png';
import salad from '../../assets/produtores/salad.png';
import jennyJack from '../../assets/produtores/jenny-jack.png';
import grow from '../../assets/produtores/grow.png';
import potager from '../../assets/produtores/potager.png';

const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const productorsMock = {
    title: "Produtores",
    list: [
        {
            name: "Green",
            image: green,
            distance: `${generateRandomNumber(1, 500)}m`,
            star: generateRandomNumber(1, 5),
        },
        {
            name: "Salad",
            image: salad,
            distance: `${generateRandomNumber(1, 500)}m`,
            star: generateRandomNumber(1, 5),
        },
        {
            name: "Jenny Jack Farm",
            image: jennyJack,
            distance: `${generateRandomNumber(1, 500)}m`,
            star: generateRandomNumber(1, 5),
        },
        {
            name: "Grow",
            image: grow,
            distance: `${generateRandomNumber(1, 500)}m`,
            star: generateRandomNumber(1, 5),
        },
        {
            name: "Potager",
            image: potager,
            distance: `${generateRandomNumber(1, 500)}m`,
            star: generateRandomNumber(1, 5),
        }
    ]
}

export default productorsMock;