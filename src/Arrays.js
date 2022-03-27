/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let newData = data;
    let newDataArr = newData.split(/\s*,\s*/);
    newData = '';
    newDataArr.sort(function sortfunction(a, b) {
        return a - b;
    });
    for (let i = 0; i < newDataArr.length; i++) {
        if (i != newDataArr.length - 1) newData += newDataArr[i] + ',';
        else newData += newDataArr[i];
    }
    return newData;
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    return data.filter((num) => num <= 100);
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(array1[i]);
        arr.push(array2[i]);
    }
    return arr;
}
