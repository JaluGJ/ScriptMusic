import promo1 from '../../../../assets/promos/Imagen1.png'
import promo2 from '../../../../assets/promos/Imagen2.png'
import promo3 from '../../../../assets/promos/Imagen3.png'
import promo4 from '../../../../assets/promos/Imagen4.png'
import promo5 from '../../../../assets/promos/Imagen5.png'
import styles from "../Styles/Item.jsx";
export let StylesPromos = [
    promoOne = {
        id: 3,
        img: promo2,
        containerInfo: styles.containerInfo,
        containerModel: styles.containerModel,
        containerImage: styles.containerImageOne,
        containerText: styles.containerText,
        containerTypePromo:styles.containerTypePromoOne
    },
    promoTwo = {
        id: 2,
        img: promo1,
        containerModel: styles.containerModelUp,
        containerInfo: styles.containerInfoCircle,
        containerText: styles.containerTextCircle,
        containerImage: styles.containerImageCircle,
        containerTypePromo:styles.containerTypePromoTwo
        
    },
    promoThree={ 
        id: 4,
        img: promo5,
        containerModel:styles.containerModalThree,
        containerInfo:styles.containerInfoThree,
        containerText:styles.containerTextThree,
        containerTypePromo:styles.containerTypePromoThree
    },
    promoFor={
        id: 5,
        img: promo4,
        containerInfo:styles.containerInfoCenter,
        containerModel:styles.containerInfoOff,
        containerText:styles.containerTextOff,
        containerImage: styles.containerImageCircleRotate,
        containerTypePromo:styles.containerTypePromoFor,
    },
    promoFive={
        img:promo3
    }
]