import {Request, Response} from "express";

export const getKubernetes = (req: Request, res: Response) => {
    res.status(200).json({"ok12": "ok3"});
}
