/** Импортируем React */
import * as React from 'react';
/** Импортируем стили Semantic UI */
import {
    Grid
} from 'semantic-ui-react';
/** Импорт класса для управления логикой приложения */
import App from '../classes/App';
import MainFrame from './frames/MainFrame';
import HeaderFrame from './frames/items/HeaderFrame';
import MainInfoFrame from './frames/MainInfoFrame';

/**
 * Главный объект приложения.
 */
export default class MainWindow extends React.Component<{}, null> {
    /**
     * Конструктор класса.
     */
    constructor(props: any) {
        // Прокидываем свойства в класс.
        super(props);
        // Создаем экземпляр главного класса приложения.
        this.app = new App(this.callback);
    }


    /**
     * Коллбэк функция.
     */
    callback = (cbParam: string) => {
        console.info(`Сработал callback с параметром: ${cbParam}!`);
        console.info(`Содержимое класса App: `, this.app);

        this.forceUpdate();
    }


    /**
     * Экземпляр класса для управления логикой приложения.
     */
    app: App;


    /**
     * Рендер объекта.
     */
    render() {
        // Отрисовываем компонент в браузере.
        return (
            /*Размечиваем страницу сеткой*/
            <Grid columns={4} padded>
                {/*Создаем строку в сетке и выравниваем ее по центру*/}
                <Grid.Row columns={4} centered>
                    {/*Создаем колонку в которой будет располагаться контент страницы*/}
                    <Grid.Column textAlign='center'>
                        {/*Основной объект приложения*/}
                        <HeaderFrame />
                    </Grid.Column>
                </Grid.Row>
                {/*Создаем строку в сетке и выравниваем ее по центру*/}
                <Grid.Row columns={4}>
                    <Grid.Column width={6} verticalAlign='bottom'>
                        {/*Компонент с общей информацией*/}
                        <MainInfoFrame componentShow={true} app={this.app}></MainInfoFrame>
                    </Grid.Column>
                    {/*Создаем колонку в которой будет располагаться контент страницы*/}
                    <Grid.Column width={10} textAlign='center' verticalAlign='top'>
                        {/*Основной объект приложения*/}
                        <MainFrame app={this.app} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}