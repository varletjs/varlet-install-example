const createLocalStorage = () => {
  const fun = () => {}
  if (!process.client) {
    return {
      set: fun,
      get: fun,
      remove: fun,
      removeAll: fun,
    }
  }
  return {
    set: (key, value) => localStorage.setItem(key, value),
    get: (key) => localStorage.getItem(key),
    remove: (key) => localStorage.removeItem(key),
    removeAll: () => localStorage.clear(),
  }
}

export const $localStorage = createLocalStorage()

