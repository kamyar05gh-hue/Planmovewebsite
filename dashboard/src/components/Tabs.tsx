interface TabsProps {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  ariaLabel: string;
}

/** Plain-text underline tabs per LAW 4 — also used as the range picker. */
export default function Tabs({ options, value, onChange, ariaLabel }: TabsProps) {
  return (
    <div className="tabs" role="tablist" aria-label={ariaLabel}>
      {options.map((opt) => (
        <button
          key={opt}
          className="tab"
          role="tab"
          aria-selected={value === opt}
          data-active={value === opt}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
