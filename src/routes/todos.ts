import { Router } from 'express';

import { Todo } from '../models/todos';

let todos: Todo[] = [];

const router = Router();

type RequestBody = { text: string }
type RequestParams = { todoId: string }

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos })
})

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text,
    }

    todos.push(newTodo)
    res.status(201).json({ message: 'Added a todo item successfully!', todos: newTodo })
})

router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams
    const body = req.body as RequestBody
    const tid = params.todoId
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid)
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text }
        return res.status(200).json({ message: 'Todo updated successfully', todos: todos })
    }
    res.status(404).json({ message: 'could not find todo for this Id' })
})

router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams
    todos = todos.filter((todoItems) => todoItems.id !== params.todoId)
    res.status(200).json({ message: 'Todo item deleted successfully', todos })
})
export default router