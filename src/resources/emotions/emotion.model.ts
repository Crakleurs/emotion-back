import {DataTypes, Model} from "sequelize";
import connection from "~/database/config";
import {EmotionInput, EmotionInterface} from "~/resources/emotions/emotion.interface";
import CampaignModel from "~/resources/campaigns/campaign.model";

class EmotionModel extends Model<EmotionInterface, EmotionInput> implements EmotionInterface {
    id: number;
    joy: number;
    optimism: number;
    anger: number;
    sadness: number;
    hate: number;
    irony: number;
    offensive: number;
    positive: number;
    neutral: number;
    negative: number;
}

EmotionModel.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    joy: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    optimism: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    anger: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    sadness: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    hate: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    irony: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    offensive: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    positive: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    neutral: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    },
    negative: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false,
    }
}, {
    timestamps: false,
    sequelize: connection,
    paranoid: false
})

EmotionModel.belongsTo(CampaignModel);

export default EmotionModel;
