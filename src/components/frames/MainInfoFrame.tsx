/** Импортируем Lodash */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем необъодимые объекты из Semantic UI */
import {
    Segment,
    Table,
    Icon
} from 'semantic-ui-react';
/** Импорт главного класса приложения */
import App from '../../classes/App';
/** импорт интерфейса приложения */
import {
    IAppTransfer
} from '../../interfaces/AppInterfaces'


/**
 * Компонент с общей информацией.
 */
export default class MainInfoFrame extends React.Component<IAppTransfer, null> {
    /**
     * Конструктор.
     * @param {any} props Свойства.
     */
    constructor(props: any) {
        // Прокидываем пропы.
        super(props);
        // Стейт по-умолчанию.
        this.state = {
            // Отображение компонента.
            componentShow: props.componentShow || true
        };
        // Прокидываем главный класс приложения.
        this.app = props.app;
    }


    /** Стейт компонента */
    state: any;
    /** Главный класс приложения */
    app: App;


    /**
     * Создание строчек с информацией.
     * @param {any} data Данные.
     * @return {any}
     */
    createRows = (data: any): any => {
        // если пустые данные пришли.
        if (_.isUndefined(data) || _.isEmpty(data)) {
            return (
                <Table.Row warning textAlign='center' >
                    <Table.Cell colSpan={2}>
                        Данные отсутствуют!
                    </Table.Cell>
                </Table.Row>
            );
        }
        // Переменная для индекса.
        let index: number = 1;
        // Если данные имеются, подгружаем их. 
        const nData: any = _.map(data, (d: any) => {
            // Завершен ли шаг.
            const compleate: boolean = !_.isUndefined(d.value) ? true : false;
            // Генерация компонента.
            return (
                <Table.Row warning={!compleate} positive={compleate}>
                    <Table.Cell textAlign='center'>{index++}</Table.Cell>
                    <Table.Cell>{d.caption}</Table.Cell>
                    <Table.Cell>{d.value}</Table.Cell>
                    <Table.Cell textAlign='center'>{compleate ? <Icon name='checkmark' size='large'/> : <Icon loading name='spinner' size='large'/>}</Table.Cell>
                </Table.Row>);
        });
        // Возвращаем данные.
        return nData;
    }


    /**
     * Получение новых пропов.
     */
    componentWillReceiveProps(newProps: any) {
        // Получаем свойства отображения компонента.
        const componentShow: boolean = newProps.componentShow;
        // Применяем стейт.
        this.setState({ componentShow });
    }


    /**
     * Рендер объекта.
     */
    render() {
        // Получаем данные из класса, для генерации элементов.
        const data: any = this.app.getData();
        // Создаем объекты.
        const rows = this.createRows(data);
        return (
            <Segment>
                <Table celled structured fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell width={2} textAlign='center'>{`№`}</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>{`Параметр`}</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>{`Значение`}</Table.HeaderCell>
                            <Table.HeaderCell width={2} textAlign='center'><Icon name='check square' size='large'></Icon></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {rows}
                    </Table.Body>
                </Table>
            </Segment>
        );
    }
}