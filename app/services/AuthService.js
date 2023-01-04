const users = [
  {
    username: 'jdoe',
    password: '1234',
    displayName: 'John Doe',
  }
];

export const authenticate = (username, password) => {
  const user = users.find(u => u.username === username && u.password == password);

  if (user !== undefined)
    return { username: user.username, displayName: user.displayName };
  
  return undefined;
};