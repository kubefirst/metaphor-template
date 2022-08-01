import {Request, Response} from "express";

export const getVault = (req: Request, res: Response) => {
    res.status(200).json({"ok1": "ok2"})
}
