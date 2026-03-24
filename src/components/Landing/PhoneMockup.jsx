import "./PhoneMockup.css";

/**
 * Cadre iPhone en CSS — écran intérieur personnalisable (captures, maquettes, etc.).
 */
export default function PhoneMockup({
  children,
  className = "",
  size = "large",
  label,
}) {
  return (
    <div
      className={`phone-mockup phone-mockup--${size} ${className}`.trim()}
    >
      <div className="phone-mockup__bezel">
        <div className="phone-mockup__notch" aria-hidden />
        <div className="phone-mockup__screen">{children}</div>
      </div>
      {label ? (
        <span className="phone-mockup__label">{label}</span>
      ) : null}
    </div>
  );
}
