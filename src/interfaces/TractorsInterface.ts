interface ITraktor {
    // Трудоемкость одного ТО, ч.
    maintenance: {
        // Первое ТО.
        to1: number,
        // Второе ТО.
        to2: number,
        // Третье ТО.
        to3: number,
        // Супер ТО.
        sto: number
    },
    // Удельная суммарная трудоемкость ТО, ч/1000 усл. эт. га.
    totalIntensity: number,
    // Удельные затраты хозяйств, руб/усл. эт. га.
    farmExpenses: number,
    // Расход топливно-смазочных материалов.
    fuelMaterials?: {
        // Дизельное топливо.
        dieselFuel: {
            // Единица измерения.
            unit?: 'л',
            // Ежегодное ТО.
            eto?: number,
            // Первое ТО.
            to1?: number,
            // Второе ТО.
            to2?: number,
            // Третье ТО.
            to3?: number,
            // Супер ТО.
            sto?: number
        },
        // Моторное масло.
        motorOil: {
            // Единица измерения.
            unit?: 'кг',
            // Ежегодное ТО.
            eto?: number,
            // Первое ТО.
            to1?: number,
            // Второе ТО.
            to2?: number,
            // Третье ТО.
            to3?: number,
            // Супер ТО.
            sto?: number
        },
        // Трансмиссионное масло.
        transmissionOil?: {
            // Единица измерения.
            unit?: 'кг',
            // Ежегодное ТО.
            eto?: number,
            // Первое ТО.
            to1?: number,
            // Второе ТО.
            to2?: number,
            // Третье ТО.
            to3?: number,
            // Супер ТО.
            sto?: number
        },
        // Смазка пластичная.
        lubricant: {
            // Единица измерения.
            unit?: 'кг',
            // Ежегодное ТО.
            eto?: number,
            // Первое ТО.
            to1?: number,
            // Второе ТО.
            to2?: number,
            // Третье ТО.
            to3?: number,
            // Супер ТО.
            sto?: number
        }
    }
};

export default ITraktor;