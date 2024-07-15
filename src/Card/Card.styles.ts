import { TypestryComponents } from "@/theme/types"

export const TuiCard: TypestryComponents["TuiCard"] = (theme) => ({
  padding: theme("spacing.4"),
  ".dark &": {
    color: theme("colors.white"),
  },
})
