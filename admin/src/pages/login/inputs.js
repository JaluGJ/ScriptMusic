import axios from "axios"

const url = "http://localhost:3001/loginAdmin"

const loginValidate = async (values) => {
    try{
        const res = await axios.post(url, values)
        return res.data.token

    }
    catch(error){
        console.log(error)
    }
}

export default loginValidate