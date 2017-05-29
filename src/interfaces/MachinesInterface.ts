import {
    OperationType
} from '../constants/constants'

/** Интерфейс, описывающий машины */
interface IMachine {
    // Ключ модели для индекса.
    modelId: string,
    // Название модели машины.
    model: string,
    // Стоимость.
    coast: number,
    // Стоимость часа производства.
    hourOfProdaction: number,
    // Стоимость загрузки.
    loadCoast: number,
    // Тип машины (для чего предназначена)
    operationType: OperationType[],
    // Коэффициент отчислений.
    coefficientOfDeductions: number[]
}

export default IMachine;