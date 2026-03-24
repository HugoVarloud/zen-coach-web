import "./PhoneScreenImage.css";

/**
 * Capture d’écran dans le cadre téléphone — object-fit pour remplir l’écran.
 */
export default function PhoneScreenImage({
  src,
  alt,
  priority = false,
  position = "top center",
}) {
  return (
    <img
      className="phone-screen-image"
      src={src}
      alt={alt}
      style={{ objectPosition: position }}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
