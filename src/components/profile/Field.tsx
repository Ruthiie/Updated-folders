export default function Field({
  label,
  defaultValue,
  className = "",
}: {
  label: string;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <span className="text-[12px] text-[#6B7E8A]">{label}</span>
      <input
        defaultValue={defaultValue}
        className="
          h-9 rounded-md border border-[#D5DEE4] bg-white
          px-3 text-[14px] text-[#334651] outline-none
          focus:border-[#0F6E8C] focus:ring-2 focus:ring-[#0F6E8C]/20
        "
      />
    </label>
  );
}
