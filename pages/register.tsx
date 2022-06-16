import type { NextPage } from 'next'
import DefaultLayout from '../components/Layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout
      pageTitle="User Registration"
      pageDescription="Add new User"
      pageName="Register | Add new User"
    >
      <>Ini register page</>
    </DefaultLayout>
  )
}

export default Home
