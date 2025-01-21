import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";

function App() {
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
    </>
  );
}

export default App;
