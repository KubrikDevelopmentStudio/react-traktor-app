/**
 * Характеристики Всех моделей тракторов.
 */


/** Интерфейс, описывающий структуру объекта Трактор */
import ITraktor from '../interfaces/TractorsInterface'
/** Вспомогательная библиотека для работы с данными */
import * as _ from 'lodash';


/** Массив с объектами тракторов */
export let tractorsLibrary: any = _.stubObject();


/** T-130M */
/** По ГСМ информация отсутствовала, взял от трактора: Т-150К */
export const t130m: ITraktor = {
    maintenance: {
        to1: 3.2,
        to2: 15.3,
        to3: 28.8,
        sto: 13.5
    },
    totalIntensity: 137,
    farmExpenses: 0.18,
    fuelMaterials: {
        dieselFuel: {
            to1: 1.0,
            to2: 4.0,
            to3: 11.5,
            sto: 34
        },
        motorOil: {
            to1: 0.5,
            to2: 4.9,
            to3: 38.4,
            sto: 73
        },
        transmissionOil: {
            to2: 0.16,
            to3: 1.6,
            sto: 1.6
        },
        lubricant: {
            to1: 0.1,
            to2: 0.56,
            to3: 1.99,
            sto: 1.99
        }
    }
};


/** T-100M */
/** По ГСМ информация отсутствовала, взял от трактора: Т-150К */
export const t100m: ITraktor = {
    maintenance: {
        to1: 3.1,
        to2: 14.7,
        to3: 27.0,
        sto: 13.5
    },
    totalIntensity: 112,
    farmExpenses: 0.18,
    fuelMaterials: {
        dieselFuel: {
            to1: 1.0,
            to2: 4.0,
            to3: 11.5,
            sto: 34
        },
        motorOil: {
            to1: 0.5,
            to2: 4.9,
            to3: 38.4,
            sto: 73
        },
        transmissionOil: {
            to2: 0.16,
            to3: 1.6,
            sto: 1.6
        },
        lubricant: {
            to1: 0.1,
            to2: 0.56,
            to3: 1.99,
            sto: 1.99
        }
    }
};


/** К-700А */
/** По ГСМ информация отсутствовала, взял от трактора: К-701 */
export const k700a: ITraktor = {
    maintenance: {
        to1: 2.5,
        to2: 14.7,
        to3: 27.0,
        sto: 13.5
    },
    totalIntensity: 112,
    farmExpenses: 0.18,
    fuelMaterials: {
        dieselFuel: {
            to1: 11,
            to2: 11,
            to3: 11,
            sto: 50
        },
        motorOil: {
            eto: 2.4,
            to1: 3.1,
            to2: 41.3,
            to3: 41.3,
            sto: 41.3
        },
        lubricant: {
            to2: 0.41,
            to3: 0.74,
            sto: 0.74
        }
    }
};


/** К-701 */
export const k701: ITraktor = {
    maintenance: {
        to1: 2.2,
        to2: 11.6,
        to3: 25.2,
        sto: 18.3
    },
    totalIntensity: 48,
    farmExpenses: 0.12,
    fuelMaterials: {
        dieselFuel: {
            to1: 11,
            to2: 11,
            to3: 11,
            sto: 50
        },
        motorOil: {
            eto: 2.4,
            to1: 3.1,
            to2: 41.3,
            to3: 41.3,
            sto: 41.3
        },
        lubricant: {
            to2: 0.41,
            to3: 0.74,
            sto: 0.74
        }
    }
};


/** Т-4А */
export const t4a: ITraktor = {
    maintenance: {
        to1: 1.7,
        to2: 5.5,
        to3: 31.8,
        sto: 16.5
    },
    totalIntensity: 76,
    farmExpenses: 0.16,
    fuelMaterials: {
        dieselFuel: {
            to1: 1.0,
            to2: 4.0,
            to3: 7.5,
            sto: 17
        },
        motorOil: {
            eto: 1.28,
            to1: 1.6,
            to2: 15.6,
            to3: 29.6,
            sto: 29.6
        },
        transmissionOil: {
            eto: 2,
            to1: 2.6,
            to2: 2.6,
            to3: 2.6,
            sto: 24.6
        },
        lubricant: {
            to1: 0.5,
            to2: 1.1,
            to3: 1.3,
            sto: 1.3
        }
    }
};


/** ДТ-75М */
export const dt75m: ITraktor = {
    maintenance: {
        to1: 2.7,
        to2: 6.4,
        to3: 21.4,
        sto: 17.1
    },
    totalIntensity: 103,
    farmExpenses: 0.17,
    fuelMaterials: {
        dieselFuel: {
            to1: 1.0,
            to2: 4.0,
            to3: 13,
            sto: 27
        },
        motorOil: {
            eto: 0.9,
            to1: 1.1,
            to2: 12.4,
            to3: 23.4,
            sto: 23.4
        },
        transmissionOil: {
            to1: 4.2,
            to2: 4.2,
            to3: 30.2,
            sto: 4.2
        },
        lubricant: {
            to1: 0.74,
            to2: 0.01,
            to3: 0.91,
            sto: 0.91
        }
    }
};


/** Т-150К */
export const t150k: ITraktor = {
    maintenance: {
        to1: 1.9,
        to2: 6.8,
        to3: 42.3,
        sto: 5.3
    },
    totalIntensity: 54,
    farmExpenses: 0.14,
    fuelMaterials: {
        dieselFuel: {
            to1: 1.0,
            to2: 4.0,
            to3: 11.5,
            sto: 34
        },
        motorOil: {
            to1: 0.5,
            to2: 4.9,
            to3: 38.4,
            sto: 73
        },
        transmissionOil: {
            to2: 0.16,
            to3: 1.6,
            sto: 1.6
        },
        lubricant: {
            to1: 0.1,
            to2: 0.56,
            to3: 1.99,
            sto: 1.99
        }
    }
};


/** Т-70С */
export const t70s: ITraktor = {
    maintenance: {
        to1: 2.3,
        to2: 6.9,
        to3: 14.0,
        sto: 6.8
    },
    totalIntensity: 70,
    farmExpenses: 0.12,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.8,
            to2: 3.0,
            to3: 4.6,
            sto: 16
        },
        motorOil: {
            eto: 0.48,
            to1: 0.61,
            to2: 7.7,
            to3: 13.65,
            sto: 13.65
        },
        transmissionOil: {
            to2: 4.5,
            to3: 4.5,
            sto: 43.7
        },
        lubricant: {
            to1: 0.22,
            to2: 0.52,
            to3: 0.85,
            sto: 0.85
        }
    }
};


/** МТЗ-80 */
export const mtz80: ITraktor = {
    maintenance: {
        to1: 2.7,
        to2: 6.9,
        to3: 19.8,
        sto: 3.5
    },
    totalIntensity: 126,
    farmExpenses: 0.19,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.9,
            to2: 3.0,
            to3: 4.0,
            sto: 16
        },
        motorOil: {
            eto: 0.48,
            to1: 0.62,
            to2: 7.7,
            to3: 13.6,
            sto: 13.6
        },
        transmissionOil: {
            to2: 4.2,
            to3: 4.2,
            sto: 39.2
        },
        lubricant: {
            to1: 0.1,
            to2: 0.3,
            to3: 0.58,
            sto: 0.58
        }
    }
};


/** МТЗ-82 */
export const mtz82: ITraktor = {
    maintenance: {
        to1: 2.7,
        to2: 6.9,
        to3: 19.8,
        sto: 3.5
    },
    totalIntensity: 126,
    farmExpenses: 0.19,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.9,
            to2: 3.0,
            to3: 4.0,
            sto: 16
        },
        motorOil: {
            eto: 0.48,
            to1: 0.62,
            to2: 7.7,
            to3: 13.6,
            sto: 13.6
        },
        transmissionOil: {
            to2: 4.2,
            to3: 4.2,
            sto: 39.2
        },
        lubricant: {
            to1: 0.1,
            to2: 0.3,
            to3: 0.58,
            sto: 0.58
        }
    }
};

/** ЮМЗ-6Л */
export const umz6l: ITraktor = {
    maintenance: {
        to1: 2.5,
        to2: 7.3,
        to3: 26.1,
        sto: 14.9
    },
    totalIntensity: 180,
    farmExpenses: 0.19,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.9,
            to2: 3.0,
            to3: 4.0,
            sto: 16
        },
        motorOil: {
            eto: 0.48,
            to1: 0.62,
            to2: 7.7,
            to3: 13.6,
            sto: 13.6
        },
        transmissionOil: {
            to2: 4.2,
            to3: 4.2,
            sto: 39.2
        },
        lubricant: {
            to1: 0.1,
            to2: 0.3,
            to3: 0.58,
            sto: 0.58
        }
    }
};

/** Т-40М */
export const t40m: ITraktor = {
    maintenance: {
        to1: 2.0,
        to2: 6.8,
        to3: 18.0,
        sto: 19.8
    },
    totalIntensity: 116,
    farmExpenses: 0.22,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.6,
            to2: 2.0,
            to3: 2.5,
            sto: 2.0
        },
        motorOil: {
            eto: 0.38,
            to1: 0.47,
            to2: 5.7,
            to3: 10.2,
            sto: 2.0
        },
        transmissionOil: {
            to2: 1.3,
            to3: 2.5,
            sto: 19.3
        },
        lubricant: {
            to1: 0.05,
            to2: 0.1,
            to3: 0.1,
            sto: 0.1
        }
    }
};


/** Т-40АМ */
/** По ГСМ информация отсутствовала, взял от трактора: Т-40М */
export const t40am: ITraktor = {
    maintenance: {
        to1: 2.0,
        to2: 6.8,
        to3: 18.0,
        sto: 19.8
    },
    totalIntensity: 116,
    farmExpenses: 0.22,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.6,
            to2: 2.0,
            to3: 2.5,
            sto: 2.0
        },
        motorOil: {
            eto: 0.38,
            to1: 0.47,
            to2: 5.7,
            to3: 10.2,
            sto: 2.0
        },
        transmissionOil: {
            to2: 1.3,
            to3: 2.5,
            sto: 19.3
        },
        lubricant: {
            to1: 0.05,
            to2: 0.1,
            to3: 0.1,
            sto: 0.1
        }
    }
};


/** Т-25А */
export const t25a: ITraktor = {
    maintenance: {
        to1: 2.0,
        to2: 7.1,
        to3: 25.2,
        sto: 4.6
    },
    totalIntensity: 210,
    farmExpenses: 0.22,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.6,
            to2: 1.2,
            to3: 1.8,
            sto: 5.0
        },
        motorOil: {
            eto: 0.16,
            to1: 0.24,
            to2: 3.7,
            to3: 6.5,
            sto: 6.5
        },
        transmissionOil: {
            to1: 0.03,
            to2: 1.3,
            to3: 1.3,
            sto: 12.9
        },
        lubricant: {
            to1: 0.04,
            to2: 0.07,
            to3: 0.3,
            sto: 0.3
        }
    }
};


/** Т-25А1 */
/** По ГСМ информация отсутствовала, взял от трактора: Т-25А */
export const t25a1: ITraktor = {
    maintenance: {
        to1: 2.0,
        to2: 7.1,
        to3: 25.2,
        sto: 4.6
    },
    totalIntensity: 210,
    farmExpenses: 0.22,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.6,
            to2: 1.2,
            to3: 1.8,
            sto: 5.0
        },
        motorOil: {
            eto: 0.16,
            to1: 0.24,
            to2: 3.7,
            to3: 6.5,
            sto: 6.5
        },
        transmissionOil: {
            to1: 0.03,
            to2: 1.3,
            to3: 1.3,
            sto: 12.9
        },
        lubricant: {
            to1: 0.04,
            to2: 0.07,
            to3: 0.3,
            sto: 0.3
        }
    }
};


/** Т-16 */
export const t16: ITraktor = {
    maintenance: {
        to1: 0.9,
        to2: 2.7,
        to3: 7.7,
        sto: 1.8
    },
    totalIntensity: 259,
    farmExpenses: 0.15,
    fuelMaterials: {
        dieselFuel: {
            to1: 0.6,
            to2: 1.2,
            to3: 1.8,
            sto: 5.0
        },
        motorOil: {
            eto: 0.16,
            to1: 0.24,
            to2: 3.7,
            to3: 6.5,
            sto: 6.5
        },
        transmissionOil: {
            to1: 0.03,
            to2: 1.3,
            to3: 1.3,
            sto: 12.9
        },
        lubricant: {
            to1: 0.04,
            to2: 0.07,
            to3: 0.3,
            sto: 0.3
        }
    }
};


// Заполняем главный массив созданными объектами тракторов.
tractorsLibrary = { t130m, t100m, k700a, k701, t4a, dt75m, t150k, t70s, mtz80, mtz82, umz6l, t40m, t40am, t25a, t25a1, t16 };

/** Список с тракторами для Select */
export let TraktorsList = _.stubArray();
/** Получаем названия всех тракторов */
_.forEach(tractorsLibrary, (value, traktorCaption) => TraktorsList.push({key: traktorCaption, value: traktorCaption, text: traktorCaption.toUpperCase()}))