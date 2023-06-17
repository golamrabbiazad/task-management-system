import { TaskForm } from "./components/new-task-form"

export default function IndexPage() {
  return (
    <div className="container h-[800px] flex-col items-center justify-center xs:grid sm:grid md:grid lg:px-0">
      <div className="w-3/5 md:w-full">
        <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Create New Task
        </h1>
        <TaskForm />
      </div>
    </div>
  )
}
