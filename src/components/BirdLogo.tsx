type BirdLogoProps = {
  className?: string;
};

export const BirdLogo = ({ className }: BirdLogoProps) => (
  <span
    className={`inline-flex items-center justify-center leading-none ${className ?? ""}`}
    aria-hidden
  >
    🐦
  </span>
);