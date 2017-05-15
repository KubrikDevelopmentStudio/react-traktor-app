/** Импортируем библиотеку для обработки данных */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Dropdown,
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
    TraktorsList,
    tractorsLibrary
} from '../../../constants/TractorsCharacteristics'


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
            selectedTraktor: _.stubString()
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
        this.app.setSelectTraktor(tractorsLibrary[value]);
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
        const { componentShow, selectedTraktor } = this.state;
        // Проверяем условие отображение компонента.
        if (!componentShow) return null;
        // Отрисовываем объект.
        return (
            <Segment>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <label>Выберите трактор из списка</label>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown placeholder='Выберите тип проводимой операции'
                                fluid
                                search
                                selection
                                noResultsMessage={`Искомый тип работ не найден!`}
                                options={TraktorsList}
                                defaultValue={selectedTraktor}
                                onChange={this.handleChange}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}