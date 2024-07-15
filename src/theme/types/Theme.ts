import { ThemeConfig, CSSRuleObject } from "tailwindcss/types/config"
import { theme } from "@/theme"
import { PathOf } from "@/types/PathOf"

type Theme = typeof theme

type ComponentFn = (
  theme: (path: PathOf<Theme>) => Partial<ThemeConfig>,
) => CSSRuleObject

export interface TypestryComponents {
  TuiButton: ComponentFn
  TuiCard: ComponentFn
  TuiCardActionArea: ComponentFn
  TuiCardBody: ComponentFn
  TuiCardContent: ComponentFn
  TuiCardHeader: ComponentFn
  TuiCardMedia: ComponentFn
  TuiFormGroup: ComponentFn
  TuiGallery: ComponentFn
  TuiHelperText: ComponentFn
  TuiImageDialog: ComponentFn
  TuiLabel: ComponentFn
  TuiList: ComponentFn
  TuiListItem: ComponentFn
  TuiTextArea: ComponentFn
  TuiTextField: ComponentFn
  TuiTypography: ComponentFn
  TuiSubtitle1: ComponentFn
  TuiSubtitle2: ComponentFn
  TuiBody1: ComponentFn
  TuiBody2: ComponentFn
  TuiCaption: ComponentFn
  TuiOverline: ComponentFn
  TuiHeading1: ComponentFn
  TuiHeading2: ComponentFn
  TuiHeading3: ComponentFn
  TuiHeading4: ComponentFn
  TuiHeading5: ComponentFn
  TuiHeading6: ComponentFn
}

export type TypestryClasses = `.${keyof TypestryComponents}`
