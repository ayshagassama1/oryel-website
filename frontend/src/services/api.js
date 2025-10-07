const API_BASE = '/api';
 
async function fetchApi(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
 
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
 
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || `Erreur ${response.status}`);
  }
 
  return response.json();
}
 
export const api = {
  health: () => fetchApi('/health'),
 
  contact: (data) =>
    fetchApi('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};
