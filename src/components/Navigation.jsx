import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between py-3">
            <Link to="/tasks"><h1 className="font-bold text-3xl mb-4">Task App</h1></Link>
            <button className="bg-green-400 hover:bg-green-300 px-3 py-2 rounded-lg uppercase text-center text-black font-semibold">
                <Link to="/tasks-create">create task</Link>
            </button>
        </div>
    )
}