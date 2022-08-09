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
    const sleepTime = Math.floor(Math.random() * 10000);
    console.log("sleeping for", sleepTime/1000, "seconds");
    await new Promise(resolve => setTimeout(resolve, sleepTime));
    await res.status(200).send();
};

export const healthz = (req: Request, res: Response) => {
    console.log("Im healthy!")
    res.status(200);
}
export const kill = (req: Request, res: Response) => {
    console.log("Kill endpoint was called, and the application is being force terminated...");
    setTimeout(() => {
        process.exit(1);
    },         3000);
}
