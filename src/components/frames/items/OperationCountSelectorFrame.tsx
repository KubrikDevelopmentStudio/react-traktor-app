/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Select,
    Grid
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
        // Стейт по-умолчанию.
        this.state = {
            // Отображение компонента по-умолчанию.
            componentShow: true
        };
    }


    /**
     * Получение новых свойств компонентов.
     */
    componentWillReceiveProps(newProp: any) {
        // Получение нового зщначения.
        const { componentShow } = newProp;
        // Применяем новое значение.
        this.setState({ componentShow });
    }


    /**
     * Состояние компонента.
     */
    state: any;


    /**
     * Рендер объекта.
     */
    render() {
        // Получаем необходимые свойства.
        const { componentShow } = this.state;
        // Проверяем условие отображение компонента.
        if (!componentShow) return null;
        // Отрисовываем объект.
        return (
            <Grid celled>
                <Grid.Row columns={2}>
                    <Grid.Column textAlign='center' verticalAlign='middle'>
                        <label>Выберите количество технолигиеский операций</label>
                    </Grid.Column>
                    <Grid.Column>
                        <Select placeholder='Количество технологических операций' options={operationCount} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}