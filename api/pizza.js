const baseURL = 'https://pizzaria-delivery-db.vercel.app/pizzas'

export const getPizzas = () => {
    return fetch(baseURL)
    .then(res => res.json());
  }
  