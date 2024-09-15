import { Icon, IconProps } from "@tabler/icons-react";
import { ForwardRefExoticComponent } from "react";

export interface ILSNotes {
  id: number;
  icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  label: string;
  text: string;
}
