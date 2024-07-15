import { TypestryComponents } from "@/theme/types"

export const TuiTypography: TypestryComponents["TuiTypography"] = (theme) => ({
  width: "fit-content",
  ".dark &": {
    color: theme("colors.white"),
  },
})

export const TuiSubtitle1: TypestryComponents["TuiSubtitle1"] = (theme) => ({
  fontFamily: theme("fontFamily.sans"),
  fontSize: theme("fontSize.base"),
  letterSpacing: theme("letterSpacing.tighter"),
})

export const TuiSubtitle2: TypestryComponents["TuiSubtitle2"] = (theme) => ({
  fontFamily: theme("fontFamily.sans"),
  fontSize: theme("fontSize.sm"),
  fontWeight: theme("fontWeight.medium"),
  letterSpacing: theme("letterSpacing.tight"),
})

export const TuiBody1: TypestryComponents["TuiBody1"] = (theme) => ({
  fontFamily: theme("fontFamily.sans"),
  fontSize: theme("fontSize.base"),
})

export const TuiBody2: TypestryComponents["TuiBody2"] = (theme) => ({
  fontFamily: theme("fontFamily.sans"),
  fontSize: theme("fontSize.sm"),
})

export const TuiCaption: TypestryComponents["TuiCaption"] = (theme) => ({
  fontFamily: theme("fontFamily.sans"),
  fontSize: theme("fontSize.xs"),
  letterSpacing: theme("letterSpacing.wider"),
})

export const TuiOverline: TypestryComponents["TuiOverline"] = (theme) => ({
  fontFamily: theme("fontFamily.sans"),
  fontSize: theme("fontSize.xs"),
  letterSpacing: theme("letterSpacing.wider"),
  textTransform: "uppercase",
  textDecoration: "transparent",
})

export const TuiHeading1: TypestryComponents["TuiHeading1"] = (theme) => ({
  fontFamily: theme("fontFamily.serif"),
  fontSize: theme("fontSize.4xl"),
  fontWeight: theme("fontWeight.light"),
  textTransform: "uppercase",
  letterSpacing: theme("letterSpacing.widest"),
})

export const TuiHeading2: TypestryComponents["TuiHeading2"] = (theme) => ({
  fontFamily: theme("fontFamily.serif"),
  fontSize: theme("fontSize.3xl"),
  fontWeight: theme("fontWeight.light"),
  letterSpacing: theme("letterSpacing.wider"),
})

export const TuiHeading3: TypestryComponents["TuiHeading3"] = (theme) => ({
  fontFamily: theme("fontFamily.serif"),
  fontSize: theme("fontSize.2xl"),
})

export const TuiHeading4: TypestryComponents["TuiHeading4"] = (theme) => ({
  fontFamily: theme("fontFamily.serif"),
  fontSize: theme("fontSize.xl"),
  letterSpacing: theme("letterSpacing.wide"),
})

export const TuiHeading5: TypestryComponents["TuiHeading5"] = (theme) => ({
  fontFamily: theme("fontFamily.serif"),
  fontSize: theme("fontSize.lg"),
})

export const TuiHeading6: TypestryComponents["TuiHeading6"] = (theme) => ({
  fontFamily: theme("fontFamily.serif"),
  fontSize: theme("fontSize.lg"),
  fontWeight: theme("fontWeight.medium"),
  letterSpacing: theme("letterSpacing.tight"),
  textTransform: "uppercase",
})
