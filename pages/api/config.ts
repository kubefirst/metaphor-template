import type { NextApiRequest, NextApiResponse } from 'next';

type Configs = {
  [key: string]: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Configs>) {
  const {
    METAPHOR_JS_API_BASE_URL = '',
    METAPHOR_GO_API_BASE_URL = '',
    CONFIG_ONE = '',
    CONFIG_TWO = '',
    SECRET_ONE = '',
    SECRET_TWO = '',
    CHART_VERSION = '',
    DOCKER_TAG = '',
    IS_LOCAL = '',
  } = process.env;

  res.status(200).json({
    METAPHOR_JS_API_BASE_URL,
    METAPHOR_GO_API_BASE_URL,
    CONFIG_ONE,
    CONFIG_TWO,
    SECRET_ONE,
    SECRET_TWO,
    CHART_VERSION,
    DOCKER_TAG,
    IS_LOCAL,
  });
}
