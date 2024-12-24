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
      <section className="max-w-4xl mx-auto space-y-8">
        <div className="relative space-y-4 p-6 rounded-xl bg-background/80 backdrop-blur-sm 
          border border-border/50 overflow-hidden
          before:absolute before:inset-0 before:bg-gradient-to-br 
          before:from-primary/10 before:via-transparent before:to-primary/5">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {modules.map((module) => (
            <div
              key={module.title}
              className="group relative p-6 rounded-xl bg-background/80 backdrop-blur-sm 
                border border-border/50 transition-all duration-200
                hover:bg-accent/20 hover:border-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent 
                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg flex items-center justify-center
                  bg-primary/10 text-primary-foreground/80">
                  <module.icon className="h-5 w-5" />
                </div>
                <div className="space-y-2 flex-1">
                  <h2 className="text-xl font-semibold">{module.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {module.description}
                  </p>
                  <ul className="text-sm space-y-1.5 mt-4">
                    {module.features.map((feature) => (
                      <li key={feature} className="text-muted-foreground flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-4 w-full justify-between rounded-lg
                      bg-primary/10 hover:bg-primary/20 transition-colors"
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
