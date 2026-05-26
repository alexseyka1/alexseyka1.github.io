import { cn } from "@utils/cn";

type Props = {
  challenge: React.ReactNode;
  solution: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
};

export function ChallengeAndSolution({
  challenge,
  solution,
  wrapperClassName,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-8 bg-transparent container max-w-6xl!",
        wrapperClassName,
      )}
    >
      <div className="container max-w-6xl! py-24 pb-0 md:pb-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl">The challenge</h2>

        <div>{challenge}</div>
      </div>

      <div className="container max-w-6xl! py-24 pt-0 md:pt-24 flex flex-col gap-8 items-center">
        <h2 className="text-center text-xl">The solution</h2>

        <div>{solution}</div>
      </div>
    </div>
  );
}
