// This utility helps with correctly prefixing asset paths for GitHub Pages deployment

export const getAssetPath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  // Make sure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${basePath}${normalizedPath}`;
}; 