import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import friendsData from "../friendsData.json";
import transactions from "../transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
