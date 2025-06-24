export const login = (token) => ({
  type: 'SET_TOKEN',
  payload: token
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user
});
