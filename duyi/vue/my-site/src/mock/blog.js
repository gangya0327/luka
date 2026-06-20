import Mock from 'mockjs'
import qs from 'querystring'

// 文章分类
Mock.mock('/api/blog/category', 'get', {
  code: '0',
  msg: '请求成功',
  'data|5-10': [
    {
      'id|+1': 1,
      name: '分类@id',
      'articleCount|0-30': 0,
      'order|+1': 1,
    }
  ]
})

// 文章列表
Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url)
  return Mock.mock({
    code: '0',
    msg: '请求成功',
    data: {
      'total|200-500': 0,
      [`rows|${query.limit || 10}`]: [{
        id: '@guid',
        title: '@ctitle(1, 20)',
        description: '@cparagraph',
        category: {
          "id|1-10": 0,
          name: '分类@id'
        },
        'scanNumber|0-500': 10,
        'commentNumber|0-200': 10,
        // thumb: Mock.Random.image('240x160', '#cec', '#9af', 'random-image'),
        'thumb|1': [
          'https://picsum.photos/id/210/240/160',
          'https://picsum.photos/id/211/240/160',
          'https://picsum.photos/id/212/240/160',
          'https://picsum.photos/id/213/240/160',
          'https://picsum.photos/id/214/240/160',
          'https://picsum.photos/id/215/240/160',
          'https://picsum.photos/id/216/240/160',
          'https://picsum.photos/id/217/240/160',
          'https://picsum.photos/id/218/240/160',
          'https://picsum.photos/id/219/240/160',
          'https://picsum.photos/id/220/240/160',
          'https://picsum.photos/id/221/240/160',
          'https://picsum.photos/id/222/240/160',
          'https://picsum.photos/id/223/240/160',
          'https://picsum.photos/id/225/240/160',
          'https://picsum.photos/id/227/240/160',
          'https://picsum.photos/id/228/240/160',
          'https://picsum.photos/id/229/240/160',
          'https://picsum.photos/id/230/240/160',
        ],
        createDate: '@datetime',
      }]
    }
  })
})

// 文章详情
Mock.mock(/^\/api\/blog\/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/, 'get', {
  code: '0',
  msg: '请求成功',
  data: {
    'id': '@guid',
    title: '别再死磕框架了！你的技术路线图该更新了',
    category: {
      'id|1-10': 1,
      name: '分类@id'
    },
    description: '文章指出前端行业在2025年有诸多，框架选择更重生态与角色，开发受AI影响，业务侧重体验与增长。前端核心能力包括吃透Web原生、掌握工程栈、跨端开发等。技术路线可按角色划分，从初中级到高级有不同目标和建议。同时提醒别只追热点框架、忽略业务、敌视AI等，还给出2025年度规划，鼓励更新技术路线，成为打造体验和平台的人。',
    createDate: '@datetime',
    'scanNumber|0-500': 10,
    'commentNumber|0-200': 10,
    toc: [
      {
        name: '先搞清楚：2025 的前端到底在变什么？', anchor: 'heading-1', selected: false, children: [
          { name: '框架红海：从“会用”到“用得值”', anchor: 'heading-2', selected: false },
          { name: '工具有 AI，开发方式也在变', anchor: 'heading-3', selected: false },
          {
            name: '业务侧：前端不再是“画界面”，而是“做体验 + 做增长”', anchor: 'heading-4', selected: false
          },
        ]
      },
      {
        name: '别再死磕框架 API：2025 的前端核心能力长什么样', anchor: 'heading-5', selected: false, children: [
          { name: '基石能力：Web 原生三件套，得真的吃透', anchor: 'heading-6', selected: false },
          { name: '工程能力：从“会用脚手架”到“能看懂和调整工程栈”', anchor: 'heading-7', selected: false },
          { name: '跨端和运行时：不只会“写 Web 页”', anchor: 'heading-8', selected: false },
          { name: '数据和状态：从“会用 Vuex/Redux”到“能设计状态模型”', anchor: 'heading-9', selected: false },
          { name: '性能、稳定性、可观测性：高级前端的硬指标', anchor: 'heading-10', selected: false },
        ]
      },
      {
        name: '路线图别再按“框架学习顺序”排了，按角色来选', anchor: 'heading-12', selected: false, children: [
          { name: '初中级：从“会用”到“能独立负责一个功能”', anchor: 'heading-13', selected: false },
          { name: '进阶：从“功能前端”到“工程前端 + 业务前端”', anchor: 'heading-14', selected: false },
          { name: '高级/资深：从“高级前端”到“前端技术负责人”', anchor: 'heading-15', selected: false },
        ]
      },
    ],
    thumb: Mock.Random.image('240x160', '#cec', '#9af', 'random-image'),
    htmlContent: `<div class="article-viewer markdown-body result"><h2 id="heading-0">先说结论：</h2>
<p>前端不会凉，但“只会几个框架 API”的前端，确实越来越难混<br>
这两年“前端要凉了”“全栈替代前端”的声音此起彼伏，本质是门槛重新洗牌：</p>
<ul>
<li><strong>简单 CRUD、纯样式开发</strong>被低代码、模板代码和 AI 模型快速蚕食；</li>
<li><strong>复杂业务、工程体系、跨端体验、AI 能力集成</strong>，反而需要更强的前端工程师去撑住。</li>
</ul>
<p>如果你对“前端的尽头是跑路转管理”已经开始迷茫，那这篇就是给你看的：<strong>别再死磕框架版本号，该更新的是你的技术路线图。</strong></p>
<hr>
<h2 id="heading-1">一、先搞清楚：2025 的前端到底在变什么？</h2>
<h3 id="heading-2">框架红海：从“会用”到“用得值”</h3>
<p>React、Vue、Svelte、Solid、Qwik、Next、Nuxt……Meta Framework 一大堆，远远超过岗位需求。<br>
<strong>现在企业选型更关注：</strong></p>
<ul>
<li>生态成熟度（如 Next.js 的 SSR/SSG 能力）</li>
<li>框架在应用生命周期中的角色（渲染策略、数据流转、SEO、部署）</li>
</ul>
<p><strong>趋势：</strong></p>
<ul>
<li><strong>框架 Meta 化</strong>（Next.js、Nuxt）将路由、数据获取、缓存策略整体纳入规范；</li>
<li><strong>约定优于配置</strong>，不再是“一个前端库”，而是“一套完整解决方案”。</li>
</ul>
<blockquote>
<p><strong>以前是“你会 Vue/React 就能干活”，现在是“你要理解框架在整个应用中的角色”。</strong></p>
</blockquote>
<hr>
<h3 id="heading-3">工具有 AI，开发方式也在变</h3>
<p>AI 工具（如 Cursor、GitHub Copilot X）可以显著提速，甚至替代重复劳动。<br>
<strong>真正拉开差距的变成了：</strong></p>
<ul>
<li>你能给 AI 写出清晰、可实现的需求描述（Prompt）；</li>
<li>你能判断 AI 生成代码的质量、潜在风险、性能问题；</li>
<li>你能基于生成结果做出合理抽象和重构。</li>
</ul>
<blockquote>
<p><strong>AI 不是来抢饭碗，而是逼你从“码农”进化成“架构和决策的人”。</strong></p>
</blockquote>
<hr>
<h3 id="heading-4">业务侧：前端不再是“画界面”，而是“做体验 + 做增长”</h3>
<ul>
<li><strong>B 端产品</strong>：交互工程师 + 低代码拼装师 + 复杂表单处理专家；</li>
<li><strong>C 端产品</strong>：与产品运营深度捆绑，懂 A/B 测试、埋点、Funnel 分析、广告投放链路；</li>
<li><strong>跨平台</strong>：Web + 小程序 + App（RN/Flutter/WebView）混合形态成为常态。</li>
</ul>
<blockquote>
<p><strong>那些还在喊“切图仔优化 padding”的岗位确实在消失，但对“懂业务、有数据意识、能搭全链路体验”的前端需求更高。</strong></p>
</blockquote>
<hr>
<h2 id="heading-5">二、别再死磕框架 API：2025 的前端核心能力长什么样？</h2>
<h3 id="heading-6">基石能力：Web 原生三件套，得真的吃透</h3>
<p><strong>重点不是“会用”，而是理解底层原理：</strong></p>
<ul>
<li><strong>JS</strong>：事件循环、原型链、Promise 执行模型、ESM 模块化；</li>
<li><strong>浏览器</strong>：渲染流程（DOM/CSSOM/布局/绘制/合成）、HTTP/2/3、安全防护（XSS/CSRF）。</li>
</ul>
<blockquote>
<p><strong>这块扎实了，你在任何框架下都不会慌，也更能看懂“框架为什么这么设计”。</strong></p>
</blockquote>
<hr>
<h3 id="heading-7">工程能力：从“会用脚手架”到“能看懂和调整工程栈”</h3>
<p>Vite、Rspack、Turbopack 等工具让工程构建从“黑魔法”变成“可组合拼装件”。<br>
<strong>你需要：</strong></p>
<ul>
<li>看懂项目的构建配置（Vite/Webpack/Rspack 任意一种）；</li>
<li>理解打包拆分、动态加载、CI/CD 流程；</li>
<li>能排查构建问题（路径解析、依赖冲突）。</li>
</ul>
<blockquote>
<p><strong>如果你在团队里能主动做这些事，别人对你的“级别判断”会明显不一样。</strong></p>
</blockquote>
<hr>
<h3 id="heading-8">跨端和运行时：不只会“写 Web 页”</h3>
<p><strong>2025 年前端视角的关键方向：</strong></p>
<ul>
<li><strong>小程序/多端框架</strong>（Taro、Uni-app）；</li>
<li><strong>混合方案</strong>（RN/Flutter/WebView 通信机制）；</li>
<li><strong>桌面端</strong>（Electron、Tauri）。</li>
</ul>
<p><strong>建议：</strong></p>
<ul>
<li>至少深耕一个“跨端主战场”（如 Web + 小程序 或 Web + Flutter）。</li>
</ul>
<hr>
<h3 id="heading-9">数据和状态：从“会用 Vuex/Redux”到“能设计状态模型”</h3>
<p>现代前端复杂度 70% 在“数据和状态管理”。<br>
<strong>进阶点在于：</strong></p>
<ul>
<li>设计合理的数据模型（本地 UI 状态 vs 服务端真相）；</li>
<li>学会用 Query 库、State Machine 解耦状态与视图。</li>
</ul>
<blockquote>
<p><strong>当你能把“状态设计清楚”，你在复杂业务团队里会非常吃香。</strong></p>
</blockquote>
<hr>
<h3 id="heading-10">性能、稳定性、可观测性：高级前端的硬指标</h3>
<p><strong>你需要系统性回答问题，而不是“瞎猜”：</strong></p>
<ul>
<li><strong>性能优化</strong>：首屏加载（资源拆分、CDN）、运行时优化（减少重排、虚拟列表）；</li>
<li><strong>稳定性</strong>：错误采集、日志上报、灰度发布；</li>
<li><strong>工具</strong>：Lighthouse、Web Vitals、Session Replay。</li>
</ul>
<blockquote>
<p><strong>这块做得好的人往往是技术骨干，且很难被低代码或 AI 直接替代。</strong></p>
</blockquote>
<hr>
<h3 id="heading-11">AI 时代的前端：不是“写 AI”，而是“让 AI 真正跑进产品”</h3>
<p><strong>你需要驾驭：</strong></p>
<ul>
<li><strong>基础能力</strong>：调用 AI 平台 API（流式返回处理、增量渲染）；</li>
<li><strong>产品思维</strong>：哪些场景适合 AI（智能搜索、文档问答）；如何做权限控制、错误兜底。</li>
</ul>
<hr>
<h2 id="heading-12">三、路线图别再按“框架学习顺序”排了，按角色来选</h2>
<h3 id="heading-13">初中级：从“会用”到“能独立负责一个功能”</h3>
<p><strong>目标：</strong></p>
<ul>
<li>独立完成中等复杂度模块（登录、权限、表单、列表分页）。</li>
</ul>
<p><strong>建议路线：</strong></p>
<ul>
<li>夯实 JS + 浏览器基础；</li>
<li>选择 React/Vue + Next/Nuxt 做完整项目；</li>
<li>搭建 eslint + prettier + git hooks 的开发习惯。</li>
</ul>
<hr>
<h3 id="heading-14">进阶：从“功能前端”到“工程前端 + 业务前端”</h3>
<p><strong>目标：</strong></p>
<ul>
<li>优化项目、推进基础设施、给后端/产品提技术方案。</li>
</ul>
<p><strong>建议路线：</strong></p>
<ul>
<li>深入构建工具（Webpack/Vite）；</li>
<li>主导一次性能优化或埋点方案；</li>
<li>引入 AI 能力（如智能搜索、工单回复建议）。</li>
</ul>
<hr>
<h3 id="heading-15">高级/资深：从“高级前端”到“前端技术负责人”</h3>
<p><strong>目标：</strong></p>
<ul>
<li>设计技术体系、推动长期价值。</li>
</ul>
<p><strong>建议路线：</strong></p>
<ul>
<li>明确团队技术栈（框架、状态管理、打包策略）；</li>
<li>主导跨部门项目、建立知识分享机制；</li>
<li>评估 AI/低代码/新框架的引入价值。</li>
</ul>
<hr>
<h2 id="heading-16">四、2025 年不要再犯的几个错误</h2>
<ol>
<li>
<p><strong>只跟着热点学框架，不做项目和抽象</strong></p>
<ul>
<li>选一个主战场 + 一个备胎（React+Next.js，Vue+Nuxt.js），用它们做 2~3 个完整项目。</li>
</ul>
</li>
<li>
<p><strong>完全忽略业务，沉迷写“优雅代码”</strong></p>
<ul>
<li>把重构和业务迭代绑一起，而不是搞“纯技术重构”。</li>
</ul>
</li>
<li>
<p><strong>对 AI 持敌视和逃避态度</strong></p>
<ul>
<li>把重复劳动交给 AI，把时间投到架构设计、业务抽象上。</li>
</ul>
</li>
<li>
<p><strong>把“管理”当成唯一出路</strong></p>
<ul>
<li>做前端架构、性能优化平台、低代码平台的技术专家，薪资和自由度不输管理岗。</li>
</ul>
</li>
</ol>
<hr>
<h2 id="heading-17">五、一个现实点的建议：给自己的 2025 做个“年度规划”</h2>
<p><strong>Q1：</strong></p>
<ul>
<li>选定主技术栈（React+Next 或 Vue+Nuxt）；</li>
<li>做一个完整小项目（登录、权限、列表/详情、SSR、部署）。</li>
</ul>
<p><strong>Q2：</strong></p>
<ul>
<li>深入工程化方向（优化打包体积、搭建监控埋点系统）。</li>
</ul>
<p><strong>Q3：</strong></p>
<ul>
<li>选一个业务场景引入 AI 或配置化能力（如智能搜索、低代码表单）。</li>
</ul>
<p><strong>Q4：</strong></p>
<ul>
<li>输出和沉淀（写 3~5 篇技术文章、踩坑复盘）。</li>
</ul>
<hr>
<h2 id="heading-18">最后：别问前端凉没凉，先问问自己“是不是还停在 2018 年的玩法”</h2>
<ul>
<li>如果你还把“熟练掌握 Vue/React”当成简历亮点，那确实会焦虑；</li>
<li>但如果你能说清楚：
<ul>
<li>在复杂项目里主导过哪些工程优化；</li>
<li>如何把业务抽象成可复用的组件/平台；</li>
<li>如何在产品里融入 AI/多端/数据驱动；<br>
那么，在 2025 年的前端市场，你不仅不会“凉”，反而会成为别人眼中的“稀缺”。</li>
</ul>
</li>
</ul>
<p><strong>别再死磕框架了，更新你的技术路线图，从“写页面的人”变成“打造体验和平台的人”。这才是 2025 年前端真正的进化方向。</strong></p></div>`
  }
})

// 添加评论
Mock.mock('/api/blog/comment', 'post', {
  code: '0',
  msg: '请求成功',
  data: {
    id: '@guid',
    nickname: '@cname',
    content: '@cparagraph(10, 20)',
    createDate: '@datetime',
    'avatar|1': [
      'https://picsum.photos/id/110/300/240',
      'https://picsum.photos/id/111/300/240',
      'https://picsum.photos/id/112/300/240',
      'https://picsum.photos/id/113/300/240',
      'https://picsum.photos/id/114/300/240',
      'https://picsum.photos/id/115/300/240',
      'https://picsum.photos/id/116/300/240',
      'https://picsum.photos/id/117/300/240',
      'https://picsum.photos/id/118/300/240',
      'https://picsum.photos/id/119/300/240',
    ]
  }
})

// 评论列表
Mock.mock(/\/api\/blog\/comment\/?(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url)
  return Mock.mock({
    code: '0',
    msg: '请求成功',
    data: {
      'total|200-500': 0,
      [`rows|${query.limit || 10}`]: [{
        id: '@guid',
        nickname: '@cname',
        content: '@cparagraph(2, 10)',
        createDate: '@datetime',
        'avatar|1': [
          'https://picsum.photos/id/110/300/240',
          'https://picsum.photos/id/111/300/240',
          'https://picsum.photos/id/112/300/240',
          'https://picsum.photos/id/113/300/240',
          'https://picsum.photos/id/114/300/240',
          'https://picsum.photos/id/115/300/240',
          'https://picsum.photos/id/116/300/240',
          'https://picsum.photos/id/117/300/240',
          'https://picsum.photos/id/118/300/240',
          'https://picsum.photos/id/119/300/240',
        ],
      }]
    }
  })
})