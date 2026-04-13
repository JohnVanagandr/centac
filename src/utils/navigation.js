/**
 * Redirige a una ruta respetando el subdominio o carpeta base (ej. GitHub Pages)
 * @param {string} path - La ruta interna a la que queremos ir (ej. "/auth/login")
 */
export const forceRedirect = (path) => {

  window.location.href = `${path}`;
};