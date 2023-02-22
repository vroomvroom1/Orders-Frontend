
let apiUrl = 'https://order-api-12872.azurewebsites.net/api/v1/orders/';

export const getAllOrders = async () => {
    let headers = new Headers();

    let url = apiUrl + 'all'

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    
    
    const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: headers
  })
    const data = await response.json();

    return data;
};

export const CreateOrder = async (order = {}) => {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  
  
  const response = await fetch(apiUrl, {
  method: 'POST',
  mode: 'cors',
  headers: headers,
  body: JSON.stringify(order)
})
  const data = await response.json();

  return data;
};

export const DeleteOrder = async (id = "") => {
  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  let url = 'https://order-api-12872.azurewebsites.net/api/v1/orders/' + id;
  
  const response = await fetch(url, {
  method: 'DELETE',
  mode: 'cors',
  headers: headers
})
  const data = await response.json();

  return data;
};
