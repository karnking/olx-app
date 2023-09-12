import React, { useEffect, useState } from 'react'
import { Box, Input,Flex, Button, Card, HStack,Select, Heading, useToast, CardBody, VStack, Text, Image, Stack, Divider, CardFooter, ButtonGroup, Grid, SimpleGrid } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAds } from '../redux/actions'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
// import {EditIcon,CloseIcon} from '@chakra-ui/icons'
const objSchema = {
    name:'',
    sort:'',
    category:''
}
const Browse = () => {
    const dispatch = useDispatch()
    const ads = useSelector(store=>store.ads)
    const [obj,setObj] = useState(objSchema) 
    const toast = useToast()
    const id = 'test-toast'
    const showAlert = (text = 'Error', status = 'error') => {
        if (!toast.isActive(id)) {
            toast({
                id,
                title: text,
                status: status
            })
        }
    }
    const capitalise = (str) =>{
        return str[0].toUpperCase()+str.substring(1).toLowerCase()
    }
    useEffect(()=>{
        dispatch(getAds(obj))
    },[obj])
    return (
        <Box textAlign={'center'} px='5%'>
            <Heading m='3' >Browse Classifieds</Heading>
            <Flex m='3' gap='5'>
            <Select value={obj.category} onChange={(e)=>setObj({...obj,category:e.target.value})}>
                <option value=''>--filter by category--</option>
                <option value='clothing'>Clothing</option>
                <option value='electronics'>Electronics</option>
                <option value='furniture'>Clothing</option>
                <option value='other'>Other</option>
            </Select>
            <Input value={obj.name} placeholder='Search by name' onChange={(e)=>setObj({...obj,name:e.target.value})} />
            <Select value={obj.sort} onChange={(e)=>setObj({...obj,sort:e.target.value})}>
                <option value=''>--sort by date--</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </Select>
            </Flex>
            <SimpleGrid columns={3} spacing={10}>
            {ads?.map((ad,idx)=>{
                return <Card maxW='xs' key={idx}>
                <CardBody textAlign={'left'}>
                  <Image
                    h='200px'
                    w='100%'
                    src={ad.image}
                    alt={ad.name}
                  />
                  <Stack mt='6' spacing='2'>
                    <Heading size='md'>{ad.name}</Heading>
                    <Text fontSize={'sm'}>{capitalise(ad.category)}</Text>
                    <Text fontSize={'sm'}>{ad.description}</Text>
                    <Text fontSize={'sm'}>{capitalise(ad.location)}</Text>
                    <Text fontWeight={'bold'} fontSize='lg' bottom={'0'}>
                      Rs. {ad.price}/-
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='purple' size={'sm'}>
                      Buy now
                    </Button>
                    <Button variant='solid' colorScheme='purple' size={'sm'}>
                        <EditIcon />
                    </Button>
                    <Button variant='solid' colorScheme='purple' size={'sm'}>
                        <DeleteIcon />
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            })}
            </SimpleGrid>
        </Box>
    )
}

export default Browse