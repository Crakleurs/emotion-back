import CampaignModel from "~/resources/campaigns/campaign.model";
import {NotFoundException} from "~/utils/exception";
import {CampaignInput} from "~/resources/campaigns/campaign.interface";

export class CampaignService {
    async findOne(id: number) {
        const campaign = await CampaignModel.findByPk(id);

        if (!campaign)
            throw new NotFoundException("Campaign not found");

        return campaign;
    }

    async findAll() {
        return await CampaignModel.findAll()
    }

    async create(campaign: CampaignInput) {
        return await CampaignModel.create(campaign);
    }
}
