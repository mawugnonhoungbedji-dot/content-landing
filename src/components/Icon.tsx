type IconProps = { name: string; fill?: boolean; className?: string };

/** Icône Google Material Symbols (décorative, masquée aux lecteurs d'écran). */
export function Icon({ name, fill = false, className = "" }: IconProps) {
  return (
    <span className={`ms${fill ? " fill" : ""}${className ? ` ${className}` : ""}`} aria-hidden="true">
      {name}
    </span>
  );
}
