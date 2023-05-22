import { faker } from "@faker-js/faker";
import _ from "lodash";

function generateUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = `${firstName} ${lastName}`;

  return {
    name: fullName,
    email: faker.internet.email({ firstName, lastName }),
    phone: faker.phone.number("+374 ## ### ###"),
  };
}

function generateUsers(quantity) {
  const users = [];
  for (let i = 0; i < quantity; i++) {
    users.push(generateUser());
  }
  return users;
}

const users = generateUsers(10);

console.log("users:", users);

const sortedUsers = _.sortBy(users, "name");

console.log("sorted:", sortedUsers);
