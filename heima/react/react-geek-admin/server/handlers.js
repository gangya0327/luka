import { http, HttpResponse } from 'msw/http';

const VALID = { mobile: '18768105813', code: '123' };
const ISSUED_KEY = 'msw_issued_token';

const ARTICLE_KEY = 'msw_articles';

const readArticles = () => JSON.parse(sessionStorage.getItem(ARTICLE_KEY) ?? '[]');
const writeArticles = (list) => sessionStorage.setItem(ARTICLE_KEY, JSON.stringify(list));

function randomToken() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

// 添加认证
const withAuth = (resolver) => (info) => {
  const issued = sessionStorage.getItem(ISSUED_KEY);
  const auth = info.request.headers.get('Authorization');

  if (!issued || auth !== `Bearer ${issued}`) {
    return HttpResponse.json({ message: '登录已过期' }, { status: 401 });
  }
  return resolver(info);
};

export const handlers = [
  http.post('/api/authorize', async ({ request }) => {
    const body = await request.json();

    if (body.mobile === VALID.mobile && body.code === VALID.code) {
      const token = randomToken();
      sessionStorage.setItem(ISSUED_KEY, token); // ← 记住这次签发了什么
      return HttpResponse.json({ data: { token } });
    }
    return HttpResponse.json({ message: '手机号或验证码错误' }, { status: 400 });
  }),

  http.get(
    '/api/user/profile',
    withAuth(() =>
      HttpResponse.json({
        data: {
          id: '7090',
          name: 'raven',
          avatar: 'https://api.dicebear.com/9.x/bottts/png?seed=chaichai&size=200&backgroundColor=b6e3f4',
        },
      }),
    ),
  ),

  http.get(
    '/api/channels',
    withAuth(() =>
      HttpResponse.json({
        data: [
          { id: 0, name: '推荐' },
          { id: 1, name: '前端' },
          { id: 2, name: '后端' },
          { id: 3, name: 'AI' },
        ],
      }),
    ),
  ),

  http.post(
    '/api/articles',
    withAuth(async ({ request }) => {
      const body = await request.json();

      if (!body.title?.trim()) {
        return HttpResponse.json({ message: '标题不能为空' }, { status: 400 });
      }

      const article = {
        id: randomToken().slice(0, 8),
        title: body.title,
        content: body.content ?? '',
        channel_id: body.channel_id,
        cover: [],
        status: 1, // 1 待审核 / 2 通过 / 3 失败
        pubdate: new Date().toISOString(),
        author: 'raven',
      };

      writeArticles([article, ...readArticles()]);
      return HttpResponse.json({ data: article }, { status: 201 });
    }),
  ),
];
