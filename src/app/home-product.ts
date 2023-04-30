export interface Product {
    id: number;
    img: string;
    name: string;
    category: string;
    price: number;
    star: number;
    desc: string;
}
export const products = [
    {
        id: 1,
        img: 'assets/product01.png',
        name: 'Stylish Gray Chair',
        category: 'Office',
        price: 230000,
        star: 5,
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam natus deserunt dolore amet debitis, voluptates incidunt libero rem ad, possimus ullam odit id ut sequi adipisci facilis repellendus a laudantium. Rem animi tenetur, earum sit nesciunt expedita commodi, veritatis itaque eum dolore ratione quidem! Minus obcaecati eum dolorum esse harum quod minima cum quas et, molestiae a, aliquid porro facilis.'
    },
    {
        id: 2,
        img: 'assets/ghe.webp',
        name: 'Modern Gray Sofa',
        category: 'House',
        price: 420000,
        star: 4,
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam natus deserunt dolore amet debitis, voluptates incidunt libero rem ad, possimus ullam odit id ut sequi adipisci facilis repellendus a laudantium. Rem animi tenetur, earum sit nesciunt expedita commodi, veritatis itaque eum dolore ratione quidem! Minus obcaecati eum dolorum esse harum quod minima cum quas et, molestiae a, aliquid porro facilis.'
    },
    {
        id: 3,
        img: 'assets/product04.png',
        name: 'Stylish Gray Chair',
        category: 'Accecories',
        price: 270000,
        star: 5,
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam natus deserunt dolore amet debitis, voluptates incidunt libero rem ad, possimus ullam odit id ut sequi adipisci facilis repellendus a laudantium. Rem animi tenetur, earum sit nesciunt expedita commodi, veritatis itaque eum dolore ratione quidem! Minus obcaecati eum dolorum esse harum quod minima cum quas et, molestiae a, aliquid porro facilis.'
    },
    {
        id: 4,
        img: 'assets/home.png',
        name: 'Modern Gray Sofa',
        category: 'Office',
        price: 500000,
        star: 5,
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam natus deserunt dolore amet debitis, voluptates incidunt libero rem ad, possimus ullam odit id ut sequi adipisci facilis repellendus a laudantium. Rem animi tenetur, earum sit nesciunt expedita commodi, veritatis itaque eum dolore ratione quidem! Minus obcaecati eum dolorum esse harum quod minima cum quas et, molestiae a, aliquid porro facilis.'
    },
]