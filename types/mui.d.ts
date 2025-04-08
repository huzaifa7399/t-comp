/// <reference types="@mui/material" />

import { PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    primary: Palette["primary"] & { navbar: string };
    text: Palette["text"] & {
      listTitle: string;
      listHeading: string;
    };
  }

  interface PaletteOptions {
    primary?: PaletteColorOptions & { navbar?: string };
    text?: {
      primary?: string;
      secondary?: string;
      disabled?: string;
      listTitle?: string;
      listHeading?: string;
    };
  }

  interface TypographyVariants {
    listTitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    listTitle?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    listTitle: true;
  }
}

declare module "@mui/material/Link" {
  interface LinkPropsVariantOverrides {
    clickable: true;
  }
}
