import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 md:auto-rows-[20rem] md:grid-cols-2 lg:grid-cols-3 grid-flow-dense",
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string
  title?: string | ReactNode
  description?: string | ReactNode
  header?: ReactNode
}) => {
  return (
    <div
      className={cn(
        "group relative flex h-full flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-[0_3px_20px_rgba(2,6,23,0.8)] dark:hover:border-neutral-600",
        "shadow-[0_3px_20px_rgba(15,23,42,0.08)] transition duration-300",
        "hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none",
        className,
      )}
    >
      {header}
      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-neutral-300">{description}</p>
      </div>
    </div>
  )
}
