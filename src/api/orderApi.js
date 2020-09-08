import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/orders/";

export function getOrders() {
    return fetch(baseUrl)
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function saveOrder(order) {
    return fetch(baseUrl + (order.id || ""), {
      method: order.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order)
    })
      .then(handleResponse)
      .catch(handleError);
  }
  
  export function deleteOrder(orderId) {
    return fetch(baseUrl + orderId, { method: "DELETE" })
      .then(handleResponse)
      .catch(handleError);
  }