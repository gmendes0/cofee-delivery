import Axios from "axios";

export const stripe = Axios.create({
  baseURL: import.meta.env.VITE_STRIPE_API_URL,
});

stripe.defaults.headers.common.Authorization = `Bearer ${
  import.meta.env.VITE_STRIPE_KEY
}`;
