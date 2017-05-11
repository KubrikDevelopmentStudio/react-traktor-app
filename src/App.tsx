/** Импортируем React */
import * as React from 'react';
/** импортируем стили, для оформления страницы */
import 'semantic-ui-css/semantic.css';
/** Библиотека с характеристиками тракторов */
import { tractorsLibrary } from './constants/TractorsCharacteristics';
import MainWindow from './components/MainWindowComponent';


/**
 * Главный класс приложения.
 */
class App extends React.Component<{}, null> {
    /**
     * Рендер объекта. 
     */
    render() {
        console.info(tractorsLibrary);
        // Отрисовываем компонент в браузере.
        return (
            <MainWindow />
        );
    }
}

export default App;
