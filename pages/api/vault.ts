import type { NextApiRequest, NextApiResponse } from 'next';

type Configs = {
  secret_one: string;
  secret_two: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Configs>) {
  const { SECRET_ONE = '', SECRET_TWO = '' } = process.env;

  res.status(200).json({
    secret_one: SECRET_ONE,
    secret_two: SECRET_TWO,
  });
}
