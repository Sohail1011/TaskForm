import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { postTask, deleteTask, putTask, getTask } from "../api/task.api"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-hot-toast"

export function TaskFormPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm()
    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await putTask(params.id, data)
            toast.success('Task update', {
                position: "bottom-right",
                style: {
                    background: "#002855",
                    color: "white"
                }
            })
        } else {
            await postTask(data)
            toast.success('Task save', {
                position: "bottom-right",
                style: {
                    background: "#2c6e49",
                    color: "#fefee3"
                }
            })
        }
        navigate("/tasks")
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const { data } = await getTask(params.id)
                setValue('title', data.title)
                setValue('description', data.description)
            }
        }
        loadTask()
    }, [])

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input className="bg-zinc-700 hover:bg-zinc-500 p-3 rounded-lg block mb-3 w-full" type="text" placeholder="title"
                    {...register("title", { required: true })}
                />
                {errors.title && <span>title is required</span>}
                <textarea
                    className="bg-zinc-700 p-3 rounded-lg mb-3 w-full hover:bg-zinc-500"
                    rows="3"
                    placeholder="Description"
                    {...register("description", { required: true })}></textarea>
                {errors.description && <span>description is required</span>}
                <button className="bg-blue-900 hover:bg-blue-600 text-white p-3 rounded-lg w-full mb-3">Save</button>
            </form>
            {
                params.id && <button className="bg-red-800 hover:bg-red-600 text-white p-3 rounded-lg w-full" onClick={async () => {
                    const accepted = window.confirm('Are you sure?')
                    if (accepted) {
                        await deleteTask(params.id)
                        toast.success('Task deleted', {
                            position: "bottom-right",
                            style: {
                                background: "#c1121f",
                                color: "white"
                            }
                        })
                        navigate("/tasks")
                    }
                }}>Delete</button>
            }
        </div>
    )
}