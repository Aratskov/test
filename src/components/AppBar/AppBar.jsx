import { Header,StyledLink} from "./AppBar.styled";


const hrefLink = [
  { href: "dashboard", text: "Dashboard" },
  { href: "sales", text: "Sales" },
  { href: "reports", text: "Reports" },
  { href: "feedback", text: "Feedback" },
  { href: "customers", text: "Customers" },
];

const AppBar = () => {
  return (
    <Header>
      {hrefLink.map(({ href, text }) => (
        <StyledLink to={href} key={href}>{text}</StyledLink>
      ))}
    </Header>
  );
};

export default AppBar;
