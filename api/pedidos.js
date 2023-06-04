const baseURL = 'https://pizzaria-delivery-db.vercel.app/pedidos'

export const getPedidos = () => {
    return fetch(baseURL)
    .then(res => res.json());
  }
  