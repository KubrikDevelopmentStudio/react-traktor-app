/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Header, Icon
} from 'semantic-ui-react';


/**
 * Основной объект приложения.
 */
export default class HeaderFrame extends React.Component<{}, null> {
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
        return (
            <Header as='h2' icon>
                <Icon name='calculator' />
                {`Расчет затрат`}
                <Header.Subheader>
                    {`Расчет приведенных затрат для предлагаемого варианта полевых механизированных работ`}
                </Header.Subheader>
            </Header>
        );
    }
}