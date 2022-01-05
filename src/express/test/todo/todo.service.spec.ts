import { TodoDomain } from "../../src/todo/todo.domain"
import { ITodoRepository, TodoRepository } from "../../src/todo/todo.repository"
import { ITodoService, TodoService } from "../../src/todo/todo.service"

const todoRepository: ITodoRepository = new TodoRepository()
const todoService: ITodoService = new TodoService(todoRepository)

describe('Prueba lógica negocio TODO', () => {
    test('Created todo with ID an creation date', async () => {
        const todo: TodoDomain = new TodoDomain('Call to my mom', 'I nedd call her because she is very sensible', new Date(2022, 2, 1))
        const newTodo: TodoDomain = await todoService.newTask(todo)
        expect(newTodo.id).toBeDefined()
        expect(newTodo.created).toBeDefined()
    })
})