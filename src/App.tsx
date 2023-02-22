import { useState, useEffect, useMemo } from 'react'
import './App.css'
import { getAllOrders } from './api/order' 
import Table from './components/table'

function App() {
  const [orders, setOrders] = useState([]);
  
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  useEffect(() => {
    OrderData();
  }, []);

  const OrderData = async () => {
    const response = await getAllOrders();

    setOrders(response);
  } 

  const rowData: any = orders;

  return (
    <div style={{ height: 300, width: '100%' }}>
        <h1 style={{textAlign: 'center'}}>Orders Table</h1>
        <Table rowData={rowData} />
    </div>
  )
}

export default App
