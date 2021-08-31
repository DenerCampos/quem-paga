// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getPayDay } from '../../database/data'

export default async function handler(req, res) {
  const data = await getPayDay()

  res.status(200).json(data)
}
