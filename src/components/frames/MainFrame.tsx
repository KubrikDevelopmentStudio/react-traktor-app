/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Form
} from 'semantic-ui-react';
/** Импорт класса для управления логикой приложения */
import App from '../../classes/App';
import {
    IAppTransfer
} from '../../interfaces/AppInterfaces';
/** Компонент выбора количества операций */
import OperationCountFrame from './items/OperationCountSelectorFrame';
/** Компонент ввода площади поля */
import FieldArea from './items/FieldAreaFrame';
/** Компонент выбора типа проводимых работ */
import OperationType from './items/OperationTypeFrame';
/** Компонент выбора типа проводимых работ */
import OperationCaption from './items/OperationCaptionFrame';
/** Компонент выбора трактора */
import SelectTraktor from './items/SelectTraktorFrame';
/** Компонент выбора машины для выполнения */
import SelectMachine from './items/SelectMachineFrame';
/** Компонент выбора типа перевозимого груза */
import SelectCargoType from './items/SelectCargoTypeFrame';
/** Компонент выбора количества агрегатов */
import UnitsCountSelector from './items/UnitsCountSelectorFrame';
/** Компонент выбора количества машин входящих в агрегат */
import MachineCount from './items/MachineCountSelectorFrame';
/** Компонент выбора количества рабочих для обслуживания агрегата */
import WorkersCount from './items/WorkersCountFrame';


/**
 * Основной объект приложения.
 */
export default class MainFrame extends React.Component<IAppTransfer, null> {
    /**
     * Конструктор класса.
     */
    constructor(props: any) {
        // Прокидываем свойства в класс.
        super(props);
        // Создаем экземпляр главного класса приложения.
        this.app = props.app;
    }


    /**
     * Экземпляр класса для управления логикой приложения.
     */
    app: App;


    /**
     * Рендер объекта.
     */
    render() {
        // Получаем уровень приложения.
        const appLevel = this.app.getAppLevel();
        // Отрисовываем объект.
        return (
            <Form>
                <Form.Field>
                    <OperationCountFrame componentShow={true} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <FieldArea componentShow={appLevel >= 1} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <OperationType componentShow={appLevel >= 2} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <OperationCaption componentShow={appLevel >= 3} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <SelectTraktor componentShow={appLevel >= 4} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <SelectMachine componentShow={appLevel >= 5} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <SelectCargoType componentShow={appLevel >= 6} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <UnitsCountSelector componentShow={appLevel >= 7} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <MachineCount componentShow={appLevel >= 8} app={this.app} />
                </Form.Field>
                <Form.Field>
                    <WorkersCount componentShow={appLevel >= 9} app={this.app} />
                </Form.Field>
            </Form>
        );
    }
}