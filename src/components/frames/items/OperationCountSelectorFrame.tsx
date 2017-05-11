/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Select
} from 'semantic-ui-react';
import {
    operationCount
} from '../../../constants/constants'


/**
 * Объект выбора количестватехнологических операций.
 */
export default class OperationCountFrame extends React.Component<{}, null> {
    /**
     * Конструктор класса.
     */
    constructor(props: any) {
        // Прокидываем свойства в класс.
        super(props);
    }


    /**
     * Рендер объекта.
     */
    render() {
        // Отрисовываем объект.
        return (<Select placeholder='Select your country' options={operationCount} />);
    }
}