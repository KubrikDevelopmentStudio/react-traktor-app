/** Импортируем Lodash */
import * as _ from 'lodash';
/** Импортируем React */
import * as React from 'react';
/** Импортируем необъодимые объекты из Semantic UI */
import {
    Segment,
    Table,
    Icon,
    Progress,
    Button
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
    /** Переменная для подсчета прогресса ввода данных. */
    compleatePercent: number = 0;

    /**
     * Создание строчек с информацией.
     * @param {any} data Данные.
     * @return {any}
     */
    createRows = (data: any): any => {
        // если пустые данные пришли.
        if (_.isUndefined(data) || _.isEmpty(data)) {
            return (
                <Table.Row key={1} warning textAlign='center' >
                    <Table.Cell colSpan={2}>
                        {`Данные отсутствуют!`}
                    </Table.Cell>
                </Table.Row>
            );
        }
        // Обнуляем главную переменную для подсчета.
        this.compleatePercent = 0;
        // Переменная для индекса.
        let index: number = 1;
        // Если данные имеются, подгружаем их. 
        const nData: any = _.map(data, (d: any) => {       
            // Завершен ли шаг.
            const compleate: boolean = (!_.isUndefined(d.value) && d.value.toString().length > 0 && d.value != -1) ? true : false;
            // Подсчитываем количество введенных данных.
            if (compleate) this.compleatePercent++;
            // Генерация компонента.
            return (
                <Table.Row key={index} warning={!compleate} positive={compleate}>
                    <Table.Cell textAlign='center'>{index++}</Table.Cell>
                    <Table.Cell>{d.caption}</Table.Cell>
                    <Table.Cell>{compleate ? d.value : 'Ожидание ввода данных...'}</Table.Cell>
                    <Table.Cell textAlign='center'>{compleate ? <Icon name='checkmark' size='large' /> : <Icon loading name='spinner' size='large' />}</Table.Cell>
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
        // Считаем проценты...
        // Высчитываем количество шагов...
        const dataLen: number = 10;
        // Получаем делитель.
        const determ: number = this.compleatePercent === 0 ? -1 : this.compleatePercent;
        // Получаем проценты.
        const percent: number = determ === -1 ? 0 : (determ / dataLen) * 100;
        // Готовим экшн под таблицей.
        let action: any = null;
        if (percent < 100) {
            action = <Progress percent={percent} progress warning indicating>
                {`Заполнение необходимыми данными`}
            </Progress>;
        } else {
            action = <Button fluid positive content='Подсчитать затраты' />;
        }
        // Отрисовываем компонент.
        return (
            <Segment>
                <Table celled structured fixed compact='very'>
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
                {action}
            </Segment>
        );
    }
}