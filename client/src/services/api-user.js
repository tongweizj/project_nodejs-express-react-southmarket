import { API_BASE_URL, IMAGE_BASE_URL } from '/src/config';
const create = async (user) => {
    try {
        let response = await fetch(`${API_BASE_URL}/api/users/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)``
    }
}

const list = async (signal) => {
    try {
        let response = await fetch(`${IMAGE_BASE_URL}/api/users/`, {
            method: 'GET',
            signal: signal,
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const resetPassword = async (email) => {
    try {
      const response = await fetch("${IMAGE_BASE_URL}/auth/reset-password", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  };
  
  export { resetPassword };
  
  

const read = async (params, credentials, signal) => {
    try {
        let response = await fetch(`${IMAGE_BASE_URL}/api/users/` + params.userId, {
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (params, credentials, user) => {
    try {
        let response = await fetch(`${IMAGE_BASE_URL}/api/users/` + params.userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const remove = async (params, credentials) => {
    try {
        let response = await fetch(`${IMAGE_BASE_URL}/api/users/` + params.userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

export { create, list, read, update, remove }
