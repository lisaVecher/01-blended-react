// Задача 6

// const user = {
//   name: "Alice",
//   address: {
//     city: "Kyiv"
//   }
// };

// console.log(user.address?.city);

// Завдання:

// Створіть тип для user.
// Зробіть address необов’язковим.
// Перевірте, що user.address?.city не викликає помилки.

interface UserProps {
  name: string;
  address?: Address;
}

interface Address {
  city: string;
}

const user: UserProps = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);
