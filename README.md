# 🌟 Life Track Web

Life Track 是一个全方位的生活追踪系统，旨在帮助用户更好地管理和记录生活的方方面面。从备忘录到习惯养成，从任务管理到知识收集，Life Track 提供了一站式的解决方案。

## 🎯 项目愿景

我们相信，一个好的生活管理工具应该是：
- 🎨 简洁而不简单
- 🔄 高效且易用
- 📱 随时随地可访问
- 🤝 注重用户体验

## ✨ 核心特性

- 📝 **智能备忘录**
  - 支持分组管理
  - 图文混排
  - 多附件支持
  - 快速检索

- ✅ **任务追踪** (开发中)
  - 待办事项管理
  - 任务优先级
  - 截止日期提醒
  - 进度统计

- 📚 **知识管理** (开发中)
  - 文章收藏
  - 知识整理
  - 标签分类
  - 全文检索

- ⏰ **习惯养成** (开发中)
  - 习惯追踪
  - 数据统计
  - 目标设定
  - 进度可视化

- 📥 **信息收集** (开发中)
  - 快速收集
  - 自动分类
  - 智能推荐
  - 定期回顾

## 🛠️ 安装与运行

1. 克隆项目
```bash
git clone [repository-url]
cd life_track_web
```

2. 安装依赖
```bash
npm install
# 或
yarn install
# 或
pnpm install
```

3. 配置环境变量
```bash
cp .env.template .env.local
```
编辑 `.env.local` 文件，设置必要的环境变量。

4. 运行开发服务器
```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

访问 http://localhost:5173 查看应用。

## ⚙️ 环境变量

- `NEXT_PUBLIC_API_URL`: 后端 API 地址（默认：http://localhost:3000/api）

## 📝 API 调用示例

```typescript
// 获取所有备忘录分组
const response = await groupApi.getAll();
if (response.status) {
  const groups = response.data;
  // 处理数据
}

// 创建新分组
const createResponse = await groupApi.create({
  name: "新分组",
  description: "分组描述"
});
```

## 🧩 组件使用示例

```typescript
// 创建分组对话框
<GroupNewInput
  isOpen={isNewGroupModalOpen}
  onClose={() => setIsNewGroupModalOpen(false)}
  onSuccess={fetchGroups}
/>

// 更新分组对话框
<GroupUpdateInput
  isOpen={isUpdateGroupModalOpen}
  onClose={() => setIsUpdateGroupModalOpen(false)}
  onSuccess={fetchGroups}
  group={selectedGroup}
/>
```

## 📚 开发规范

1. 🎯 组件规范
   - 使用函数组件和 Hooks
   - 组件文件使用 PascalCase 命名
   - 组件属性使用 TypeScript 接口定义

2. 🌐 API 调用规范
   - 使用统一的 API 调用工具
   - 请求和响应类型定义
   - 统一的错误处理

3. 🎨 样式规范
   - 使用 TailwindCSS 类名
   - 遵循移动优先原则
   - 使用 DaisyUI 组件

## 🤝 贡献指南

1. Fork 项目 🍴
2. 创建特性分支 🌿
3. 提交改动 📝
4. 推送到分支 🚀
5. 创建 Pull Request 🎯

## 📄 许可证

MIT