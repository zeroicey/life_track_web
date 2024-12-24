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
    description: "Formal writing that can be structured as essays or blog posts.",
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
    <div className="container mx-auto px-4 py-8">
      <section className="max-w-4xl mx-auto space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Life Track</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive life tracking system designed to help you better manage
            and record all aspects of your life.
          </p>
          <p className="text-sm text-muted-foreground italic">
            This project is made for zeroicey and made by zeroicey to help him go
            through ups and downs, arrange, schedule, record and collect the
            chaotic life, find the meaning of life and give him the courage to
            survive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {modules.map((module) => (
            <div
              key={module.title}
              className="p-6 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <module.icon className="h-6 w-6 shrink-0" />
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{module.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {module.description}
                  </p>
                  <ul className="text-sm space-y-1 mt-4">
                    {module.features.map((feature) => (
                      <li key={feature} className="text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-4 w-full justify-between"
                  >
                    <Link href={module.href}>
                      Go to {module.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
