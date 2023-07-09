import { UserProps } from "../types/user";
import { useState } from "react";
import Search from "../components/Search";
import User from "../components/User"
import Error from "../components/Error";

export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (username : string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const {avatar_url, login, location, followers, following} = data;

    const userData = {
      avatar_url,
      login,
      location,
      followers,
      following
    };

    setUser(userData);
  }

  return (
    <div>
      <Search loadUser={loadUser}/>
      {user && <p><User {...user}/></p>}
      {error && <Error/>}
    </div>
  )
}

export default Home

