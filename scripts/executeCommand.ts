import { exec } from "child_process"

/**
 * Executes a shell command and returns a rpomise that resolves with the output of the command.
 */
export const executeCommand = (command: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`${stderr}\n${stdout}`)
      } else {
        resolve(stdout.trim())
      }
    })
  })
}
