import { http, HttpResponse } from 'msw/http';

const VALID = { mobile: '18768105813', code: '123' };

export const handlers = [
  http.post('/api/authorize', async ({ request }) => {
    const body = await request.json();

    if (body.mobile === VALID.mobile && body.code === VALID.code) {
      return HttpResponse.json({
        code: 200,
        data: {
          token: '1234567890',
        },
      });
    }
    return HttpResponse.json({ code: 400, message: '手机号或验证码错误' }, { status: 401 });
  }),

  http.get('/api/user/profile', async () => {
    return HttpResponse.json({
      code: 200,
      data: {
        id: '7090',
        name: 'raven',
        avatar: 'https://api.dicebear.com/9.x/bottts/png?seed=chaichai&size=200&backgroundColor=b6e3f4',
      },
    });
  }),
];
