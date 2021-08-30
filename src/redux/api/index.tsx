export const apiCall = (method: string, url: string) =>
  fetch(url, { method }).then(response => response.json());
