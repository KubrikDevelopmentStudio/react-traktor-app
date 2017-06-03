import * as _ from 'lodash';
import * as React from 'react';
import { Button, Header, Icon, Modal, Table } from 'semantic-ui-react'

import App from '../../classes/App';
import {
    IAppTransfer
} from '../../interfaces/AppInterfaces';

/**
 * Компонент с отображениями результата.
 */
export default class ResultTable extends React.Component<IAppTransfer, null> {
    /**
     * Конструктор.
     * @param props Свойства.
     */
    constructor(props: any) {
        // Прокидываем пропы дальше.
        super(props);
        // Стейт по-умолчанию.
        this.state = {
            // Отображения компонента.
            show: false
        };
        // Прокидываем объект класса.
        this.app = props.app;
    }


    /**
     * Состояние компонента.
     */
    state: any;


    /**
     * Объект класса приложения.
     */
    app: App;

    createRows(data: any) {
        return _.map(data, (param: any) =>
            <Table.Row>
                <Table.Cell>{param.caption}</Table.Cell>
                <Table.Cell>{param.value}</Table.Cell>
                <Table.Cell>{param.unit}</Table.Cell>
            </Table.Row>
        );
    }

    handleClose = (e: any) => {
        this.app.setShowResult(false);
        this.setState({show: false});
    }

    handleReload = (e: any) => {
        this.setState({show: false}, () => window.location.reload());
    }

    /**
     * Получение новый свойств компонентом.
     * @param newProp Новые свойства.
     */
    componentWillReceiveProps(newProp: any) {
        // Получаем необходимые свойства.
        // Применяем стейт.
        this.setState({ show: this.app.getShowResultTable() });
    }


    /**
     * Рендер объекта.
     */
    render() {
        // Получаем необходимые свойтсва.
        const { show } = this.state;
        if (!show) return null;

        const tableBody: any = this.createRows(this.app.getResults());
        return (
            <Modal open={show} basic size='small'>
                <Header icon='line chart' content="Результаты расчётов" />
                <Modal.Content>
                    <Table inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>{`Параметры`}</Table.HeaderCell>
                                <Table.HeaderCell>{`Результаты`}</Table.HeaderCell>
                                <Table.HeaderCell>{`Единица измерения`}</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {tableBody}
                        </Table.Body>

                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell>3 People</Table.HeaderCell>
                                <Table.HeaderCell>2 Approved</Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='orange' inverted onClick={this.handleClose}>
                        <Icon name='refresh' /> {`Изменить данные`}
                    </Button>
                    <Button color='red' inverted onClick={this.handleReload}>
                        <Icon name='remove' /> {`Завершить работу`}
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}