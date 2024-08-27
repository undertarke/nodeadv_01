const { default: axios } = require("axios")

let DOMAIN_BE = "https://apistore.cybersoft.edu.vn"

export const getProductAPI = async () => {
    let { data } = await axios.get(`${DOMAIN_BE}/api/Product`)

    return data
}


export const getProductIdAPI = async (id) => {
    let { data } = await axios.get(`${DOMAIN_BE}/api/Product/getbyid?id=${id}`)

    return data
}