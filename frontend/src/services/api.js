const API_BASE = import.meta.env.VITE_API_BASE_URL
  ? `${import.meta.env.VITE_API_BASE_URL}/api`
  : '/api';
 
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
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(formatApiError(errorBody, response.status));
  }

  return response.json();
}

function formatApiError(body, status) {
  const detail = body?.detail;

  if (typeof detail === 'string') {
    return detail;
  }

  if (Array.isArray(detail)) {
    return detail
      .map((err) => {
        const field = Array.isArray(err.loc) ? err.loc[err.loc.length - 1] : '';
        const fieldLabel = field ? `${field} : ` : '';
        return `${fieldLabel}${err.msg}`;
      })
      .join(' · ');
  }

  return `Erreur ${status}`;
}
 
export const api = {
  health: () => fetchApi('/health'),
 
  contact: (data) =>
    fetchApi('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  chat: (messages) =>
    fetchApi('/chat', {
      method: 'POST',
      body: JSON.stringify({ messages }),
    }),
};