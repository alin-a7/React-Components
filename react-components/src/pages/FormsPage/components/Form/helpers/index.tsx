export const nameValidation = (name: string) => {
  const firstName = name.split(' ')[0]
  const lastName = name.split(' ')[1]

  return lastName
    ? firstName[0] === firstName[0].toUpperCase() &&
        lastName[0] === lastName[0].toUpperCase()
    : false
}
