import { TodoDomain } from "./todo.domain"
import { TodoRepository } from "./todo.repository"

interface ITodoService {
    newTask: (todo: TodoDomain) => Promise<TodoDomain>
}

class TodoService implements ITodoService {
    private _todoRepository: TodoRepository
    constructor(todoRepository: TodoRepository) {
        this._todoRepository = todoRepository
    }

    public async newTask(todo: TodoDomain): Promise<TodoDomain> {
        return this._todoRepository.create(todo)
    }
}

export {
    TodoService,
    ITodoService
}