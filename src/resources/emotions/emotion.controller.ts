import {Router} from "express";
import * as console from "console";
import {EmotionService} from "~/resources/emotions/emotion.service";

const EmotionController = Router();

const service = new EmotionService();

EmotionController.get('/:id/length', async (req, res, next) => {
    try {
        return res.status(200).json({length: await service.getLength(+req.params.id)})
    } catch (e) {
        console.log(e);
        next(e);
    }
})

EmotionController.get('/:id/results', async (req, res, next) => {
    try {
        return res.status(200).json(await service.findResults(+req.params.id))
    } catch (e) {
        next(e);
    }
})

EmotionController.get('/:id/max-results', async (req, res, next) => {
    try {
        return res.status(200).json(await service.findMaxResults(+req.params.id))
    } catch (e) {
        next(e);
    }
})


export {EmotionController}
