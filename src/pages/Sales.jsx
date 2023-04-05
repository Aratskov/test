import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./Sales.styled";

const hrefLink = [
    { href: "analytics", text: "Analytics" },
    { href: "invoices", text: "Invoices" },
    { href: "deposits", text: "Deposits" },
  ];

const Sales = () => {
return(
    <div>
        <Container>
            {hrefLink.map(({href,text})=>
            <NavLink to = {href} key={href} style={{display:"block"}}>{text}</NavLink>
            )}
        </Container>
        <Outlet/>
    </div>
    )

}

export default Sales;