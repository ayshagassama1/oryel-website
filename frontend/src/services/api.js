/**
 * Client API centralisé.
 *
 * Toutes les requêtes vers le backend passent par ici.
 * En dev, Vite proxy /api vers localhost:8000 (voir vite.config.js).
 * En prod, on remplacera API_BASE par l'URL réelle.
 */

const API_BASE = "/api";

export async function fetchApi(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
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
  health: () => fetchApi("/health"),
  // Les prochains endpoints seront ajoutés ici :
  // contact: (data) => fetchApi("/contact", { method: "POST", body: JSON.stringify(data) }),
  // services: () => fetchApi("/services"),
  // chat: (message) => fetchApi("/chat", { method: "POST", body: JSON.stringify({ content: message }) }),
};
