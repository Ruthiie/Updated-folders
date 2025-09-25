export default function KV({ k, v, span }: { k: string; v: string; span?: boolean }) {
  return (
    <div className={span ? "md:col-span-2" : ""}>
      <div className="text-[12px] text-[#334651]">{k}</div>
      <div className="text-[#6B7E8A]">{v}</div>
    </div>
  );
}
