import type { Icon } from "@tabler/icons-react";

export type Navlink = {
  href: string;
  label: string;
  icon?: React.ComponentType<any>;
};
