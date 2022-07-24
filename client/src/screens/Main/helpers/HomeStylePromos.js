import promo1 from '../../../../assets/promos/Imagen1.png'
import promo2 from '../../../../assets/promos/Imagen2.png'
import promo3 from '../../../../assets/promos/Imagen3.png'
import promo4 from '../../../../assets/promos/Imagen4.png'
import promo5 from '../../../../assets/promos/Imagen5.png'
import styles from "../Styles/Item.jsx";
export let StylesPromos = [
    promoOne = {
        id: 3,
        img: promo1,
        containerModel: styles.containerModelUp,
        containerInfo: styles.containerInfoCircle,
        containerText: styles.containerTextCircle,
        containerImage: styles.containerImageCircle,
    },
    promoTwo = {
        id: 2,
        img: promo2,
        containerModel: styles.containerModel,
        containerInfo: styles.containerInfo,
        containerText: styles.containerText,
    },
    promoThree={ 
        id: 4,
        img: promo3,
    },
    promoFor={
        id: 5,
        containerImage: styles.containerImageCircleRotate,
        img: promo4,
    },
    promoFive={
        img:promo3
    }
]