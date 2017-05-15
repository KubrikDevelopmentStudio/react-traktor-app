/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Form
} from 'semantic-ui-react';
/** Импорт класса для управления логикой приложения */
import App from '../../classes/App';
/** Компонент выбора количества операций */
import OperationCountFrame from './items/OperationCountSelectorFrame';
/** Компонент ввода площади поля */
import FieldArea from './items/FieldAreaFrame';
/** Компонент выбора типа проводимых работ */
import OperationType from './items/OperationTypeFrame';


/**
 * Основной объект приложения.
 */
export default class MainFrame extends React.Component<{}, null> {
    /**
     * Конструктор класса.
     */
    constructor(props: any) {
        // Прокидываем свойства в класс.
        super(props);
        // Создаем экземпляр главного класса приложения.
        this.app = new App(this.callback);
    }

    callback = (cbParam: string) => {
        console.info(`Сработал callback с параметром: ${cbParam}!`);
        console.info(`Содержимое класса App: `, this.app);
        this.forceUpdate();
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
            </Form>
        );
    }
}