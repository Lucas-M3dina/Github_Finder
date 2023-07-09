type SearchProps = {
  loadUser: (username: string) => Promise<void>;
}

import { BsSearch } from 'react-icons/bs'
import { useState, KeyboardEvent } from "react";
import classes from "./Search.module.css";

function Search({loadUser}: SearchProps) {
  const [username, setUsername] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(username);
    }
  }

  return (
    <div className={classes.search}>
      <h2>Busque por um usúario:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.searchContainer}>
        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Digite o nome do usuário' onKeyDown={handleKeyDown} />
        <button onClick={() => loadUser(username)}> <BsSearch/> </button>
      </div>
    </div>
  )
}

export default Search