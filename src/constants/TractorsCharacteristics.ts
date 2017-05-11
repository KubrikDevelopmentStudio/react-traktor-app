/**
 * Характеристики Всех моделей тракторов.
 */


/** Интерфейс, описывающий структуру объекта Трактор */
import Traktor from '../interfaces/TractorsInterface'
/** Вспомогательная библиотека для работы с данными */
import * as _ from 'lodash';


/** Массив с объектами тракторов */
export const tractorsLibrary: any = _.stubArray(); 


/** T-130M */
export const t130m: Traktor = {
    maintenance: {
        to1: 3.2,
        to2: 15.3,
        to3: 28.8,
        sto: 13.5
    },
    totalIntensity: 137,
    farmExpenses: 0.18
};


/** T-100M */
export const t100m: Traktor = {
    maintenance: {
        to1: 3.1,
        to2: 14.7,
        to3: 27.0,
        sto: 13.5
    },
    totalIntensity: 112,
    farmExpenses: 0.18
};


/** К-700А */
export const k700a: Traktor = {
    maintenance: {
        to1: 2.5,
        to2: 14.7,
        to3: 27.0,
        sto: 13.5
    },
    totalIntensity: 112,
    farmExpenses: 0.18
};


/** К-701 */
export const k701: Traktor = {
    maintenance: {
        to1: 2.2,
        to2: 11.6,
        to3: 25.2,
        sto: 18.3
    },
    totalIntensity: 48,
    farmExpenses: 0.12
};


/** Т-4А */
export const t4a: Traktor = {
    maintenance: {
        to1: 1.7,
        to2: 5.5,
        to3: 31.8,
        sto: 16.5
    },
    totalIntensity: 76,
    farmExpenses: 0.16
};


/** ДТ-75М */
export const dt75m: Traktor = {
    maintenance: {
        to1: 2.7,
        to2: 6.4,
        to3: 21.4,
        sto: 17.1
    },
    totalIntensity: 103,
    farmExpenses: 0.17
};


/** Т-150К */
export const t150k: Traktor = {
    maintenance: {
        to1: 1.9,
        to2: 6.8,
        to3: 42.3,
        sto: 5.3
    },
    totalIntensity: 54,
    farmExpenses: 0.14
};


/** Т-70С */
export const t70s: Traktor = {
    maintenance: {
        to1: 2.3,
        to2: 6.9,
        to3: 14.0,
        sto: 6.8
    },
    totalIntensity: 70,
    farmExpenses: 0.12
};


/** МТЗ-80 */
export const mtz80: Traktor = {
    maintenance: {
        to1: 2.7,
        to2: 6.9,
        to3: 19.8,
        sto: 3.5
    },
    totalIntensity: 126,
    farmExpenses: 0.19
};


/** МТЗ-82 */
export const mtz82: Traktor = {
    maintenance: {
        to1: 2.7,
        to2: 6.9,
        to3: 19.8,
        sto: 3.5
    },
    totalIntensity: 126,
    farmExpenses: 0.19
};

/** ЮМЗ-6Л */
export const umz6l: Traktor = {
    maintenance: {
        to1: 2.5,
        to2: 7.3,
        to3: 26.1,
        sto: 14.9
    },
    totalIntensity: 180,
    farmExpenses: 0.19
};

/** Т-40М */
export const t40m: Traktor = {
    maintenance: {
        to1: 2.0,
        to2: 6.8,
        to3: 18.0,
        sto: 19.8
    },
    totalIntensity: 116,
    farmExpenses: 0.22
};


/** Т-40АМ */
export const t40am: Traktor = {
    maintenance: {
        to1: 2.0,
        to2: 6.8,
        to3: 18.0,
        sto: 19.8
    },
    totalIntensity: 116,
    farmExpenses: 0.22
};


/** Т-25А */
export const t25a: Traktor = {
    maintenance: {
        to1: 2.0,
        to2: 7.1,
        to3: 25.2,
        sto: 4.6
    },
    totalIntensity: 210,
    farmExpenses: 0.22
};


/** Т-25А1 */
export const t25a1: Traktor = {
    maintenance: {
        to1: 2.0,
        to2: 7.1,
        to3: 25.2,
        sto: 4.6
    },
    totalIntensity: 210,
    farmExpenses: 0.22
};


/** Т-16 */
export const t16: Traktor = {
    maintenance: {
        to1: 0.9,
        to2: 2.7,
        to3: 7.7,
        sto: 1.8
    },
    totalIntensity: 259,
    farmExpenses: 0.15
};
