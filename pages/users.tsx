import type { NextPage } from 'next'
import DefaultLayout from '../components/Layout/DefaultLayout'
import { getAllUsers } from '../api/Users'
import { useQuery } from 'react-query'
import { Box, Center, Container, Progress } from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import RWUsersTable from '../components/ReactWindowTable/RWUsersTable'

const Home: NextPage = () => {
  const { isLoading, error, data } = useQuery('users', () => getAllUsers())
  console.log(isLoading)
  const [content, setContent] = useState(<></>)

  /**
   * Set value of react window using useRef of elemtent
   * react-window height "100%"" not working
   * and react-virtualized-auto-sizer need more package library
   */
  const ref = useRef<any>()
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })
  useEffect(() => {
    setWindowSize({
      height: parseInt(ref.current?.clientHeight),
      width: parseInt(ref.current?.clientWidth),
    })
  }, [])

  return (
    <DefaultLayout
      pageTitle="Users Data"
      pageDescription="List of Users Data"
      pageName="Dashboard | List of Users"
    >
      <Box ref={ref} w="full" h="full">
        {isLoading ? (
          <Progress h={500} w="full" colorScheme="cyan" isIndeterminate />
        ) : (
          <RWUsersTable height={windowSize.height} data={data?.data.data} />
        )}
      </Box>
    </DefaultLayout>
  )
}

export default Home
