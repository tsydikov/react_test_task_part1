import { URL } from "./config"


export default class GetFetchData {
    static async get() {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data)
            return data
        } catch (e) {
            console.log(e)
        }
    }
}