import { ref } from 'vue';
import { API_HOST } from './const';
import JsCookie from 'js-cookie';

export const store = ref(new Map([
  ['session', undefined],
]));

export async function login(payload: {
  email: string,
  password: string,
}) {
  try {
    const res = await fetch(`${API_HOST}/auth/login`, {
      method: 'post',
      body: JSON.stringify(payload),
    }).then((res) => res.json()).catch((err) => {
      console.error('Runtime error: ', err);
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
