import { API_HOST } from "./const";
import JsCookie from 'js-cookie';

export const query = async (endpoint: string, options: Partial<{
  method: string,
  body: object,
  with_credentials: boolean,
}> = {}) => {
  const {
    method = 'get',
    body = {},
    with_credentials = true,
  } = options;
  const res = await fetch(`${API_HOST}/${endpoint}`, {
    method,
    body: JSON.stringify(body),
    ...(with_credentials && {
      authorization: `Bearer ${JsCookie.get('access')}`,
    }),
  }).then((res) => res.json())
    .catch((err) => {
      console.error('Runtime error: ', err);
    });

  return res;
}
