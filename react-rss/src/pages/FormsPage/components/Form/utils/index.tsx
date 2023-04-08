export const nameValidation = (name: string) => {
  const firstName = name.trim().split(' ')[0]
  const lastName = name.trim().split(' ')[1]

  return lastName
    ? firstName[0] === firstName[0].toUpperCase() &&
        lastName[0] === lastName[0].toUpperCase()
    : false
}

export const getImage = (files: FileList) => {
  const file = files?.item(0) as File
  return file ? URL.createObjectURL(file) : ''
}


