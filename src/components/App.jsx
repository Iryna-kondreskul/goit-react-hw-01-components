import user from "../user.json"


import { Profile } from "components/profile/profile" 

export const App = () => {
  return (<><Profile 
    username={user.username} 
    tag={user.tag} 
    location={user.location} 
    avatar={user.avatar} 
    stats={user.stats}/>
    {/* <Statistics data={data}/>
    <Friends friends={friends}/>
    <Transactions list={transactions}/> */}
    </>
  );
};