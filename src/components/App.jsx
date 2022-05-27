import Profile from "./Profile/Profile";
import profileUser from '../components/Profile/profileUser.json'

export const App = () => {
  return (
    <div
      style={{
        // weigth: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
        color: '#010101'
      }}
    >
      <Profile
  username={profileUser.username}
  tag={profileUser.tag}
  location={profileUser.location}
  avatar={profileUser.avatar}
  stats={profileUser.stats}
/>
    </div>
  );
};
