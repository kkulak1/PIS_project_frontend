
export async function get(address, token) {
  return await makeRequest(address, token, 'GET');
}