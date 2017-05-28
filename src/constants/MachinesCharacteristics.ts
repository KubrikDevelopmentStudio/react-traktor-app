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



/** Машины для нарезки гребней и междурядной обработкиы */

export const kon28pm: IMachine = {
    model: 'КОН-2.8ПМ',
    coast: 412,
    hourOfProdaction: 2.15,
    loadCoast: 280,
    operattionType: [
        OperationType.InterrowCultivation
    ]
};

export const kno28: IMachine = {
    model: 'КНО-2.8',
    coast: 450,
    hourOfProdaction: 2,
    loadCoast: 280,
    operattionType: [
        OperationType.InterrowCultivation
    ]
};

export const ycmk54: IMachine = {
    model: 'УСМК-5.4',
    coast: 650,
    hourOfProdaction: 4.2,
    loadCoast: 350,
    operattionType: [
        OperationType.InterrowCultivation
    ]
};

export const kf54: IMachine = {
    model: 'КФ-5.4',
    coast: 1300,
    hourOfProdaction: 3.15,
    loadCoast: 280,
    operattionType: [
        OperationType.InterrowCultivation
    ]
};


/** Машины для посева и посадки */

export const cz36: IMachine = {
    model: 'СЗ-3.6',
    coast: 790,
    hourOfProdaction: 4.3,
    loadCoast: 160,
    operattionType: [
        OperationType.Planting
    ]
};

export const czl36: IMachine = {
    model: 'СЗЛ-3.6',
    coast: 695,
    hourOfProdaction: 3.6,
    loadCoast: 160,
    operattionType: [
        OperationType.Planting
    ]
};

export const ch4b: IMachine = {
    model: 'СН-4Б',
    coast: 642,
    hourOfProdaction: 1.5,
    loadCoast: 140,
    operattionType: [
        OperationType.Planting
    ]
};


/** Машины для кошения ботвы и уборки */

export const kst14: IMachine = {
    model: 'КСТ-1.4',
    coast: 800,
    hourOfProdaction: 0.91,
    loadCoast: 200,
    operattionType: [
        OperationType.CleaningPotatoes,
    ]
};

export const bm4: IMachine = {
    model: 'БМ-4',
    coast: 2000,
    hourOfProdaction: 1.3,
    loadCoast: 300,
    operattionType: [
        OperationType.CleaningPotatoes,
    ]
};

export const rks4: IMachine = {
    model: 'РКС-4',
    coast: 8070,
    hourOfProdaction: 1.3,
    loadCoast: 300,
    operattionType: [
        OperationType.CleaningPotatoes,
    ]
};
