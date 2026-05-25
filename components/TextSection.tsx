import { cn } from "@utils/cn";

type Props = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function TextSection({ title, children, className }: Props) {
  return (
    <div
      className={cn(
        "bg-mist-100 border-y-2 border-y-mist-200 inset-shadow-[0_0_50px_-30px] inset-shadow-primary-600/25",
        className,
      )}
    >
      <div className="container max-w-6xl! py-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl">{title}</h2>

        <div>{children}</div>
      </div>
    </div>
  );
}
