import {Optional} from "sequelize";

export interface CampaignInterface {
    id: number;
    name: string;
    hashtag: string;
    creationDate: string;
    status: boolean;
}

export interface CampaignInput extends Optional<CampaignInterface, 'id'> {}
export interface CampaignOutput extends Required<CampaignInterface> {}
