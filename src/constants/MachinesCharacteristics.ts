/** Импорт интефрейса, описывающего структуру машины */
import IMachine from '../interfaces/MachinesInterface';
/** Тип операций */
import {
    OperationType
} from '../constants/constants'

/** Машины для обработки почвы */

export const pln535: IMachine = {
    model: 'ПЛН 5-35',
    coast: 282,
    hourOfProdaction: 1.75,
    loadCoast: 500,
    operattionType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ]
};

export const kps4: IMachine = {
    model: 'КПС-4',
    coast: 310,
    hourOfProdaction: 4.82,
    loadCoast: 350,
    operattionType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ]
};

export const rvk36: IMachine = {
    model: 'РВК-3.6',
    coast: 1800,
    hourOfProdaction: 2.8,
    loadCoast: 350,
    operattionType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ]
};

export const ldg10a: IMachine = {
    model: 'ЛДГ-10А',
    coast: 830,
    hourOfProdaction: 9,
    loadCoast: 280,
    operattionType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ]
};

export const bdt7: IMachine = {
    model: 'БДТ-7',
    coast: 1160,
    hourOfProdaction: 7,
    loadCoast: 180,
    operattionType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ]
};

export const bso4a: IMachine = {
    model: 'БСО-4А',
    coast: 60,
    hourOfProdaction: 3.8,
    loadCoast: 210,
    operattionType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ]
};