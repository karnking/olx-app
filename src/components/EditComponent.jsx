import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import AdForm from './AdForm'
import { useDispatch } from 'react-redux'
import { updateAd } from '../redux/actions'

const EditComponent = ({finalRef,showAlert,isOpen,onClose,obj,setObj}) => {
  const dispatch = useDispatch()  
  const handlePost = () =>{
      dispatch(updateAd(obj))
      showAlert("Ad updated Sucessfully","success")
      onClose()
    }
    return (
      <>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Classified</ModalHeader>
            <ModalCloseButton />
            <ModalBody mb='2'>
                <AdForm handlePost={handlePost} btn={'Update Ad'} obj={obj} setObj={setObj}/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default EditComponent