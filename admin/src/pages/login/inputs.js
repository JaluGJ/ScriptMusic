import axios from "axios"

const url = "https://sm.up.railway.app/loginAdmin"

const loginValidate = async (values) => {
    try{
        const res = await axios.post(url, values)
        /* console.log(res) */
        return res.data.token

    }
    catch(error){
        console.log(error)
    }
}

export default loginValidate