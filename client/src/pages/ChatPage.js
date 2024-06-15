import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ChatState } from "../context/ChatProvider";
import SideDrawer from "../components/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { ToastContainer } from "react-toastify";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ height: "100vh" }} className="chatContainer">
      {user && <SideDrawer />}
      <Flex d="flex" justifyContent="space-between" w="100%" h="auto" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Flex>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default ChatPage;