const nhietdo = [17,21,23]


const ghepChuoi = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} day${i === arr.length - 1 ? '' : ', '}`;
    }
    return str;
}

console.log(ghepChuoi(nhietdo));