interface BadgeProps {
  text: string;
  color: string; // hex — used at /40 border, /10 bg, full text
}

export default function Badge({ text, color }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center rounded-md border px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em]"
      style={{
        borderColor: `${color}66`,
        backgroundColor: `${color}1A`,
        color,
      }}
    >
      {text}
    </span>
  );
}
