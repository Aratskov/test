import { useParams } from "react-router-dom";
import { getInvoiceById } from "../FAKE_API/FakeApi";
import { useEffect, useState } from "react";

const InvoicesDetail = () => {
  const [local, setLocal] = useState(null);
  const { invoiceId } = useParams();

  useEffect(() => {
    getInvoiceById(invoiceId).then(setLocal);
  }, [invoiceId]);

 
  if (!local) return;

  const { id, name, order_number,data} = local;

  return <div>
  <p>ID: {id}</p>
  <p>Name: {name}</p>
  <p>Order: {order_number}</p>
  {/* Преобразовіваем датц с джсон в строку */}
  <p>Date: {new Date(data).toLocaleString()}</p>
  </div>;
};

export default InvoicesDetail;
