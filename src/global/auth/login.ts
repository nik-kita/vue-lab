import JsCookie from 'js-cookie';
import { query } from "../query";


export async function login(body: {
  email: string,
  password: string,
}) {
  try {
    const res = await query(`/auth/login`, {
      method: 'post',
      body,
      with_credentials: false,
    });

    if (!res.access_token || !res.refresh_token) {
      console.error('Invalid response during login');
      return;
    }

    JsCookie.set('access', res.access_token);
    JsCookie.set('refresh', res.refresh_token);
    return;
  } catch (err) {
    console.error(err);
  }
}
