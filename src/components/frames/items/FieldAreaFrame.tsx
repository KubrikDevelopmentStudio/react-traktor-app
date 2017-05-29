/** Импортируем библиотеку для работы с данными */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем необходимые компоненты Semantic */
import {
    Grid,
    Input,
    Label,
    Segment,
    Header,
    Icon
} from 'semantic-ui-react';
/** Класс управления логикой приложения */
import App from '../../../classes/App';
import {
    IAppTransfer
} from '../../../interfaces/AppInterfaces';
import {
    IErrorLabel
} from '../../../interfaces/AppInterfaces';
import '../../../constants/styles.css';


/**
 * Сообщение об ошибке.
 */
class ErrorLabel extends React.Component<IErrorLabel, null> {
    /**
     * Конструктор класса.
     */
    constructor(props: any) {
        // Прокидываем пропы.
        super(props);
        this.state = {
            // Ошибочный ввод.
            errorInput: false
        };
    }


    /** Состояние компонента */
    state: any;


    /**
     * Получение новых свойств.
     */
    componentWillReceiveProps(newProps: any) {
        // Получем информацию об ошибке.
        this.setState({ errorInput: newProps.errorInput });
    }


    /**
     * Рендер компонента.
     */
    render() {
        // Получаем пропы.
        const { errorInput } = this.state;
        // Если не нужно отображать компонент.
        if (!errorInput) return null;
        // Отображаем компонент
        return (<Label basic color='red' pointing>Можно вводить только цифры!</Label>);
    }
}


/**
 * Компонент ввода площади поля.
 */
export default class FieladArea extends React.Component<IAppTransfer, null> {
    /**
     * Конструктор.
     */
    constructor(props: any) {
        // Прокидываем пропы.
        super(props);
        // Стейт по-умолчанию.
        this.state = {
            // Значение введенной площади.
            areaValue: _.stubString(),
            // Значение отображения компонента.
            componentShow: props.componentShow,
            // Ошибочный ввод.
            errorInput: false
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
        // Получаем код введенного символа.
        const charCode: number = value.charCodeAt(value.length - 1);
        // Смотрим, чтобы онр был в диапозоне цифр: коды от 48 до 57.
        if (charCode < 48 || charCode > 57) {
            // Выводим сообщение, что нужно вводить только цифры.
            this.setState({ errorInput: true });
            return;
        }
        // Обновляем стейт.
        this.setState({ errorInput: false, areaValue: value });
        // Смотрим, что мы не стерли данные в процессе.
        if (value.length > 0) {
            // Устанавливаем следующий уровень приложения.
            this.app.setFieldArea(parseInt(value));
        } else {
            // Обнуляем значение в инфо таблице.
            this.app.setFieldArea(-1)
            // Возвращаемся на текущий уровень.
            this.app.setAppLevel(1);
        }
    }


    /**
     * Получение новых свойств компонентов.
     */
    componentWillReceiveProps(newProp: any) {
        // Получение нового зщначения.
        const { componentShow } = newProp;
        // Применяем новое значение.
        this.setState({ componentShow });
        // Проверка на уже введенные данные ранее.
        if ((this.state.componentShow === false && componentShow) && this.state.areaValue.toString().length > 0) {
            this.app.setFieldArea(parseInt(this.state.areaValue))
        }
    }


    /**
     * Рендер компонента.
     */
    render() {
        // Отрисовываем компонент.
        // Получаем необходимые свойства.
        const { areaValue, componentShow, errorInput } = this.state;
        // Проверяем условие отображение компонента.
        if (!componentShow) return null;
        // Отрисовываем объект.
        return (
            <Segment className='main-blocks main-blocks-first-line'>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <Header as='h4' icon>
                                <Icon name='codepen' />
                                {`Площадь поля`}
                                <Header.Subheader>
                                    {`Введите площадь поля`}
                                </Header.Subheader>
                            </Header>
                        </Grid.Column>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <Input
                                error={errorInput}
                                placeholder='Площадь поля'
                                value={areaValue}

                                onChange={this.handleChange}
                            />
                            <ErrorLabel errorInput={errorInput} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        );
    }
}