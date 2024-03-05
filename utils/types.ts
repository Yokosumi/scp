export type Todo = {
    _id: string
    body: string
    checked: boolean
    badges: string[]
}

export type EditMode = boolean

// export type Badge = {
//     body: string
//     color: string
//     variant: string
// }

export type AppContextType = {
    todoList: Todo[]
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
    handlePost: (value: string) => void
    handleDelete: (_id: string) => void
    editMode: boolean
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    handleEditMode: () => void
}
