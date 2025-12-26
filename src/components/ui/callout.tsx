import { cn } from "@/lib/utils";
import {
  AlertCircle,
  AlertTriangle,
  InfoIcon,
  LightbulbIcon,
  ScrollTextIcon,
  type LucideIcon,
} from "lucide-react";
import { ReactNode } from "react";

type Props = {
  title?: string;
  variant?: "note" | "info" | "warning" | "tip" | "danger";
  children: ReactNode;
};

const icons: Record<NonNullable<Props["variant"]>, LucideIcon> = {
  note: ScrollTextIcon,
  info: InfoIcon,
  tip: LightbulbIcon,
  warning: AlertCircle,
  danger: AlertTriangle,
};

const variantStyles: Record<
  NonNullable<Props["variant"]>,
  {
    container: string;
    title: string;
    body?: string;
  }
> = {
  note: {
    container: "bg-slate-50 dark:bg-slate-900/20 border border-slate-500",
    title: "text-slate-700 dark:text-slate-300",
  },
  info: {
    container: "bg-blue-50 dark:bg-blue-950/20 border border-sky-700",
    title: "text-blue-700 dark:text-blue-300",
  },
  tip: {
    container: "bg-green-50 dark:bg-green-950/20 border border-emerald-700",
    title: "text-green-700 dark:text-green-300",
  },
  warning: {
    container: "bg-amber-50 dark:bg-amber-950/20 border border-amber-700",
    title: "text-amber-800 dark:text-amber-300",
  },
  danger: {
    container: "bg-red-50 dark:bg-red-900/20 border border-rose-500",
    title: "text-red-700 dark:text-red-300",
  },
};

export const Callout = ({ variant = "note", title, children }: Props) => {
  const Icon = icons[variant];
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "mt-6 mb-2 lg:mt-5 lg:mb-2.5",
        "flex flex-col gap-1 rounded-lg p-4",
        styles.container
      )}
      data-variant={variant}
    >
      {title && (
        <div
          className={cn(
            "inline-flex items-center gap-2",
            "text-sm font-semibold",
            styles.title
          )}
        >
          <Icon className="size-4" aria-hidden="true" />
          {title}
        </div>
      )}
      <div className={cn("flex w-full min-w-0 items-start gap-2", styles.body)}>
        {!title && (
          <Icon className="size-4 flex-shrink-0 mt-px" aria-hidden="true" />
        )}
        <div
          className={cn(
            "flex-1 min-w-0",
            "text-sm font-medium leading-5",
            "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
            "[&_p]:m-0 [&_ul]:m-0 [&_ol]:m-0 [&_li]:m-0",
            "[&_p]:text-inherit [&_ul]:text-inherit [&_ol]:text-inherit [&_li]:text-inherit"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
