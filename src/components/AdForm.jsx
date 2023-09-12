import { Box, Button, FormControl, FormLabel, HStack, Input, Select, Textarea, useToast } from '@chakra-ui/react'
import React from 'react'

const AdForm = ({handlePost,obj,setObj,btn}) => {
    const validation = () => {
        const { name, description, category, image, location, postedAt, price } = obj;
        if (name === '' || description === '' || location === '' || image === '' || postedAt==='' || price==='') {
            showAlert("Fill all the fields")
            return;
        }
        if (name.length < 2) {
            showAlert("Product Name should be atleast 2 characters long")
            return;
        }
        if (category === '') {
            showAlert("Select product category")
            return;
        }
        handlePost()
    }
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
    return (
        <Box margin='auto' p='2em' border={'1px solid black'}>
            <FormControl>
                <HStack>
                    <FormLabel w='50%'>Product Name</FormLabel>
                    <Input size={'xs'} required type='text' name='name' value={obj.name} onChange={(e) => setObj({ ...obj, name: e.target.value })} />
                </HStack>
            </FormControl>
            <FormControl>
                <HStack>
                    <FormLabel w='50%'>Description</FormLabel>
                    <Textarea size={'xs'} required type='text' name='description' value={obj.description} onChange={(e) => setObj({ ...obj, description: e.target.value })} />
                </HStack>
            </FormControl>
            <FormControl>
                <HStack>
                    <FormLabel w='50%'>Category</FormLabel>
                    <Select size={'xs'} name='category' value={obj.category} onChange={(e) => setObj({ ...obj, category: e.target.value })}>
                        <option value=''>--select-category--</option>
                        <option value='clothing'>Clothing</option>
                        <option value='electronics'>Electronics</option>
                        <option value='furniture'>Furniture</option>
                        <option value='other'>Other</option>
                    </Select>
                </HStack>
            </FormControl>
            <FormControl>
                <HStack>
                    <FormLabel w='50%'>Image URL</FormLabel>
                    <Input size={'xs'} required name='image' type='text' value={obj.image} onChange={(e) => setObj({ ...obj, image: e.target.value })} />
                </HStack>
            </FormControl>
            <FormControl>
                <HStack>
                    <FormLabel w='50%'>Location</FormLabel>
                    <Input size={'xs'} required name='location' type='text' value={obj.location} onChange={(e) => setObj({ ...obj, location: e.target.value })} />
                </HStack>
            </FormControl>
            <FormControl>
                <HStack>
                    <FormLabel w='51%'>Posted At</FormLabel>
                    <Input size={'xs'} required name='postedAt' type='date' value={obj.postedAt} onChange={(e) => setObj({ ...obj, postedAt: e.target.value })} />
                </HStack>
            </FormControl>
            <FormControl>
                <HStack>
                    <FormLabel w='50%'>Offering Price</FormLabel>
                    <Input size={'xs'} required name='price' type='text' value={obj.price} onChange={(e) => setObj({ ...obj, price: e.target.value })} />
                </HStack>
            </FormControl>
            <FormControl>
                <Button mt='3' w='100%' onClick={validation} colorScheme='purple'>{btn?btn:"Create Classfied"}</Button>
            </FormControl>
        </Box>
    )
}

export default AdForm