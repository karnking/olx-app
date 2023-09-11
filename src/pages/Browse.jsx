import React, { useEffect, useState } from 'react'
import { Box, Input,Flex, Button, Card, HStack,Select, Heading, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAds } from '../redux/actions'

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
    useEffect(()=>{
        dispatch(getAds(obj))
    },[obj])
    return (
        <Box textAlign={'center'}>
            <Heading>Browse Classifieds</Heading>
            <Flex m='2'>
            <Select value={obj.category} onChange={(e)=>setObj({...obj,category:e.target.value})}>
                <option value=''>--filter by category--</option>
                <option value='clothing'>Clothing</option>
                <option value='electronics'>Electronics</option>
                <option value='furniture'>Clothing</option>
                <option value='other'>Other</option>
            </Select>
            <Select value={obj.sort} onChange={(e)=>setObj({...obj,sort:e.target.value})}>
                <option value=''>--sort by date--</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </Select>
            <Input value={obj.name} onChange={(e)=>setObj({...obj,name:e.target.value})} />
            </Flex>
            {ads?.map(ad=>{
            //     <Card>
            //     <CardBody>
            //         <Flex justify={'space-between'} px='5'>
            //             <VStack textAlign={'left'}>
            //                 <Heading fontSize={'18'}>{category}</Heading>
            //                 <Text textAlign={'left'} fontSize={'13'}>{new Date(date).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short', year:'numeric`' })}</Text>
            //                 <Text textAlign={'left'} fontSize={'13'}>{type.toUpperCase()}</Text>
            //             </VStack>
            //             <VStack>
            //                 <Text textAlign={'left'} fontSize={'13'} color={type === 'Income' ? 'green' : 'red'}>{type === 'Income' ? `+${amount}` : `-${amount}`}</Text>
            //                 <HStack>
            //                     <EditIcon onClick={() => handleEdit(track, i)} boxSize='15px' />
            //                     <CloseIcon onClick={() => handleDelete(i)} boxSize='15px' />
            //                 </HStack>
            //             </VStack>
            //         </Flex>
            //     </CardBody>
            // </Card>
            })}
        </Box>
    )
}

export default Browse