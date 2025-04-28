import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

export const createOrder = (orderData, token) =>
  axios.post(`${API}/api/orders`, orderData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getUserOrders = (token) =>
  axios.get(`${API}/api/orders/my`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getOrder = async (orderId) => {
  if (!orderId) {
    throw new Error("Order ID is required");
  }
  try {
    const response = await axios.get(`${API_BASE_URL}/api/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const cancelOrder = (id, token) =>
  axios.patch(
    `${API}/api/orders/${id}/cancel`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

// Admin only
export const getAllOrders = (token) =>
  axios.get(`${API}/api/orders/admin/all`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateOrderStatus = (id, status, token) =>
  axios.patch(
    `${API}/api/orders/admin/${id}/status`,
    { status },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

export const updatePaymentStatus = (id, paymentStatus, token) =>
  axios.patch(
    `${API}/api/orders/admin/${id}/payment`,
    { paymentStatus },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
