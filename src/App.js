import "./App.css";
import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import { Box } from "components/Box/Box";
import { theme } from "constants/theme";

const { avatar, username, tag, location, stats } = user;

export default function App() {
  return (
    <div className="App">
      <Box
        bg={theme.colors.white}
        p={theme.space[4]}
        width={500}
        mr="auto"
        ml="auto"
        as="section"
      >
        <Profile
          avatar={avatar}
          username={username}
          tag={tag}
          location={location}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </Box>
      <Box
        bg={theme.colors.white}
        p={theme.space[4]}
        width={700}
        mt="20px"
        mr="auto"
        ml="auto"
        as="section"
      >
        <Statistics title="Upload stats" stats={data} />
      </Box>
      <Box
        bg={theme.colors.white}
        p={theme.space[4]}
        width={360}
        mt="20px"
        mr="auto"
        ml="auto"
        as="section"
      >
        <FriendList friends={friends} />
      </Box>
      <Box
        bg={theme.colors.white}
        p={theme.space[4]}
        width={660}
        mt="20px"
        mr="auto"
        ml="auto"
        as="section"
      >
        <TransactionHistory items={transactions} />
      </Box>
    </div>
  );
}
