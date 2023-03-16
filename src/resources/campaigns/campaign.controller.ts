import {Router} from "express";
import {CampaignService} from "~/resources/campaigns/campaign.service";
import {CampaignInput} from "~/resources/campaigns/campaign.interface";
import {BadRequestException} from "~/utils/exception";
import * as console from "console";

const CampaignController = Router();

const service = new CampaignService();

CampaignController.get('/', async (req, res, next) => {
    try {
        return res.status(200).json(await service.findAll())
    } catch (e) {
        console.log(e);
        next(e);
    }
})

CampaignController.get('/:id', async (req, res, next) => {
    try {
        return res.status(200).json(await service.findOne(+req.params.id))
    } catch (e) {
        next(e);
    }
})

CampaignController.post('/', async (req, res, next) => {
    try {
        const campaign: CampaignInput = req.body;
        campaign.status = true;
        if (!campaign.name || !campaign.hashtag || !campaign.creationDate)
            throw new BadRequestException("A field is missing");


        return res.status(201).json(await service.create(campaign))
    } catch (e) {
        next(e);
    }
})

export {CampaignController}
