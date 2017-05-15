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
};


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
};


/** Список операций для вывода */
export const OperationTypeList = [
    {key: OperationType.ContinuousCultivation, value: OperationType.ContinuousCultivation, text: `Лущение, пахота, дискование, сплошная культивация, боронование`},
    {key: OperationType.InterrowCultivation, value: OperationType.InterrowCultivation, text: `Нарезка гребней, междурядная культивация`},
    {key: OperationType.Planting, value: OperationType.Planting, text: `Посев, посадка`},
    {key: OperationType.CleaningPotatoes, value: OperationType.CleaningPotatoes, text: `Кошение ботвы, уборка картофеля ,свеклы`},
    {key: OperationType.HarvestingOfHay, value: OperationType.HarvestingOfHay, text: `Заготовка сена, сенажа, силоса`},
    {key: OperationType.CleaningOfCereals, value: OperationType.CleaningOfCereals, text: `Уборка зерновых`},
    {key: OperationType.Fertilizer, value: OperationType.Fertilizer, text: `Транспортировка и разбрасывание минеральных и органических удобрений`},
    {key: OperationType.TransportWorks, value: OperationType.TransportWorks, text: `Погрузочные, транспортные работы, буртование`},
    {key: OperationType.ChemicalProtection, value: OperationType.ChemicalProtection, text: `Химзащита, снегозадержание`}
];


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