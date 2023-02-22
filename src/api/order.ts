import { useQueryClient, useQuery } from "@tanstack/react-query";

export const getAllOrders = async () => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://127.0.0.1:5173');

    const res = await fetch('https://order-api-12872.azurewebsites.net/api/v1/orders/all', {
        method: 'GET',
        headers: headers
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result);
        })
        .catch((error) => {
          console.error('Error:', error);
        }); 


        console.log(res);
};
