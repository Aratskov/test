import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Sales from './pages/Sales';
import Invoices from './components/Invoices/Invoices';
import InvoicesDetail from './components/InvoicesDetail/InvoicesDetail';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path="dashboard" element={<div>Dashboard</div>}/>
      <Route path="sales" element={<Sales/>}>
      <Route path="analytics" element={<div>Analytics</div>}/>
      <Route path="invoices" element={<Invoices/>}>
      <Route path=":invoiceId" element = {<InvoicesDetail/>}/>
      </Route>
      <Route path="deposits" element={<div>Deposits</div>}/>
      </Route>
      <Route path="reports" element={<div>Reports</div>}/>
      <Route path="feedback" element={<div>Feedback</div>}/>
      <Route path="customers" element={<div>Customers</div>}/>
      </Route>
    </Routes>
  );
}

export default App;
