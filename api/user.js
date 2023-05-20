const baseURL = 'https://parseapi.back4app.com/classes/user';

export const getUsers = () => {
  return fetch(baseURL, {
    headers: {
      'X-Parse-Application-Id': 'XlrTSfb8RAZHtEydqOa9B0HlZjmrKbI6RTHz2VvL',
      'X-Parse-REST-API-Key': 'GFSH9rHPuurDCQ5BYMTotl0xdm8EFoT4mAvHNvBA',
    }
  }).then(res => res.json());
}

export const updateUser = (user) => {
  return fetch(`${baseURL}/user/${user.objectId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'XlrTSfb8RAZHtEydqOa9B0HlZjmrKbI6RTHz2VvL',
      'X-Parse-REST-API-Key': 'GFSH9rHPuurDCQ5BYMTotl0xdm8EFoT4mAvHNvBA',
    },
    body: JSON.stringify(user)
  });
}

export const createUser = (user) => {
  return fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'XlrTSfb8RAZHtEydqOa9B0HlZjmrKbI6RTHz2VvL',
      'X-Parse-REST-API-Key': 'GFSH9rHPuurDCQ5BYMTotl0xdm8EFoT4mAvHNvBA',
    },
    body: JSON.stringify(user)
  });
}