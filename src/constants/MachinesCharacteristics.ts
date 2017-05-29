/** Импорт интефрейса, описывающего структуру машины */
import IMachine from '../interfaces/MachinesInterface';
/** Тип операций */
import {
    OperationType
} from '../constants/constants'

/** Машины для обработки почвы */

export const pln535: IMachine = {
    modelId: "pln535",
    model: 'ПЛН 5-35',
    coast: 282,
    hourOfProdaction: 1.75,
    loadCoast: 500,
    operationType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.125,
        0,
        0.2
    ]
};

export const kps4: IMachine = {
    modelId: "kps4",
    model: 'КПС-4',
    coast: 310,
    hourOfProdaction: 4.82,
    loadCoast: 350,
    operationType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.142,
        0,
        0.14
    ]
};

export const rvk36: IMachine = {
    modelId: "rvk36",
    model: 'РВК-3.6',
    coast: 1800,
    hourOfProdaction: 2.8,
    loadCoast: 350,
    operationType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.142,
        0,
        0.14
    ]
};

export const ldg10a: IMachine = {
    modelId: "ldg10a",
    model: 'ЛДГ-10А',
    coast: 830,
    hourOfProdaction: 9,
    loadCoast: 280,
    operationType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.142,
        0,
        0.14
    ]
};

export const bdt7: IMachine = {
    modelId: "bdt7",
    model: 'БДТ-7',
    coast: 1160,
    hourOfProdaction: 7,
    loadCoast: 180,
    operationType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.142,
        0,
        0.14
    ]
};

export const bso4a: IMachine = {
    modelId: "bso4a",
    model: 'БСО-4А',
    coast: 60,
    hourOfProdaction: 3.8,
    loadCoast: 210,
    operationType: [
        OperationType.ContinuousCultivation,
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.166,
        0,
        0.2
    ]
};



/** Машины для нарезки гребней и междурядной обработкиы */

export const kon28pm: IMachine = {
    modelId: "kon28pm",
    model: 'КОН-2.8ПМ',
    coast: 412,
    hourOfProdaction: 2.15,
    loadCoast: 280,
    operationType: [
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.166,
        0,
        0.2
    ]
};

export const kno28: IMachine = {
    modelId: "kno28",
    model: 'КНО-2.8',
    coast: 450,
    hourOfProdaction: 2,
    loadCoast: 280,
    operationType: [
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.166,
        0,
        0.2
    ]
};

export const ycmk54: IMachine = {
    modelId: "ycmk54",
    model: 'УСМК-5.4',
    coast: 650,
    hourOfProdaction: 4.2,
    loadCoast: 350,
    operationType: [
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.166,
        0,
        0.2
    ]
};

export const kf54: IMachine = {
    modelId: "kf54",
    model: 'КФ-5.4',
    coast: 1300,
    hourOfProdaction: 3.15,
    loadCoast: 280,
    operationType: [
        OperationType.InterrowCultivation
    ],
    coefficientOfDeductions: [
        0.166,
        0,
        0.2
    ]
};


/** Машины для посева и посадки */
// Зерно, картофель
export const cz36: IMachine = {
    modelId: "cz36",
    model: 'СЗ-3.6',
    coast: 790,
    hourOfProdaction: 4.3,
    loadCoast: 160,
    operationType: [
        OperationType.Planting
    ],
    coefficientOfDeductions: [
        0.125,
        0,
        0.07
    ]
};

export const czl36: IMachine = {
    modelId: "czl36",
    model: 'СЗЛ-3.6',
    coast: 695,
    hourOfProdaction: 3.6,
    loadCoast: 160,
    operationType: [
        OperationType.Planting
    ],
    coefficientOfDeductions: [
        0.125,
        0,
        0.07
    ]
};

export const ch4b: IMachine = {
    modelId: "ch4b",
    model: 'СН-4Б',
    coast: 642,
    hourOfProdaction: 1.5,
    loadCoast: 140,
    operationType: [
        OperationType.Planting
    ],
    coefficientOfDeductions: [
        0.142,
        0,
        0.14
    ]
};


/** Машины для кошения ботвы и уборки */

export const kst14: IMachine = {
    modelId: "kst14",
    model: 'КСТ-1.4',
    coast: 800,
    hourOfProdaction: 0.91,
    loadCoast: 200,
    operationType: [
        OperationType.CleaningPotatoes,
    ],
    coefficientOfDeductions: [
        0.166,
        0,
        0.15
    ]
};

export const bm4: IMachine = {
    modelId: "bm4",
    model: 'БМ-4',
    coast: 2000,
    hourOfProdaction: 1.3,
    loadCoast: 300,
    operationType: [
        OperationType.CleaningPotatoes,
    ],
    coefficientOfDeductions: [
        0.142,
        0,
        0.12
    ]
};

export const rks4: IMachine = {
    modelId: "rks4",
    model: 'РКС-4',
    coast: 8070,
    hourOfProdaction: 1.3,
    loadCoast: 300,
    operationType: [
        OperationType.CleaningPotatoes,
    ],
    coefficientOfDeductions: [
        0.142,
        0,
        0.12
    ]
};

/** Список всех машин */
export const MachinesList = [pln535, kps4, rvk36, ldg10a, bdt7, bso4a, kon28pm, ycmk54, kf54, cz36, czl36, ch4b, kst14, bm4, rks4];
