export default function Line({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="text-[#334651] font-semibold">{label}:</span>{" "}
      <span className="text-[#6B7E8A]">{value}</span>
    </p>
  );
}
