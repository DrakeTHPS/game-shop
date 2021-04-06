import React from 'react';
import styles from './front-page.module.css'
import CustomCard from "./custom-card/custom-card";

let pedestal = [
    {
        name: "horizon",
        price: "1999",
        discount: 40,
        img:"https://graph.digiseller.ru/img.ashx?id_d=2925136"
    },
    {
        name: "red dead redemption 2",
        price: "1999",
        discount: 20,
        img:"https://shop.buka.ru/data/img_files/6385/additional750x580/W86ojpNNJr.jpeg",
    },
    {
        name: "it takes two",
        price: "2499",
        discount: null,
        img:"https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-06%2F47da21e0-b1bb-11ea-bfff-6f2fa3c5e515&client=amp-blogside-v2&signature=0a43caa4a909a6f1dde381ef9b6a045bd093082f",
    }
]

const FrontPage = (props) =>{
    return(
        <div className={styles.frontPage}>
            <div className={styles.pedestal}>
                {pedestal.map(game => <CustomCard gameInfo={game}/>)}
            </div>
        </div>
    )
}

export default FrontPage;