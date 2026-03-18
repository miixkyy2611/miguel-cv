import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const docsDir = path.join(root, 'docs')

if (!fs.existsSync(distDir)) {
  throw new Error('dist folder not found. Run the build first.')
}

fs.rmSync(docsDir, { recursive: true, force: true })
fs.mkdirSync(docsDir, { recursive: true })
fs.cpSync(distDir, docsDir, { recursive: true })
fs.writeFileSync(path.join(docsDir, '.nojekyll'), '')
