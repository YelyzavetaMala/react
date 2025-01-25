import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";
import MailBox from "./components/MailBox";

function App() {
  const onLogMail = () => {
    console.log("Mail was sent");
  };
  const handleDelete = (mailId) => {
    console.log("mailId: ", mailId);
  };
  return (
    <>
      <div className="css.cardGrid">
        {userData.map((user, id) => (
          <Profile
            key={id}
            name={user.username}
            tag={user.tag}
            location={user.location}
            image={user.avatar}
            stats={user.stats}
          />
        ))}
      </div>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <MailBox onLogMail={onLogMail} onDeleteMail={handleDelete} />
    </>
  );
}

export default App;
