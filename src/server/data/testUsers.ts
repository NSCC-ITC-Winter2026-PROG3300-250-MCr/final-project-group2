export type TestUser = {
  id: number;
  name: string;
};

// CHANGED: simple fake users array for testing
let users: TestUser[] = [];

// CHANGED: reset users before each test
export function resetTestUsers(): void {
  users = [];
}

// CHANGED: return all users
export function getAllTestUsers(): TestUser[] {
  return users;
}

// CHANGED: return one user by id
export function getTestUserById(id: number): TestUser | undefined {
  return users.find((user) => user.id === id);
}

// CHANGED: create a new user
export function createTestUser(name: string): TestUser {
  const newUser: TestUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);
  return newUser;
}