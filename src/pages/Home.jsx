import { NavLink } from "react-router-dom";

function Home() {
    return (
    <>
        <h1>Üdvözöljük!</h1>
        <NavLink to="/halak">Tovább a halakhoz!</NavLink>
      </>
    )
}

export default Home;