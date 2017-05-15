/** Импортируем библиотеку для обработки данных */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Select,
    Grid,
    Segment
} from 'semantic-ui-react';
/** Класс управления логикой приложения */
import App from '../../../classes/App';
/** Импорт интерфейса для проброски класса приложения */
import {
    IAppTransfer,
} from '../../../interfaces/AppInterfaces';
/** Импорт количества возможных операций */
import {
    operationCount
} from '../../../constants/constants'


/**
 * Объект выбора количестватехнологических операций.
 */
export default class OperationCountFrame extends React.Component<IAppTransfer, null> {
    /**
     * Конструктор класса.
     */
    constructor(props: any) {
        // Прокидываем свойства в класс.
        super(props);
        // Стейт по-умолчанию.
        this.state = {
            // Отображение компонента по-умолчанию.
            componentShow: props.componentShow,
            // Выбранное количество операций.
            selectedValue: _.stubString()
        };
        // Получаем главный класс приложения.
        this.app = props.app;
    }


    /** Состояние компонента */
    state: any;
    /** Главный класс приложения */
    app: App;


    /**
     * Событие выбора количества технологических операций.
     */
    handleChange = (event: any, { value }: any) => {
        // Установка нового значения.
        this.setState({ selectedValue: value });
        // Установка значения в главном классе приложения.
        this.app.setOperationCount(parseInt(value));
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
     * Рендер объекта.
     */
    render() {
        // Получаем необходимые свойства.
        const { componentShow, selectedValue } = this.state;
        // Проверяем условие отображение компонента.
        if (!componentShow) return null;
        // Отрисовываем объект.
        return (
            <Segment>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <label>Выберите количество технолигиеский операций</label>
                        </Grid.Column>
                        <Grid.Column>
                            <Select placeholder='Количество технологических операций' options={operationCount} value={selectedValue} onChange={this.handleChange} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}