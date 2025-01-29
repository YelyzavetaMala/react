import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";
import MailBox from "./components/MailBox";
import { useState } from "react";

const emailsData = [
  { id: "1", email: "foo@bar.com" },
  { id: "2", email: "alex3423@bar.com" },
  { id: "3", email: "im0982@gmail.com" },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [emails, setEmails] = useState(emailsData);
  const [showMailBox, setShowMailBox] = useState(false);

  const onLogMail = () => {
    console.log("Mail was sent");
    setCounter((prevState) => prevState + 1);
  };
  const handleDelete = (mailId) => {
    console.log("mailId: ", mailId);
    setEmails((prevState) => prevState.filter((email) => email.id !== mailId));
  };

  const handleToggleMailBox = () => {
    setShowMailBox((prevState) => !prevState);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
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
      <button onClick={handleToggleMailBox}>Show MailBox</button>
      {showMailBox ? (
        <MailBox
          emails={emails}
          emailCounter={counter}
          onLogMail={onLogMail}
          onDeleteMail={handleDelete}
        />
      ) : null}
    </>
  );
}

export default App;
