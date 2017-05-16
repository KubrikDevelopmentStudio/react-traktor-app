import App from '../classes/App';

/**
 * Интерфейс вывода ошибки.
 */
export interface IErrorLabel {
    // Ошибочный ввод.
    errorInput: any;
}


/**
 * Интерфейс проброски главного класса приложения. 
 */
export interface IAppTransfer {
    // Класс для работы с логикой приложения.
    app: App;
    // Отображение компонента.
    componentShow?: boolean;
}