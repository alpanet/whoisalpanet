import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-sm prose-blue max-w-none prose-p:text-gray-500 prose-headings:text-black"
      )}
    >
      {children}
    </div>
  );
}
