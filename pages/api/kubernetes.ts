import type { NextApiRequest, NextApiResponse } from 'next';

type Configs = {
  config_one: string;
  config_two: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Configs>) {
  const { CONFIG_ONE = '', CONFIG_TWO = '' } = process.env;

  res.status(200).json({
    config_one: CONFIG_ONE,
    config_two: CONFIG_TWO,
  });
}
