import { cn } from "@/lib/cn";

export const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-fit cursor-pointer rounded-sm bg-black px-2 text-white hover:bg-gray-800",
        className,
      )}
    >
      {children}
    </button>
  );
};
