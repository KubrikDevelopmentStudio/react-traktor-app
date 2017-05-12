import * as _ from 'lodash';
/** Импортируем интерфейс трактора */
import ITraktor from '../interfaces/TractorsInterface';
/** Тип выполняемых работ */
import {
    OperationType,
    CargoType
} from '../constants/constants';
/** Максимальное количество операций. */
import {
    MAX_OPERATION_COUNT
} from '../constants/constants'
/**
 * Основной класс с логикой приложения.
 */
class App {
    /**
     * Конструктор класса.
     * @param {any} callback callback-функция для обновления стейтов.
     */
    constructor(callback: any) {
        // Применение callback.
        this.callback = callback;
    }


    /** Функция-callback */
    private callback: any;


    /** Количество технологических операций.*/
    private operationCount: number;
    /** Площадь поля.*/
    private fieldArea: number;
    /** Тип проводимых работ.*/
    private workType: OperationType;
    /** Наименование операции.*/
    private operationCaption: string;
    /** Выбранный трактор.*/
    private selectedTraktor: ITraktor;
    /** Рабочая машина для выполнения.*/
    private selectedMachine: string;
    /** Груз для перевозки.*/
    private cargoType: CargoType;
    /** Количество агрегатов для выполнения данной технологической операции. */
    private unitsCount: number;
    /** Сколько рабочих машин входит в агрегат. */
    private machineCount: number;
    /** Сколько рабочих (кроме тракториста) обслуживают агрегат. */
    private workersCount: number;


    /** Сеттер количества операций */
    set setOperationCount(count: number) {
        // Нельзя установить больше MAX_COUNT.
        if (count > MAX_OPERATION_COUNT) return;
        // Устанавливаем новое значение.
        this.operationCount = count;
    };


    /** Сеттер площади поля */
    set setFieldArea(area: number) {
        // Устанавливаем новое значение.
        this.fieldArea = area;
    };


    /** Сеттер типа проводимых работ */
    set setWorkType(wType: OperationType) {
        // Устанавливаем новое значение.
        this.workType = wType;
    };


    /** Сеттер названия операции */
    set setOperationCaption(caption: string) {
        // Устанавливаем новое значение.
        this.operationCaption = caption;
    };


    /** Сеттер выбора трактора */
    set setSelectTraktor(traktor: ITraktor) {
        // Устанавливаем новое значение.
        this.selectedTraktor = traktor;
    };


    /** Сеттер выбора машины */
    set setSelectMachine(machine: string) {
        // Устанавливаем новое значение.
        this.selectedMachine = machine;
    };


    /** Сеттер выбора типа груза */
    set setCargoType(cType: CargoType) {
        // Устанавливаем новое значение.
        this.cargoType = cType;
    };


    /** Сеттер выбора типа груза */
    set setUnitsCount(count: number) {
        // Устанавливаем новое значение.
        this.unitsCount = count;
    };


    /** Сеттер установки количества машин, входящих в агрегат */
    set setMachineCount(count: number) {
        // Устанавливаем новое значение.
        this.machineCount = count;
    };


    /** Сеттер установки количества рабочих, требующихся для обслуживания */
    set setWorkersCount(count: number) {
        // Устанавливаем новое значение.
        this.workersCount = count;
    };
}

export default App;