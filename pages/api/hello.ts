// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const images: number = 10

const data: Data[] = []

for (let i = 0; i < images; i++) {
  data.push({
    id: i,
    title: `Imagen ${i}`,
    url: `/images/${i}.jpg`,
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  res.status(200).json(data)
}
