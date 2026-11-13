type Props = {
  name: string;
  size?: number;
};
export function UserAvatar({
  name,
  size = 32,
}: {
  name?: string | null;
  size?: number;
}) {
  const label = name ?? "";
  const initials = label
    .trim()
    .split(/[\s._-]+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-xs font-medium text-white"
      style={{ width: size, height: size }}
      aria-label={name ?? undefined}
    >
      {initials || "?"}
    </span>
  );
}
