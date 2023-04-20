import {config} from "~/config";
import CampaignModel from "~/resources/campaigns/campaign.model";
import EmotionModel from "~/resources/emotions/emotion.model";

const isDev = !config.PRODUCTION;

const dbInit = async () => {
    await CampaignModel.sync({alter: isDev})
    await EmotionModel.sync({alter: isDev})
}
export default dbInit
