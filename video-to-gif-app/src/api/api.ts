import { RcFile } from "antd/es/upload";

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

  const signupResponse = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const signupResponseJson = await signupResponse?.json();
  return signupResponseJson;
}

export const uploadVideo = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const uploadResponse = await fetch(`${process.env.REACT_APP_API_BASE_URL}/video-to-gif`, {
    method: 'POST',
    body: formData,
    headers: {
      'userid': localStorage.getItem('user_id') || ""
    }
  });

  const uploadResponseJson = await uploadResponse?.json();
  return uploadResponseJson;
}