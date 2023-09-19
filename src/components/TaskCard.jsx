import { useNavigate } from 'react-router-dom'

export function TaskCard({ task }) {

    const navigate = useNavigate()

    return (
        <div className='bg-emerald-700 p-3 hover:bg-emerald-600 hover:cursor-pointer rounded-lg'
            onClick={() =>
                navigate('/tasks/' + task.id)
            }
        >
            <h1 className='font-bold uppercase'>{task.title}</h1>
            <p className='text-slate-200'>{task.description}</p>
        </div>
    )
}
