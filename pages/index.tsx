import type { NextPage } from 'next'
import DefaultLayout from '../components/Layout/DefaultLayout'
import { getAllSales } from '../api/Sales'
import { Progress, Box } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import React, { useEffect, useRef, useState } from 'react'
import RWSalesTable from '../components/ReactWindowTable/RWSalesTable'
import { Column, Table } from 'react-virtualized'

const Home: NextPage = () => {
  const { isLoading, data } = useQuery('sales', () => getAllSales())
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
      pageTitle="Sales Dashboard"
      pageDescription="List of Sales Data"
      pageName="Dashboard | Sales Data"
    >
      <Box ref={ref} w="full" h="full">
        {isLoading ? (
          <Progress h={500} w="full" colorScheme="cyan" isIndeterminate />
        ) : (
          <RWSalesTable lists={data?.data.data} />
        )}
      </Box>
    </DefaultLayout>
  )
}

export default Home
