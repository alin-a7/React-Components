import { FieldError, UseFormRegister } from "react-hook-form"
import { FormState } from "../Form"

interface Ioption {
  value: string
  label: string
}
export const OPTIONS: Ioption[] = [
  {
    value: '',
    label: 'Language',
  },
  {
    value: 'russian',
    label: 'Russian',
  },
  {
    value: 'belarusian',
    label: 'Belarusian',
  },
  {
    value: 'english',
    label: 'English',
  },
  {
    value: 'german',
    label: 'German',
  },
]

export interface InputsProps {
  error: FieldError | undefined
  register: UseFormRegister<FormState>
}
