import { v4 as uuidv4 } from 'uuid';

export interface TaskItem {
    name: string;
    isChecked: boolean;
    id: string;
}

export class Llista {
    tasks: TaskItem[];

    constructor() {
        this.tasks = [];
    }

    addTask(name: string): void {
        const newTask: TaskItem = {
            name,
            isChecked: false,
            id: uuidv4()
        };
        this.tasks.push(newTask);
    }

    removeTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    checkTask(id: string, isChecked = false): void {
        this.tasks.forEach(task => {
            if (task.id === id) {
                task.isChecked = isChecked;
            }
        });
    }

    getTasks(): TaskItem[] {
        console.log(this.tasks)
        return this.tasks;
    }
}
