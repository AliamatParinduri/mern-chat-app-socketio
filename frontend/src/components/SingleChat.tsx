/* eslint-disable multiline-ternary */
import React from 'react'
import { Box, IconButton, Text } from '@chakra-ui/react'
import { FaArrowLeft } from 'react-icons/fa'
import { ChatState, chatContextType } from '../context/ChatProvider'
import { ProfileModal, UpdateGroupChatModal } from '.'
import { getSender, getSenderFull } from '../config'

const SingleChat = ({ fetchAgain, setFetchAgain }: any) => {
  const { user, selectedChat, setSelectedChat }: chatContextType = ChatState()

  return (
    <>
      {selectedChat ? (
        <React.Fragment>
          <Text
            fontSize={{ base: '28px', md: '30px' }}
            pb="3"
            px="2"
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: 'space-between' }}
            alignItems="center"
          >
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              icon={<FaArrowLeft />}
              onClick={() => setSelectedChat()}
              aria-label=""
            />
            {!selectedChat.isGroupChat ? (
              <>
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderFull(user, selectedChat.users)} />
              </>
            ) : (
              <>
                {selectedChat.chatName.toUpperCase()}
                <UpdateGroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
              </>
            )}
          </Text>
          <Box
            display="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          ></Box>
        </React.Fragment>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </>
  )
}

export default SingleChat
