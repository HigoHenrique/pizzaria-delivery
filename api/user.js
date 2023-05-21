const baseURL = 'https://pizzaria-delivery-db.vercel.app/usuarios'

export const getUsers = () => {
  return fetch(baseURL)
  .then(res => res.json());
}

export const updateUser = (user) => {
  return fetch(`${baseURL}/user/${user.objectId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });
}

export const createUser = (user) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });
}