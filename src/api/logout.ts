export const logout = async () => {
  window.localStorage.removeItem('auth');
};
