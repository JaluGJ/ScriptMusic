const promo1 = "https://res.cloudinary.com/dzonjuriq/image/upload/v1658864055/script_music_img/Imagen1_ptd3vj.png"
const promo2 =  'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864055/script_music_img/Imagen2_i6icps.png'
const promo3 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864059/script_music_img/Imagen3_m58joz.png'
const promo4 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864055/script_music_img/Imagen4_jatymw.png'
const promo5 = 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658864055/script_music_img/Imagen5_u6a52u.png'

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