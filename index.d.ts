type Url = string
type TUserId = string

type TUser = {
  id: TUserId
  name: string
  lastname: string
  email: string 
  password: string
  birthday: string
  curp: string
  phone: string
  image: Url
  job: TJob
}

type TJob = {
  employeeNumber: number
  title: string
  description: string
  position: string
}