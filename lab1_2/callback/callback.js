// Hàm find sử dụng callback
function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}

// Ví dụ sử dụng
const numbers = [1, 2, 3, 4, 5];

const result = find(numbers, (num) => num > 3);
console.log(result); // Kết quả: 4

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const user = find(users, (user) => user.name === 'Bob');
console.log(user); // Kết quả: { id: 2, name: 'Bob' }


    