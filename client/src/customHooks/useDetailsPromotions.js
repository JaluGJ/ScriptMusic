import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPromoDetails } from "../redux/slices/promotions";


const useDetailsPromotions = ({id}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
    const { token } = useSelector((state) => state.signin);
    const { detailsPromotion } = useSelector((state) => state.promotions);

    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        dispatch(getPromoDetails(id,token));
      })
        return unsubscribe
    }, [navigation])
    

    return [ detailsPromotion]
}

export default useDetailsPromotions

