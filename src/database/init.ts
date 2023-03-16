import {config} from "~/config";
import CampaignModel from "~/resources/campaigns/campaign.model";

const isDev = !config.PRODUCTION;

const dbInit = async () => {
    await CampaignModel.sync({alter: isDev})

}
export default dbInit
