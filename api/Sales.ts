import axios from 'axios'

const getAllSales = () => {
    return axios.get('https://delman-fe-api.fly.dev/')
}

export { getAllSales }
