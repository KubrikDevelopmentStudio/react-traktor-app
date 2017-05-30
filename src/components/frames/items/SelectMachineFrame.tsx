/** Импортируем библиотеку для обработки данных */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем визуальные объекты */
import {
    Dropdown,
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



/**
 * Объект выбора количестватехнологических операций.
 */
export default class SelectMachine extends React.Component<IAppTransfer, null> {
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
            selectedMachine: _.stubString(),
            machinesList: _.stubArray()
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
        this.setState({ selectedMachine: value });
        // Установка значения в главном классе приложения.
        this.app.setSelectMachine(value);
    }


    /**
     * Получение новых свойств компонентов.
     */
    componentWillReceiveProps(newProp: any) {
        // Получение нового зщначения.
        const { componentShow } = newProp;
        // Применяем новое значение.
        this.setState({ componentShow });
        // Получаем список машин, согласно выбранному типу проводимых работ.
        this.setState({
            machinesList: this.app.getMachinesList(),
        })
        // Проверка на уже введенные данные ранее.
        if ((this.state.componentShow === false && componentShow) && this.state.selectedMachine.length > 0) {
            this.app.setSelectMachine(this.state.selectedMachine)
        }
    }


    /**
     * Рендер объекта.
     */
    render() {
        // Получаем необходимые свойства.
        const { componentShow, selectedMachine, machinesList } = this.state;
        // Проверяем условие отображение компонента.
        if (!componentShow) return null;
        // Отрисовываем объект.
        return (
            <Segment className="main-blocks main-blocks-first-line">
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <Header as='h4' icon>
                                <Icon name='shipping' />
                                {`Рабочая машина`}
                                <Header.Subheader>
                                    {`Рабочая машина для выполнения`}
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <Dropdown placeholder='Выберите машину'
                                fluid
                                search
                                selection
                                noResultsMessage={`Искомая машина не найдена!`}
                                options={machinesList}
                                defaultValue={selectedMachine}
                                onChange={this.handleChange}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}