{
    // 1. получить массив из элементов, которые меньше 10
    const arr = [2, 5, 10, 1, 0, 11, 100, 33];
    const arr2 = arr.filter(el => el < 10);
    console.log(arr2);
}
{
    // 2. получить массив из чётных элементов
    const arr = [2, 5, 10, 1, 0, 11, 100, 33];
    const arr2 = arr.filter(el => el % 2 === 0);
    console.log(arr2);
}
{
    // 3. найти первый элемент, который больше 10
    const arr = [2, 5, 10, 1, 0, 11, 100, 33];
    const arr2 = arr.find(el => el > 10);
    console.log(arr2);
}
{
    // 4. проверить есть ли в массиве хоть один ноль
    const arr = [2, 5, 10, 1, 0, 11, 100, 33];
    const arr2 = arr.includes(0);
    console.log(arr2);
}
{
    // 5. найти индекс ноля в массиве
    const arr = [2, 5, 10, 1, 0, 11, 100, 33];
    const arr2 = arr.indexOf(0);
    console.log(arr2);
}
{
    // 6. проверить есть ли в массиве хоть один элемент больше 10, но меньше 20
    const arr = [2, 5, 10, 1, 0, 100, 33];
    const arr2 = arr.some(el => el > 10 && el < 20);
    console.log(arr2);
}
{
    // 7. найти индекс первого элемента в массиве, который больше 10, но меньше 20
    const arr = [2, 5, 10, 1, 0, 11, 100, 33];
    const arr2 = arr.findIndex(el => el > 10 && el < 20);
    console.log(arr2);
}
{
    // 8. проверить, что все элементы массива - чётные
    const arr = [2, 4, 10, 1, 0, 12, 100, 34];
    const arr2 = arr.every(el => el % 2 === 0);
    console.log(arr2);
}
{
    // 9. получить массив, где каждый элемент - это квадрат элемента исходного массива
    const arr = [2, 4, 10]; // нужно получить [4, 16, 100]
    const arr2 = arr.map(el => el * el);
    console.log(arr2);
}

{
    const users = [
        {
            name: 'Андрей',
            age: 20,
        },
        {
            name: 'Ксения',
            age: 30,
        },
        {
            name: 'Александра',
            age: 25,
        },
        {
            name: 'Михаил',
            age: 16,
        },
        {
            name: 'Константин',
            age: 10,
        },
    ];
    // далее возможно придётся комбинировать несколько методов массива
    // 11. вывести имена всех совершеннолетних пользователей
    const childrenNames = users
        .filter(user => user.age < 18)
        .map(user => user.name);
    // 12. найти первого пользователя, которому меньше 18
    const firstPersonUnder18 = users.find(person => person.age < 18).name;
    // 13. получить массив такой массив отсортированный по алфавиту: ['Александра - 25', 'Андрей - 20', ...]
    const sortedByABC = users
        .sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            else return 0;
        })
        .map(person=> person.name+" - "+person.age);
    
    // 14. найти первого пользователя старше 25 и заменить его имя на "Вероника"
    const veronika = users.find(user=>user.age>25);
    veronika.name = "Вероника";
    // 15. найти первого пользователя младше 18 и заменить его на {name: 'Сергей', age: 50}
    const index = users.findIndex(user=>user.age<18);
    users[index] = {name: 'Сергей', age: 50};
    // 16. получить новый массив, где каждый пользователь будет старше на один год (Андрею должно быть 21, Ксении 31 и т.д.), при этом пользователи должны быть отсортированы в порядке возрастания возраста
    const olderUsers = users   //и сам массив users стал старше на 1 год
        .map(user=> {
            const newUser = {
                ...user,
                // name: user.name,
                // age: user.age,
                age: user.age + 1
            };
            return newUser;
        })
        .sort((a, b) => {
            return a.name > b.name ? 1 : (a.name < b.name) ? -1 : 0;
        });
    // 17. проверить, что все пользователи совершеннолетние
    const allAdults = users.every(user=>user.age>=18);
    // 18. проверить, есть ли хоть один пользователь старше 28
    const userUnder28 = users.some(user=> user.age>28);
    // 19. удалить из массива пользователя с именем Михаил двумя способами: используя filter (получить новый массив без него), используя findIndex и splice
        const newArrWithoutMihail = users.filter(user=> user.name !== "Михаил");
        const removeMihail = users.splice(users.findIndex(user=> user.name === "Михаил"), 1);

    console.log(removeMihail);
}