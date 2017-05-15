// import * as _ from 'lodash';
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
} from '../constants/constants';


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
        this.wildCallback = callback;
        // Установка уровня по-умолчанию при нициализации.
        this.level = 0;
    }


    /** Функция-callback */
    private callback = (param: string) => {
        // Отображаем компоненты.
        switch (param) {
            case 'operationCount':
                if (this.level < 1) this.level = 1;
                break;
            case 'fieldArea':
                if (this.level < 2) this.level = 2;
                break;
            case 'workType':
                if (this.level < 3) this.level = 3;
                break;
            case 'operationCaption':
                if (this.level < 4) this.level = 4;
                break;
            case 'selectTraktor':
                if (this.level < 5) this.level = 5;
                break;
            case 'selectMachine':
                if (this.level < 6) this.level = 6;
                break;
            case 'cargoType':
                if (this.level < 7) this.level = 7;
                break;
            case 'unitsCount':
                if (this.level < 8) this.level = 8;
                break;
            case 'machineCount':
                if (this.level < 9) this.level = 9;
                break;
            case 'workersCount':
                if (this.level < 10) this.level = 10;
                break;
        }
        // Вызов внешней функции.
        this.wildCallback(param);
    };


    /** Внешняя функция */
    private wildCallback: any;
    /** Текцщий уровень приложения */
    private level: number;


    /** Количество технологических операций.*/
    private operationCount: number;
    /** Площадь поля. */
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


    /** Геттер уровня приложения */
    getAppLevel() {
        return this.level;
    }


    /** Сеттер количества операций */
    setOperationCount(count: number) {
        // Нельзя установить больше MAX_COUNT.
        if (count > MAX_OPERATION_COUNT) return;
        // Устанавливаем новое значение.
        this.operationCount = count;

        this.callback(`operationCount`);
    };


    /** Сеттер площади поля */
    setFieldArea(area: number) {
        // Устанавливаем новое значение.
        this.fieldArea = area;

        this.callback(`fieldArea`);
    };


    /** Сеттер типа проводимых работ */
    setWorkType(wType: OperationType) {
        // Устанавливаем новое значение.
        this.workType = wType;

        this.callback(`workType`);
    };


    /** Сеттер названия операции */
    setOperationCaption(caption: string) {
        // Устанавливаем новое значение.
        this.operationCaption = caption;

        this.callback(`operationCaption`);
    };


    /** Сеттер выбора трактора */
    setSelectTraktor(traktor: ITraktor) {
        // Устанавливаем новое значение.
        this.selectedTraktor = traktor;

        this.callback(`selectTraktor`);
    };


    /** Сеттер выбора машины */
    setSelectMachine(machine: string) {
        // Устанавливаем новое значение.
        this.selectedMachine = machine;

        this.callback(`selectMachine`);
    };


    /** Сеттер выбора типа груза */
    setCargoType(cType: CargoType) {
        // Устанавливаем новое значение.
        this.cargoType = cType;

        this.callback(`cargoType`);
    };


    /** Сеттер выбора типа груза */
    setUnitsCount(count: number) {
        // Устанавливаем новое значение.
        this.unitsCount = count;

        this.callback(`unitsCount`);
    };


    /** Сеттер установки количества машин, входящих в агрегат */
    setMachineCount(count: number) {
        // Устанавливаем новое значение.
        this.machineCount = count;

        this.callback(`machineCount`);
    };


    /** Сеттер установки количества рабочих, требующихся для обслуживания */
    setWorkersCount(count: number) {
        // Устанавливаем новое значение.
        this.workersCount = count;

        this.callback(`workersCount`);
    };
}

export default App;