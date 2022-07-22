import promo1 from '../../../../assets/promos/Imagen1.png'
import promo2 from '../../../../assets/promos/Imagen2.png'
import promo3 from '../../../../assets/promos/Imagen3.png'
import promo4 from '../../../../assets/promos/Imagen4.png'
import promo5 from '../../../../assets/promos/Imagen5.png'
import styles from "../Styles/Item.jsx";
export const instruments = [
    promoThree = {
        id: 1,
        image: promo3,
        containerInfo: styles.offcontainerInfo,
    },
    promoTwo = {
        id: 2,
        image: promo2,
        containerModel: styles.containerModel,
        containerInfo: styles.containerInfo,
        containerText: styles.containerText,
    },
    promoOne = {
        id: 3,
        image: promo1,
        containerModel: styles.containerModelUp,
        containerInfo: styles.containerInfoCircle,
        containerText: styles.containerTextCircle,
        containerImage: styles.containerImageCircle,
    },
    promoFor={ 
        id: 4,
        image: promo4,
    },
    promoFive={
        id: 5,
        containerImage: styles.containerImageCircleRotate,
        image: promo5,
    },
]