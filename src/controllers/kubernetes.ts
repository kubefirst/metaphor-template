import {Request, Response} from "express";

export const getKubernetes = (req: Request, res: Response) => {
    const jsonResponse = {
        "config_one": process.env.CONFIG_ONE,
        "config_two": process.env.CONFIG_TWO,
    }
    res.status(200).json(jsonResponse);
}
