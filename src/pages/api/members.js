// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getMembers } from '../../database/data'

export default async function handler(req, res) {
  const data = await getMembers()

  res.status(200).json(data)
}
