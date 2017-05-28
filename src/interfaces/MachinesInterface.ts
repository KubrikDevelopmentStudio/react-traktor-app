import {
    OperationType
} from '../constants/constants'

/** Интерфейс, описывающий машины */
interface IMachine {
    // Название модели машины.
    model: string,
    // Стоимость.
    coast: number,
    // Стоимость часа производства.
    hourOfProdaction: number,
    // Стоимость загрузки.
    loadCoast: number,
    // Тип машины (для чего предназначена)
    operattionType: OperationType[]
}

export default IMachine;