export const getStorageObject = (key) => {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return null;
  };

export const setStorageObject = (key, object) => {
    localStorage.setItem(key, JSON.stringify(object));
  };


  export const deleteStorageObject = (key) => {
    localStorage.removeItem(key);
  };

  export const getDarkMode = () => {
    const session = getStorageObject('dark-mode');
    if (session) {
      return session.darkMode;
    }
    return null;    
  };
  export const getIdioma = () => {
    const session = getStorageObject('idioma');
    if (session) {
      return session.idioma;
    }
    return null;    
  };