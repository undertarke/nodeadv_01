// yarn add axios jsdom user-agents
import axios from "axios"
import { JSDOM } from 'jsdom'
import UserAgent from "user-agents"

let userAgent = new UserAgent({ deviceCategory: 'desktop' })

console.log(userAgent)

let lstId = ["B0DFPRXGQB", "B0DF2N4Z62", "B013TGEJEE"]
let url = (id) => `https://www.amazon.com/gp/product/ajax/ref=dp_aod_pn?asin=${id}&m=&qid=1725543740&smid=&sourcecustomerorglistid=&sourcecustomerorglistitemid=&sr=8-3&pc=dp&experienceId=aodAjaxMain`

for (let index = 0; index < 100; index++) {
    axios.get(url("B0DFPRXGQB"), {
        headers: {
            'Accept': 'text/html,*/*',
            'Host': 'www.amazon.com',
            'User-Agent': userAgent.toString()
        }
    }).then(result => {

        const dom = new JSDOM(result.data)
        let name = dom.window.document.querySelector("#aod-asin-title #aod-asin-title-text")
        let price = dom.window.document.querySelector(".a-price .a-offscreen")

        console.log(name.textContent)
        console.log(price.textContent)

    }).catch(error => {
        console.log("Lỗi fetch data")
    })

}


