import cn from "@/utils/cn";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
}

const ProgressBar = ({ value, max, className }: ProgressBarProps) => {
  const safeMax = max <= 0 ? 1 : max;
  const percentage = Math.min(Math.max((value / safeMax) * 100, 0), 100);
  return (
    <div className={cn(
      "h-2 inline-flex bg-slate-400 rounded"
      , className)}
    role="progressbar"
    aria-valuemin={0}
    aria-valuenow={percentage}
    aria-valuemax={safeMax}
    >
      <div
        className={cn("h-full w-full rounded transition-transform bg-indigo-500 origin-left")}
        style={{transform: `scaleX(${percentage / 100})`}}
      ></div>
    </div>
  );
};

export default ProgressBar;
