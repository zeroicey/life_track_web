import { IoMdBook, IoMdCheckbox, IoMdList, IoMdTime, IoMdBookmarks } from "react-icons/io";
import Link from "next/link";

const features = [
  {
    icon: <IoMdBook className="w-6 h-6" />,
    title: "Memo",
    description: "记录生活中的点点滴滴，支持图片附件",
    link: "/memo",
    color: "bg-blue-500",
  },
  {
    icon: <IoMdCheckbox className="w-6 h-6" />,
    title: "Task",
    description: "管理你的任务清单，提高工作效率",
    link: "/task",
    color: "bg-green-500",
  },
  {
    icon: <IoMdList className="w-6 h-6" />,
    title: "Article",
    description: "撰写和管理你的文章，记录知识积累",
    link: "/article",
    color: "bg-purple-500",
  },
  {
    icon: <IoMdTime className="w-6 h-6" />,
    title: "Habit",
    description: "培养良好习惯，追踪你的进步",
    link: "/habit",
    color: "bg-orange-500",
  },
  {
    icon: <IoMdBookmarks className="w-6 h-6" />,
    title: "Collect",
    description: "收藏有价值的内容，建立知识库",
    link: "/collect",
    color: "bg-pink-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Life Track</h1>
            <p className="py-6">
              一个帮助你管理生活的多功能工具，让生活更有条理，更有意义。
            </p>
            <Link href="/memo" className="btn btn-primary">
              开始使用
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                href={feature.link}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="card-body">
                  <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                    {feature.icon}
                  </div>
                  <h2 className="card-title">{feature.title}</h2>
                  <p className="text-base-content/70">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="stats shadow w-full">
            <div className="stat place-items-center">
              <div className="stat-title">备忘录</div>
              <div className="stat-value">100+</div>
              <div className="stat-desc">已创建的备忘录</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">任务</div>
              <div className="stat-value text-success">85%</div>
              <div className="stat-desc">任务完成率</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">文章</div>
              <div className="stat-value">50+</div>
              <div className="stat-desc">已发布的文章</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">习惯</div>
              <div className="stat-value text-secondary">90%</div>
              <div className="stat-desc">习惯坚持率</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">收藏</div>
              <div className="stat-value text-primary">200+</div>
              <div className="stat-desc">已收藏的内容</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div>
          <p className="font-bold">
            Life Track <br/>
            让生活更有序，让时间更有价值
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
}
