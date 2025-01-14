import Link from "next/link";
import {
  FileText,
  Calendar,
  CheckSquare,
  Box,
  Repeat,
  File,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  {
    title: "Memo",
    description: "Record your real-time ideas, thoughts, and inspirations.",
    icon: FileText,
    href: "/memo",
    features: ["Tagging System", "Voice Notes", "Priority Level"],
  },
  {
    title: "Task",
    description: "Your personal reminder to stay on top of things.",
    icon: CheckSquare,
    href: "/task",
    features: ["Recurring Tasks", "Subtasks", "Task Categories"],
  },
  {
    title: "Article",
    description:
      "Formal writing that can be structured as essays or blog posts.",
    icon: File,
    href: "/article",
    features: ["Drafts", "Publishing Schedule", "Collaborative Writing"],
  },
  {
    title: "Calendar",
    description: "Track your schedule, appointments, and important dates.",
    icon: Calendar,
    href: "/calendar",
    features: ["Customizable Views", "Event Reminders", "Color-Coding"],
  },
  {
    title: "Habit",
    description: "Monitor the habits you're trying to build.",
    icon: Repeat,
    href: "/habit",
    features: ["Habit Streaks", "Habit Categories", "Statistics"],
  },
  {
    title: "Collect",
    description: "Save the things that amuse or inspire you.",
    icon: Box,
    href: "/collect",
    features: ["Content Types", "Search & Filter", "Sharing"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full gap-2 p-4 border">
      <div className="mb-4 p-4 border bg-muted/50">
        <h1 className="text-2xl font-bold mb-2">Life Track</h1>
        <p className="mb-2 text-foreground">
          A comprehensive life tracking system designed to help you better
          manage and record all aspects of your life.
        </p>
        <p className="text-sm text-muted-foreground">
          This project is made for zeroicey and made by zeroicey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto scrollbar-hide">
        {modules.map((module) => (
          <div key={module.title} className="p-4 border border-border bg-card">
            <div className="flex gap-2 mb-4">
              <div className="p-2 bg-muted">
                <module.icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-card-foreground">
                  {module.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </div>
            </div>

            <ul className="mb-4">
              {module.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button asChild variant="outline" className="w-full">
              <Link href={module.href}>
                Go to {module.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
