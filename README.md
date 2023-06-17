# Task Management System

A task management system for a team to manage their tasks and collaborate effectively.

## Usage

Node.js (>= v18) should be installed on local machine.

```bash
npm i
npm run build && npm run start
```

project running on port <http://localhost:3000>.

## Features

- Next.js
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Dark mode with `next-themes`
- Tailwind CSS class sorting, merging and linting.

## Project Features

User Registration and Authentication:

- ✅ Users should be able to register with their email and password.

Dashboard:

- ✅ Create a dashboard page where users can view their assigned tasks and task progress.
- ✅ Display tasks assigned to the logged-in user with relevant information (e.g., task name, due date, status).
- ✅ Provide an interface for users to mark tasks as complete and update the progress.

Task Creation and Assignment:

- ✅ Implement a form to create new tasks with fields like task name, description, due date, and assignee.
- ✅ Validate form input and display appropriate error messages for invalid data.

Task Details and Comments:

- ❌ Create a task detail page where users can view the details of a specific task.
- ❌ Display task information, including the description, due date, status, and assignee.
- ❌ Allow users to add comments to a task, providing a text area for entering comments and a submit button.
- ❌ Display the comments associated with a task, including the commenter's name and timestamp.

Task Filtering and Sorting:

- ✅ Implement filters to allow users to view tasks based on different criteria (e.g., assigned to them, completed tasks, due date).
- ✅ Provide sorting options to arrange tasks based on different parameters (eg., due date, priority).

Responsive Design:

- ✅ Ensure the application is responsive and works well on different screen sizes and devices.
- ✅ Use CSS media queries or a responsive framework to achieve a consistent user experience.

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
