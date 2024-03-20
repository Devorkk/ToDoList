import { useState } from 'react';
import { Llista } from '../Llista';

interface TaskProps {
    task: string;
    id: string;
    lista: Llista;
}

export function Task({ task, id, lista }: TaskProps) {
    const [isChecked, setIsChecked] = useState(false);

    const handleRemove = () => {
        const task = document.getElementById(id)

        if (task) task.remove()
        lista.removeTask(id);
    };

    const handleCheck = () => {
        setIsChecked(!isChecked);
        lista.checkTask(id, !isChecked);
    };

    return (
        <div>
            <div id={id} className={`task-form ${isChecked ? 'checked' : 'unchecked'}`}>
                <button className="task-remove" onClick={handleRemove}>Remove</button>
                <button className="task-check" onClick={handleCheck}>{isChecked ? 'Uncheck' : 'Check'}</button>
                <p>{task}</p>
            </div>
        </div>
    );
}
