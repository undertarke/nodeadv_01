
import fs from 'fs'

let lstCategory = [1882, 8322, 1833, 1789, 2549, 1815, 1520, 8594, 931, 4384, 1975, 915, 17166, 1846, 1686, 4221, 1703, 1801, 27498,
    44792, 8371, 6000, 11312, 976, 27616]

let lstProduct = []

const fetchData = async () => {
    try {

        for (const categoryId of lstCategory) {
            let fetchPromies = []

            for (let page = 1; page < 50; page++) {
                const url = `https://tiki.vn/api/personalish/v1/blocks/listings?limit=40&include=advertisement&aggregations=2&version=home-persionalized&trackity_id=3b6a70f5-8835-00a2-78dd-e147ec338fe3&category=${categoryId}&page=${page}&urlKey=dien-thoai-may-tinh-bang`

                fetchPromies.push(fetch(url, {
                    method: "GET",
                    headers: {
                        'Content-type': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
                    }
                }))

            }

            const responses = await Promise.all(fetchPromies);

            for (let response of responses) {

                if (!response.ok) {
                    console.log("Fetch product lỗi !")
                    continue;
                }


                let res = await response.json()

                if (res.data && res.data.length > 0) {

                    res.data.forEach(item => {
                        console.log(item.id)
                        let newData = {
                            id: item.id,
                            name: item.name,
                            discountRate: item.discount_rate,
                            price: item.price,
                            image: item.thumbnail_url
                        }
                        // create data to Database
                        lstProduct.push(newData)
                    })
                }
            }


        }

    } catch (error) {
        console.log("Quá trình fetch data lỗi: ", error)
    }

    return lstProduct;
}



// fetchData().then(res => {
//     fs.writeFileSync(process.cwd() + "/data_tiki.json", JSON.stringify(lstProduct))
// })

import data from './data_tiki.json' assert {type: 'json'}

console.log(data.length)