import type { ComponentProps, HTMLAttributes } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type AnnouncementProps = ComponentProps<typeof Badge> & {
  themed?: boolean;
};

export const Announcement = ({
  variant = "outline",
  themed = false,
  className,
  ...props
}: AnnouncementProps) => (
  <Badge
    className={cn(
      "group max-w-full gap-2 rounded-full bg-background/20 px-3 py-0.5 shadow-sm transition-all font-mono text-sm",
      "hover:shadow-md",
      themed && "announcement-themed border-foreground/5",
      className
    )}
    variant={variant}
    {...props}
  />
);

export type AnnouncementTagProps = HTMLAttributes<HTMLDivElement>;

export const AnnouncementTag = ({
  className,
  ...props
}: AnnouncementTagProps) => (
  <div
    className={cn(
      "-ml-2.5 shrink-0 truncate rounded-full bg-accent/30 px-2.5 py-1",
      "group-[.announcement-themed]:bg-accent",
      className
    )}
    {...props}
  />
);

export type AnnouncementTitleProps = HTMLAttributes<HTMLDivElement>;

export const AnnouncementTitle = ({
  className,
  ...props
}: AnnouncementTitleProps) => (
  <div
    className={cn("flex items-center gap-2 truncate py-1 ", className)}
    {...props}
  />
);
