import {DataTypes, Model} from "sequelize";
import connection from "~/database/config";
import {CampaignInput, CampaignInterface} from "~/resources/campaigns/campaign.interface";
import EmotionModel from "~/resources/emotions/emotion.model";

class CampaignModel extends Model<CampaignInterface, CampaignInput> implements CampaignInterface {
    id: number;
    name: string;
    hashtag: string;
    creationDate: string;
    status: boolean;
}

CampaignModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    hashtag: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    creationDate: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

}, {
    timestamps: true,
    sequelize: connection,
    paranoid: false
})

CampaignModel.hasMany(EmotionModel, { as: 'emotions'});
export default CampaignModel;
