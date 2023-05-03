/* eslint-disable react/prop-types */
/* eslint-disable multiline-ternary */
import { FaEye } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/button'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Text
} from '@chakra-ui/react'

const ProfileModal = ({ user, children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton display={{ base: 'flex' }} icon={<FaEye />} onClick={onOpen} aria-label={''} />
      )}

      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader fontSize="40px" fontFamily="Work sans" display="flex" justifyContent="center">
            {user.data.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDir="column" alignItems="center" justifyContent="space-between">
            <Image borderRadius="full" boxSize="150px" src={user.data.pic} alt={user.data.name} />
            <Text fontSize={{ base: '28px', md: '30px' }} fontFamily="Work sans">
              Email: {user.data.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default ProfileModal
