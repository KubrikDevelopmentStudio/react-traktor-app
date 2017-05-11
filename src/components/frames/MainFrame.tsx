/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Segment,
    Form
} from 'semantic-ui-react';
import OperationCountFrame from './items/OperationCountSelectorFrame';


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
    }

    
    /**
     * Рендер объекта.
     */
    render() {
        // Отрисовываем объект.
        return (
            <Segment>
                <Form>
                    <Form.Field>

                    </Form.Field>
                </Form>
            </Segment>
        );
    }
}