import { Link } from "react-router-dom";
import { toggleDisplay } from "../main";


function Nav() {
  return (
    <nav>
      <Link to="/">Todo App</Link>
      <button onClick={ toggleDisplay }>Add Todo</button>
    </nav>
  );
}

export default Nav;
