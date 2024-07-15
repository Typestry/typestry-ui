import { CSSRuleObject } from "tailwindcss/types/config"
import plugin from "tailwindcss/plugin"
import _merge from "lodash/merge"
import { TuiButton } from "@/Button/Button.styles"
import { TypestryClasses } from "@/types/Theme"
import { TuiCard } from "@/Card/Card.styles"
import { theme as defaultTheme } from "@/theme"
import { TuiCardActionArea } from "@/CardActions/CardActions.styles"
import {
  TuiBody1,
  TuiBody2,
  TuiCaption,
  TuiHeading1,
  TuiHeading2,
  TuiHeading3,
  TuiHeading4,
  TuiHeading5,
  TuiHeading6,
  TuiOverline,
  TuiSubtitle1,
  TuiSubtitle2,
  TuiTypography,
} from "@/Typography/Typography.styles"

type AllComponents = Record<TypestryClasses, CSSRuleObject>
type BaseComponents = Pick<
  AllComponents,
  | ".TuiHeading1"
  | ".TuiHeading2"
  | ".TuiHeading3"
  | ".TuiHeading4"
  | ".TuiHeading5"
  | ".TuiHeading6"
>
type Components = Omit<AllComponents, keyof BaseComponents>

interface TypestryConfig {
  overrides?: {
    base?: Partial<BaseComponents>
    components?: Partial<Components>
  }
}

export function typestry(config?: TypestryConfig) {
  return plugin(
    ({ addComponents, addBase, theme }) => {
      addBase(
        _merge(
          {
            ".TuiHeading1": TuiHeading1(theme),
            ".TuiHeading2": TuiHeading2(theme),
            ".TuiHeading3": TuiHeading3(theme),
            ".TuiHeading4": TuiHeading4(theme),
            ".TuiHeading5": TuiHeading5(theme),
            ".TuiHeading6": TuiHeading6(theme),
          } as BaseComponents,
          config?.overrides?.base,
        ),
      ),
        addComponents(
          _merge(
            {
              ".TuiButton": TuiButton(theme),
              ".TuiCard": TuiCard(theme),
              ".TuiCardActionArea": TuiCardActionArea(theme),
              ".TuiTypography": TuiTypography(theme),
              ".TuiSubtitle1": TuiSubtitle1(theme),
              ".TuiSubtitle2": TuiSubtitle2(theme),
              ".TuiBody1": TuiBody1(theme),
              ".TuiBody2": TuiBody2(theme),
              ".TuiCaption": TuiCaption(theme),
              ".TuiOverline": TuiOverline(theme),
            } as Components,
            config?.overrides?.components,
          ),
        )
    },
    {
      theme: {
        ...defaultTheme,
        darkMode: "class",
        fontFamily: {
          serif: ["NotoSerif-Variable"],
          body: ["Koulen"],
          sans: ["Finlandica-Variable"],
        },
      },
    },
  )
}
