import Link from "next/link";

import { BirdLogo } from "~/components/BirdLogo";
import {
  BellIcon,
  HomeIcon,
  MailIcon,
  SearchIcon,
  UserIcon,
} from "~/components/icons";

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: typeof HomeIcon;
  active?: boolean;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/", icon: HomeIcon, active: true },
  {
    id: "explore",
    label: "Discover",
    href: "#",
    icon: SearchIcon,
    disabled: true,
  },
  {
    id: "notifications",
    label: "Notifications",
    href: "#",
    icon: BellIcon,
    disabled: true,
  },
  {
    id: "messages",
    label: "Messages",
    href: "#",
    icon: MailIcon,
    disabled: true,
  },
  {
    id: "profile",
    label: "Profile",
    href: "#",
    icon: UserIcon,
    disabled: true,
  },
];

const NavLink = ({ item }: { item: NavItem }) => {
  const Icon = item.icon;
  const base =
    "group flex w-full max-w-[245px] items-center gap-4 rounded-full px-3 py-2.5 text-[19px] transition hover:bg-chirp-sky/60";
  const labelClass = item.active
    ? "font-bold text-chirp-ink"
    : "font-normal text-chirp-ink group-hover:text-chirp-blue";
  const iconClass = item.active
    ? "h-[26px] w-[26px] text-chirp-blue"
    : "h-[26px] w-[26px] text-chirp-muted group-hover:text-chirp-blue";

  const content = (
    <>
      <Icon className={iconClass} />
      <span className={labelClass}>{item.label}</span>
    </>
  );

  if (item.disabled) {
    return (
      <a
        href={item.href}
        className={`${base} cursor-default opacity-70`}
        aria-disabled
        onClick={(e) => e.preventDefault()}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={base}>
      {content}
    </Link>
  );
};

export const SideNav = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-[275px] shrink-0 flex-col px-3 py-3 lg:flex">
      <div className="flex flex-col items-start gap-0.5 pl-2 pt-1">
        <Link
          href="/"
          className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full text-chirp-blue transition hover:bg-chirp-sky/70"
          aria-label="Chirp home"
        >
          <BirdLogo className="text-[28px]" />
        </Link>
        {navItems.map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
        <button
          type="button"
          className="mt-4 w-full max-w-[245px] rounded-full bg-chirp-blue py-3 text-[17px] font-bold text-white shadow-sm transition hover:bg-chirp-blue-deep"
          onClick={() => {
            document.getElementById("compose-input")?.focus();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Compose
        </button>
      </div>
    </aside>
  );
};