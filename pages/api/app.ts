import type { NextApiRequest, NextApiResponse } from 'next';

type Configs = {
  app_name: string;
  company_name: string;
  chart_version: string;
  docker_tag: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Configs>) {
  const { CHART_VERSION = '', DOCKER_TAG = '' } = process.env;

  res.status(200).json({
    app_name: 'Metaphor ',
    company_name: 'Kubefirst',
    chart_version: CHART_VERSION,
    docker_tag: DOCKER_TAG,
  });
}
