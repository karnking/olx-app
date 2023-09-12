import React, { useState } from 'react'
import { Box, Button, FormControl,Textarea, FormLabel, HStack, Heading, Input, Select, useToast } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { postAd } from '../redux/actions'
import AdForm from '../components/AdForm'

const obj_schema = {
    name: '',
    description: '',
    category: '',
    image: '',
    location: '',
    postedAt: '',
    price: 0
}
const PostAd = () => {
    const [obj, setObj] = useState(obj_schema)
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
    const dispatch = useDispatch()
    const handlePost = async () => {
        try {
            dispatch(postAd(obj))
            showAlert("Ad Posted!", "success")
            setObj(obj_schema)
        } catch (error) {
            showAlert("Something went wrong!")
            console.log(error)
        }
    }
    return <Box textAlign='center' w='40%' margin={'auto'}>
        <Heading colorScheme='blue' size={'lg'} m='4'>Post Classified</Heading>
        <AdForm handlePost={handlePost} obj={obj} setObj={setObj}/>
    </Box>
}

export default PostAd