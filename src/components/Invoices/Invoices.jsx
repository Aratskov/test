import { useState } from "react";
import { getOrders } from "../FAKE_API/FakeApi";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Wrap } from "./Invoices.styled";
import { StyledLink } from "../AppBar/AppBar.styled";

const Invoices = () => {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    getOrders().then(setInvoice);
  }, []);

  return (
    <Wrap>
      <Container>
        {invoice.map(({ order_number }) => (
          <StyledLink to={`${order_number}`} key={order_number}>
            {order_number}
          </StyledLink>
        ))}
      </Container>
      <Outlet />
    </Wrap>
  );
};

export default Invoices;
