/** Импортируем вспомогательную библиотеку */
import * as _ from 'lodash';


/** Максимум технологических операций */
export const MAX_OPERATION_COUNT = 14;
/** Массив для Select с количеством технологических операций */
export let operationCount = _.stubArray();
/** Заполняем операции */
for (let i = 0; i < MAX_OPERATION_COUNT; i++) {
    // Заполняем в необходимом виде.
    operationCount.push({key: i, value: (i + 1), text: `${i + 1}`});
}

/** Множество возможных операций */
export const enum OperationType {
    // Лущение, пахота, дискование, сплошная культивация, боронование.
    ContinuousCultivation,
    // Нарезка гребней, междурядная культивация.
    InterrowCultivation,
    // Посев, посадка.
    Planting,
    // Кошение ботвы, уборка картофеля ,свеклы.
    CleaningPotatoes,
    // Заготовка сена, сенажа, силоса.
    HarvestingOfHay,
    // Уборка зерновых.
    CleaningOfCereals,
    // Транспортировка и разбрасывание минеральных и органических удобрений.
    Fertilizer,
    // Погрузочные, транспортные работы, буртование.
    TransportWorks,
    // Химзащита, снегозадержание.
    ChemicalProtection
}


/** Тип груза для перевозки */
export const enum CargoType {
    // Сено.
    Hay,
    // Сенаж.
    Senage,
    // Силос.
    Silage,
    // Зерно.
    Corn,
    // Картофель.
    Potatoes,
    // Минеральные удобрения.
    MineralFertilizers,
    // Органические удобрения.
    OrganicFertilizers
}