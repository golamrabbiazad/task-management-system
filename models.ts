interface User {
  id: number
  email: string
  password: string
  tasks: Task[]
}

interface Task {
  id: number
  name: string
  description: string
  status: STATUS
  priority: PRIORITY
  assignee: Assignee
  comments: Commentos[]
}

type STATUS = "Not Started" | "Pending" | "In Progress" | "Done"

type PRIORITY = "Low" | "Mediam" | "High"

type Assignee = Pick<User, "email">

interface Commentos {
  id: number
  name: string
  createdAt: Date
}
