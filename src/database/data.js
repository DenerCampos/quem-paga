import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'

export function getData() {
    //const { serverRuntimeConfig } = getConfig()
    const dirRelativeToPublicFolder = 'database'
    const dataBaseFile = 'database.json'

    //console.log(serverRuntimeConfig)

    //const dir = path.join(serverRuntimeConfig.PROJECT_ROOT, './public', dirRelativeToPublicFolder)
    const dir = path.resolve('./public', dirRelativeToPublicFolder)

    //console.log(path.join(dir, dataBaseFile))

    const dataBaseContent = fs.readFileSync(path.join(dir, dataBaseFile), 'utf8')

    return dataBaseContent
}