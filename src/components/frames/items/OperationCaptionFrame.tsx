/** Импортируем библиотеку для работы с данными */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем необходимые компоненты Semantic */
import {
    Grid,
    Input,
    Label,
    Segment
} from 'semantic-ui-react';
/** Класс управления логикой приложения */
import App from '../../../classes/App';
import {
    IAppTransfer
} from '../../../interfaces/AppInterfaces';
import {
    IErrorLabel
} from '../../../interfaces/AppInterfaces';
import {
    MIN_OPERATION_CAPTION_SIZE
} from '../../../constants/constants';


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
        return (<Label basic color='red' pointing>{`Минимальная длина ${MIN_OPERATION_CAPTION_SIZE} символа(-ов)!`}</Label>);
    }
}


/**
 * Компонент ввода площади поля.
 */
export default class OperationCaption extends React.Component<IAppTransfer, null> {
    /**
     * Конструктор.
     */
    constructor(props: any) {
        // Прокидываем пропы.
        super(props);
        // Стейт по-умолчанию.
        this.state = {
            // Значение введенной площади.
            operCaption: _.stubString(),
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
        // Обновляем стейт.
        this.setState({ errorInput: false, operCaption: value });
        // Смотрим, что мы не стерли данные в процессе.
        if (value.length >= MIN_OPERATION_CAPTION_SIZE) {
            // Убираем сообщение об ошибке.
            this.setState({ errorInput: false });
            // Устанавливаем следующий уровень приложения.
            this.app.setOperationCaption(value);
        } else {
            // Выводим сообщение о минимальной длине ввода в три символа.
            this.setState({ errorInput: true });
            // Возвращаемся на текущий уровень.
            this.app.setAppLevel(3);
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
    }


    /**
     * Рендер компонента.
     */
    render() {
        // Отрисовываем компонент.
        // Получаем необходимые свойства.
        const { operCaption, componentShow, errorInput } = this.state;
        // Проверяем условие отображение компонента.
        if (!componentShow) return null;
        // Отрисовываем объект.
        return (
            <Segment>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column textAlign='center' verticalAlign='middle'>
                            <label>Введите произвольное название операции</label>
                        </Grid.Column>
                        <Grid.Column>
                            <Input
                                error={errorInput}
                                placeholder='Наименование операции'
                                value={operCaption}

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