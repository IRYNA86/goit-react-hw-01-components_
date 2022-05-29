import Profile from './Profile/Profile';
import profileUser from '../components/Profile/profileUser.json';

import Statistics from './Statistics/Statistics';
import data from '../components/Statistics/data.json';

import FriendList from './Friends/FriendList';
import friends from '../components/Friends/friends.json';

import TransactionHistory from './Transaction/TransactionHistory';
import transactions from '../components/Transaction/transations.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={profileUser.username}
        tag={profileUser.tag}
        location={profileUser.location}
        avatar={profileUser.avatar}
        stats={profileUser.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
