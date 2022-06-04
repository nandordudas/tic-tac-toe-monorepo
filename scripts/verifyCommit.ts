// This file is originally from https://github.com/vitejs/vite/blob/main/scripts/verifyCommit.ts
// Invoked on the commit-msg git hook by simple-git-hooks.

import { readFileSync } from 'fs'
import colors from 'picocolors'

// get $1 from commit-msg script
const msgPath = process.argv[2]
const msg = readFileSync(msgPath, 'utf-8').trim()

const releaseRE = /^v\d/
const commitRE
  = /^(revert: )?(feat|fix|docs|refactor|perf|test|build|ci|chore|release)(\(.+\))?: .{1,50}/

if (!releaseRE.test(msg) && !commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${colors.bgRed(colors.white(' ERROR '))} ${colors.red(
      'invalid commit message format.',
    )}\n\n${
      colors.red(
        '  Proper commit message format is required for automated changelog generation. Examples:\n\n',
      )
      }    ${colors.green('feat: add \'comments\' option')}\n`
      + `    ${colors.green('fix: handle events on blur (close #28)')}\n\n${
      colors.red('  See .github/commit-convention.md for more details.\n')}`,
  )
  process.exit(1)
}
