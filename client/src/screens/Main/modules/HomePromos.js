import React from 'react'
import HomePromosItem from './HomePromosItem.js';
import usePromotions from '../../../customHooks/usePromotions.js';
const HomePromos = () => {
    //const { promotions } = useSelector((state) => state.promotions);
    /* console.log(promoOne.img) */
    const [promotions]= usePromotions()
    return (
        <>
            {
                promotions.map((p, i) => {
                    if (i > 3) {
                        return
                    }
                    /* console.log(p.promo) */
                    return (
                        <HomePromosItem
                            key={i}
                            id={p.id}
                            items={p.items[0]}
                            typePromo={p.promo}
                            img={i===0?promoOne.img:i===1?promoTwo.img:i===2?promoThree.img:promoFor.img}
                            containerInfo={i===0?promoOne.containerInfo:i===1?promoTwo.containerInfo:i===2?promoThree.containerInfo:promoFor.containerInfo}
                            containerModel={i===0?promoOne.containerModel:i===1?promoTwo.containerModel:i===2?promoThree.containerModel:promoFor.containerModel}
                            containerText={i===0?promoOne.containerText:i===1?promoTwo.containerText:i===2?promoThree.containerText:promoFor.containerText}
                            containerImage={i===0?promoOne.containerImage:i===1?promoTwo.containerImage:i===2?promoThree.containerImage:promoFor.containerImage}
                        />
                    )
                })
            }
        </>
    )
}

export default HomePromos