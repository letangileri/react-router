import { Link, NavLink } from "react-router-dom"

export default function AppHeader(){
    const menu =[
        {
            id: 1,
            link: "/",
            text: "Home"
        },
        {
            id: 2,
            link: "/ChiSiamo",
            text: "chisiamo"
        },
        {
            id: 3,
            link: "/Prodotti",
            text: "prodotti"
        }
    ]
    return(
        <>
        <header>
            Logo
            <nav className={"nav justify-content-center"}>
                {menu.map((item)=>(
                    <NavLink className={"nav-link"} key = {item.id} to={item.link}>
                    {item.text}
                    </NavLink>
                ))}
            </nav>
        </header>
        </>
    )
}