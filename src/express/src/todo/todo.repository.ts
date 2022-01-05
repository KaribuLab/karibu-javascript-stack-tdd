import { TodoDomain } from "./todo.domain"

interface ITodoRepository {
    create: (todo: TodoDomain) => Promise<TodoDomain>
}

class TodoRepository implements ITodoRepository {
    constructor(){}
    async create(_todo: TodoDomain): Promise<TodoDomain> {
        throw new Error('No implementado')
    }
}

export {
    TodoRepository,
    ITodoRepository
}