const users = [
  {
    username: 'jdoe',
    password: '1234',
    displayName: 'John Doe',
  }
];

export const authenticate = (username, password) => {
  return users.find(u => u.username === username && u.password == password);
};