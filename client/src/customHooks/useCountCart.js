
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCountCart = () => {
    const { newItems } = useSelector((state) => state.products);
    const [countProducts, setCountProducts] = useState(0);

    useEffect(() => {
        AsyncStorage.getItem("@shoppingCart").then(
          (countProducts)=>{
            if (countProducts !== null) {
              let totalCount = JSON.parse(countProducts).reduce((acc, cur) => {
                return acc + cur.count;
              } , 0);
              if(totalCount > 9){
                totalCount = "9+";
              }
              setCountProducts(totalCount);
            }
          }).catch((error) => console.log(error));
  }, [newItems]);
  return [countProducts];
}

export default useCountCart
