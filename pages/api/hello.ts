// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { images } from '../../constants'

const data: Data[] = []

for (let i = images; i >= 0; i--) {
  data.push({
    id: i,
    title: `Imagen ${i}`,
    url: `/images/${i}.jpg`,
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  res.status(200).json(data)
}
