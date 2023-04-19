import { readFile } from 'fs/promises'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = 8000

async function createServer() {
  const app = express()

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
      )
      template = await vite.transformIndexHtml(url, template)
      const html = template.split(`<!--ssr-body-->`)
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
      const { pipe } = await render(url, {
        onShellReady() {
          res.write(html[0])
          pipe(res)
        },
        onAllReady() {
          res.write(html[0] + html[1])
          res.end()
        },
      })
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e)
        next(e)
      }
    }
  })

  app.listen(PORT, () =>
    console.log('Server started at http://localhost:' + PORT),
  )
}

createServer()
