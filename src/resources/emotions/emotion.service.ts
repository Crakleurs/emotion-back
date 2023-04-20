import CampaignModel from "~/resources/campaigns/campaign.model";
import {NotFoundException} from "~/utils/exception";
import EmotionModel from "~/resources/emotions/emotion.model";

export class EmotionService {

    private labels = ["anger", "joy", "hate", "irony", "neutral", "negative", "sadness", "optimism", "positive", "offensive"]

    private async getEmotions(campaignId: number) {
        return await EmotionModel.findAll({
            where: {
                '$Campaign.id$': campaignId
            },
            include: [
                {
                    model: CampaignModel,
                    as: "Campaign"
                }
            ]
        });
    }
    async getLength(campaignId: number) {
        const emotions = await this.getEmotions(campaignId);
        return emotions.length;
    }

    async findResults(campaignId: number) {
        const emotions = await this.getEmotions(campaignId);

        if (!emotions)
            return null;

        return emotions.reduce((previousValue, currentValue) => {
            for (const label of this.labels) {
                // @ts-ignore
                previousValue[label] += currentValue[label];
            }

            return previousValue;
        }, new EmotionModel({anger: 0, joy: 0, hate: 0, irony: 0, negative: 0, neutral: 0, sadness: 0, optimism: 0, positive: 0, offensive: 0}))
    }



    async findMaxResults(campaignId: number) {
        const emotions = await this.getEmotions(campaignId);

        if (!emotions)
            return null;

        return emotions.reduce((previousValue, currentValue) => {
            const result = {
                label: "",
                value: 0
            }
            for (const label of this.labels) {
                // @ts-ignore
                if (result.value < currentValue[label]) {
                    result.label = label;
                    // @ts-ignore
                    result.value = currentValue[label];
                }

            }

            // @ts-ignore
            previousValue[result.label] += 1;
            return previousValue;
        }, new EmotionModel({anger: 0, joy: 0, hate: 0, irony: 0, negative: 0, neutral: 0, sadness: 0, optimism: 0, positive: 0, offensive: 0}))
    }
}
