/** Импортируем библиотеку для работы с данными */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем необходимые компоненты Semantic */
import {
    Grid,
    Dropdown,
    Segment,
    Header, 
    Icon
} from 'semantic-ui-react';
/** Класс управления логикой приложения */
import App from '../../../classes/App';
/** Импорт интерфейса для проброски класса приложения */
import {
    IAppTransfer
} from '../../../interfaces/AppInterfaces';
/** Импорт списка возможных работ */
import {
    OperationTypeList
} from '../../../constants/constants'


/**
 * Компонент ввода площади поля.
 */
export default class OperationType extends React.Component<IAppTransfer, null> {
    /**
     * Конструктор.
     */
    constructor(props: any) {
        // Прокидываем пропы.
        super(props);
        // Стейт по-умолчанию.
        this.state = {
            // Значение отображения компонента.
            componentShow: props.componentShow,
            // По умолчанию выбранный тип работ.
            selectedWorktype: _.stubString()
        };
        // Получаем главный класс приложения.
        this.app = props.app;
    }


    /** Состояние компонента */
    state: any;
    /** Главный класс приложения */
    app: App;


    /**
     * Ввод нового значения площади поля.
     */
    handleChange = (event: any, { value }: any) => {
        // Выбор типа работ.
        this.setState({ selectedWorktype: value })
        // Обновления ифнормации в классе.
        this.app.setWorkType(parseInt(value));
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
     * Рендер компонента.
     */
    render() {
        // Отрисовываем компонент.
        // Получаем необходимые свойства.
        const { componentShow, selectedWorktype } = this.state;
        // Проверяем условие отображение компонента.
        if (!componentShow) return null;
        // Отрисовываем объект.
        return (
            <Segment style={{width: 620, height: 130}}>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                             <Header as='h4' icon>
                                <Icon name='legal' />
                                {`Проводимые работы`}
                                <Header.Subheader>
                                    {`Выберите тип проводимой работы`}
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <Dropdown placeholder='Выберите тип проводимой операции'
                                fluid
                                search
                                selection
                                noResultsMessage={`Искомый тип работ не найден!`}
                                options={OperationTypeList}
                                defaultValue={selectedWorktype}
                                onChange={this.handleChange}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}