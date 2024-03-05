import { RiDeleteBin5Line } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import { useContext } from 'react'
import { AppContext } from '../../utils/AppContext'

type props = {
    children: React.ReactNode
    id: string
}

export const TodoItem = ({ children, id }: props) => {
    const { handleDelete } = useContext(AppContext)
    return (
        <>
            <div className="flex-grow">{children}</div>
            <RiEdit2Line
                className="cursor-pointer hover:text-blue-500"
                size={20}
            />
            <RiDeleteBin5Line
                className="cursor-pointer hover:text-red-500"
                size={20}
                onClick={() => handleDelete(id)}
            />
        </>
    )
}
