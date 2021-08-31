// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getWhoPays } from '../../database/data'

export default async function handler(req, res) {
  const data = await getWhoPays()

  res.status(200).json(data)
}
