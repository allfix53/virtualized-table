import type { NextPage } from 'next'
import DefaultLayout from '../components/Layout/DefaultLayout'

const Home: NextPage = () => {
  return (
    <DefaultLayout
      pageTitle="Search User"
      pageDescription="Search existing user"
      pageName="Search | Search User"
    >
      <>Ini search page</>
    </DefaultLayout>
  )
}

export default Home
