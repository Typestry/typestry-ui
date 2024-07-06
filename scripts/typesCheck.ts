import { asyncLog } from "./asyncLog"
import { executeCommand } from "./executeCommand"

/**
 * A function that checks for TypeScript errors in the project.
 */
async function checkTypes() {
  let timer

  try {
    const versionOutput = await executeCommand("tsc --version")
    const version = versionOutput.split(" ")[1]

    console.log(`Compiling with TypeScript ${version}...`)

    // Start the spinner
    timer = asyncLog("Checking for TypeScript errors...\n")
    // Check for TypeScript errors
    await executeCommand("tsc --noEmit --strict")
    console.log("TypeScript compliation successful. No errors found. 🎉 \n")
  } catch (error) {
    console.error(
      "TypeScript compilation failed. Please fix the errors and try again. 💔\n",
      error,
    )
    process.exit(1)
  } finally {
    // Stop the spinner
    clearInterval(timer)
  }
}

await checkTypes()
