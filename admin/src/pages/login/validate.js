import axios from "axios"

const baseURL = "https://script-music.herokuapp.com/validate-token"

const validateToken = async (userToken) => {
    try{
        const config = {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          };
        const { data } = await axios.get(baseURL, config)
        return data.user
    }
    catch(error){
        console.log(error)
    }
}

export default validateToken