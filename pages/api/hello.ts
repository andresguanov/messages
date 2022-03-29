// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  title: string
  description: string
}

const data: Data[] = [
  {
    id: 0,
    title: 'Primer mensaje',
    description: 'Mensajito',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  res.status(200).json(data)
}
