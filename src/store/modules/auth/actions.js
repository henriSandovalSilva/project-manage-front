export function doLoginRequest(email, password) {
  return {
    type: '@auth/LOGIN_REQUEST',
    email,
    password,
  };
}

export function doLoginSuccess(user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    user,
  };
}
