import { TypestryComponents } from "@/theme/types"

export const TuiButton: TypestryComponents["TuiButton"] = (theme) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  backgroundColor: theme("colors.primary.300"),
  color: theme("colors.primary.950"),
  border: `1px solid`,
  borderColor: theme("colors.primary.950"),
  padding: theme("spacing.2"),
  "@media (min-width: 1024px)": {
    padding: theme("spacing.4"),
  },
  textTransform: "uppercase",
  transition: "all 0.3s",
  "&:hover": {
    backgroundColor: theme("colors.primary.400"),
  },
  "&:active": {
    backgroundColor: theme("colors.primary.500"),
    color: theme("colors.white"),
  },
  "&.disabled": {
    opacity: "0.5",
  },
  ".dark &": {
    backgroundColor: theme("colors.primary.700"),
    borderColor: theme("colors.white"),
    color: theme("colors.white"),
    "&:hover": {
      backgroundColor: theme("colors.primary.800"),
    },
    "&:active": {
      backgroundColor: theme("colors.primary.900"),
    },
  },
})
