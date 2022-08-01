import {Request, Response} from "express";

export const getVault = (req: Request, res: Response) => {
    const jsonResponse = {
        "secret_one": process.env.SECRET_ONE,
        "secret_two": process.env.SECRET_TWO,
    }
    res.status(200).json(jsonResponse);
}
