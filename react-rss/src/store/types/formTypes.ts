export interface IFormCard {
    text: string
    date: string
    language: string
    gender: string
    file: string
    agreement: boolean
  }
  
  export interface FormDataState {
    formData: IFormCard[]
  }
  