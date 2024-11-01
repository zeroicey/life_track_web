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
    color: "bg-emerald-500",
  },
  {
    icon: <IoMdList className="w-6 h-6" />,
    title: "Article",
    description: "撰写和管理你的文章，记录知识积累",
    link: "/article",
    color: "bg-violet-500",
  },
  {
    icon: <IoMdTime className="w-6 h-6" />,
    title: "Habit",
    description: "培养良好习惯，追踪你的进步",
    link: "/habit",
    color: "bg-amber-500",
  },
  {
    icon: <IoMdBookmarks className="w-6 h-6" />,
    title: "Collect",
    description: "收藏有价值的内容，建立知识库",
    link: "/collect",
    color: "bg-rose-500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-b from-primary/10 to-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-base-content">Life Track</h1>
            <p className="py-6 text-base-content/80">
              一个帮助你管理生活的多功能工具，让生活更有条理，更有意义。
            </p>
            <Link 
              href="/memo" 
              className="btn btn-primary text-primary-content hover:brightness-110 transition-all"
            >
              开始使用
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-base-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-base-content">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                href={feature.link}
                className="card bg-base-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="card-body">
                  <div className={`${feature.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h2 className="card-title text-base-content">{feature.title}</h2>
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
          <div className="stats shadow w-full bg-base-100">
            <div className="stat place-items-center">
              <div className="stat-title text-base-content/70">备忘录</div>
              <div className="stat-value text-primary">100+</div>
              <div className="stat-desc text-base-content/60">已创建的备忘录</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-base-content/70">任务</div>
              <div className="stat-value text-success">85%</div>
              <div className="stat-desc text-base-content/60">任务完成率</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-base-content/70">文章</div>
              <div className="stat-value text-accent">50+</div>
              <div className="stat-desc text-base-content/60">已发布的文章</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-base-content/70">习惯</div>
              <div className="stat-value text-secondary">90%</div>
              <div className="stat-desc text-base-content/60">习惯坚持率</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title text-base-content/70">收藏</div>
              <div className="stat-value text-primary">200+</div>
              <div className="stat-desc text-base-content/60">已收藏的内容</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <div>
          <p className="font-bold">
            Life Track <br/>
            让生活更有序，让时间更有价值
          </p>
          <p className="text-base-content/70">Copyright © 2024 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
}
