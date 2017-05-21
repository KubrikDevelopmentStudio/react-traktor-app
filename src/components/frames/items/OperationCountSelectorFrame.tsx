/** Импортируем библиотеку для обработки данных */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Select,
    Grid,
    Segment,
    Header,
    Icon
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
} from '../../../constants/constants';
import '../../../constants/styles.css';


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
            <Segment className='main-blocks main-blocks-first-line'>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <Header as='h4' icon>
                                <Icon name='numbered list' />
                                {`Операции`}
                                <Header.Subheader>
                                    {`Выберите количество технолигиеский операций`}
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <Select placeholder='Количество технологических операций' options={operationCount} value={selectedValue} onChange={this.handleChange} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}