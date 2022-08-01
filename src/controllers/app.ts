import { Request, Response } from "express";

// todo: move it?
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


export const getApp = (req: Request, res: Response) => {
    const jsonResponse = {
        "app_name": "Metaphor",
        "company_name": "Kubefirst",
        "chart_version": process.env.CHART_VERSION,
        "docker_tag": process.env.DOCKER_TAG,
    };
    res.status(200).json(jsonResponse);
};

export const performance = async (req: Request, res: Response) => {
  const sleepTime = Math.floor(Math.random() * 2 * 1000);
  await delay(sleepTime);
  res.send({ hello: "world", sleepTime });
};

export const healthz = (req: Request, res: Response) => {
    res.status(200).json({"plk": "osok"})
}
export const kill = (req: Request, res: Response) => {
    res.status(200).json({"plk": "kill"})
}
