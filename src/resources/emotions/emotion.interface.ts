import {Optional} from "sequelize";

export interface EmotionInterface {
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

export interface EmotionInput extends Optional<EmotionInterface, 'id'> {
}

export interface EmotionOutput extends Required<EmotionInterface> {
}
