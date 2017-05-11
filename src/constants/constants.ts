/** Импортируем вспомогательную библиотеку */
import * as _ from 'lodash';


/** Максимум технологических операций */
export const MAX_OPERATION_COUNT = 14;
/** Массив для Select с количеством технологических операций */
export let operationCount = _.stubArray();
/** Заполняем операции */
for (let i = 0; i < MAX_OPERATION_COUNT; i++) {
    // Заполняем в необходимом виде.
    operationCount.push({key: i, value: i, text: `${i}`});
}