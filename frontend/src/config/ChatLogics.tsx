export const getSender = (loggedUser: any, users: any) => {
  // return users[0]._id === loggedUser._id ? users[1].name : users[0].name
  return users.length > 1 ? users[1].name : users[0].name
}
