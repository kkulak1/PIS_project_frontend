
export async function get(address, token) {
  return await makeRequest(address, token, 'GET');
}

export async function put(address, token) {
  return await makeRequest(address, token, 'PUT');
}

export async function post(address, withBody) {
  return await fetch(address, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
    },
    body: withBody
  });
}

export async function makeRequest(address, token, method) {
  return await fetch(address, {
    method: method,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  });
}

export async function makeRequestWithBody(address, token, withBody, method) {
  return await fetch(address, {
    method: method,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: withBody
  });
}

export async function putWithBody(address, token, withBody) {
  return await makeRequestWithBody(address, token, withBody, 'PUT');
}
