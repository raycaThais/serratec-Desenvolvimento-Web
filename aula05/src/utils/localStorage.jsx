export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};