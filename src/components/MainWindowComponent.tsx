/** Импортируем React */
import * as React from 'react';
/** Импортируем стили Semantic UI */
import {
    Grid
} from 'semantic-ui-react';

import MainFrame from './frames/MainFrame';
import HeaderFrame from './frames/items/HeaderFrame';


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
    }
    /**
     * Рендер объекта.
     */
    render() {
        // Отрисовываем компонент в браузере.
        return (
            /*Размечиваем страницу сеткой*/
            <Grid columns={3} padded>
                {/*Создаем строку в сетке и выравниваем ее по центру*/}
                <Grid.Row columns={2} centered>
                    {/*Создаем колонку в которой будет располагаться контент страницы*/}
                    <Grid.Column textAlign='center'>
                        {/*Основной объект приложения*/}
                        <HeaderFrame />
                    </Grid.Column>
                </Grid.Row>
                {/*Создаем строку в сетке и выравниваем ее по центру*/}
                <Grid.Row columns={2} centered>
                    {/*Создаем колонку в которой будет располагаться контент страницы*/}
                    <Grid.Column textAlign='center'>
                        {/*Основной объект приложения*/}
                        <MainFrame />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}