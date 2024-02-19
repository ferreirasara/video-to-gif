export const login = async (args: { username: string, password: string }) => {
  const { password, username } = args;
  const body = { username, password }

  const loginResponse = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const loginResponseJson = await loginResponse?.json();
  return loginResponseJson;
}

export const signup = async (args: { username: string, email: string, password: string }) => {
  const { password, email, username } = args;
  const body = { username, email, password }

  const signupResponse = await fetch(`${process.env.REACT_APP_API_BASE_URL}/user`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const signupResponseJson = await signupResponse?.json();
  return signupResponseJson;
}