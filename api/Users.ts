import axios from 'axios'

const getAllUsers = () => {
    return axios.get('https://delman-fe-api.fly.dev/users')
}

export { getAllUsers }
