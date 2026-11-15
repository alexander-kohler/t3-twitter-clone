import Image from "next/image";

type AvatarImageProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export const AvatarImage = ({
  src,
  alt,
  size = 48,
  className,
}: AvatarImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    unoptimized
    className={className}
  />
);