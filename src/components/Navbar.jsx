import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex p='4' justify={'space-around'} color={'white'} fontSize={'lg'} bg={'purple.500'} fontWeight={'bold'}>
        <Link to='/'>Home</Link>
        <Link to='/postAd'>Post Ad</Link>
        <Link to='/browse'>Browse Ads</Link>
    </Flex>
  )
}

export default Navbar