import express, {Router} from "express";

import {getApp, performance, healthz, kill} from "./controllers/app";
import {getVault} from "./controllers/vault";
import {getKubernetes} from "./controllers/kubernetes";

const router:Router = express.Router();

router.get("/app", getApp);
router.get("/app/healthz", healthz);

router.post("/app/performance", performance);
router.post("/app/kill", kill);

router.get("/vault", getVault);
router.get("/kubernetes", getKubernetes);

export default router;
