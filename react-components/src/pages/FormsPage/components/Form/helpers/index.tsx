export const nameValidation = (name: string) => {
  const newName = name
    .trim()
    .split(' ')
    .filter((item) => item !== '')
  const firstName = newName[0]
  const lastName = newName[1]

  return lastName
    ? firstName[0] === firstName[0].toUpperCase() &&
        lastName[0] === lastName[0].toUpperCase()
    : false
}
