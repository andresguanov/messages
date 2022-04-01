// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { images } from '../../constants'

const data: Data[] = []
const minNumber: number = 0

for (let i = images; i >= minNumber; i--) {
  data.push({
    id: i,
    title: `Imagen ${i}`,
    url: `/images/${i}.jpg`,
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  res.status(200).json(data)
}
