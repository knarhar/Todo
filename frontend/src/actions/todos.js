import axios from "axios";
import { GET_TODO_LIST, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./types";

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// Get to-do list

export const getTodos = () => dispatch => {
    axios.get('api/todo/')
        .then(result => {
            dispatch({
                type: GET_TODO_LIST,
                payload: result.data // Fix the typo here
            });
        })
        .catch(error => console.log(error));
};


//delete to-do

export const deleteTodo = (id)=> dispatch => {
    axios.delete(`api/todo/${id}/`)
        .then(result => {
            dispatch({
                type: DELETE_TODO,
                payload: id
            })
        }).catch(error => console.log(error))

}


//toggle todo

export const toggleTodo = (todo)=> dispatch => {
    todo.done = !todo.done
    axios.put(`api/todo/${todo.id}/`, todo)
        .then(result => {
            dispatch({
                type: TOGGLE_TODO,
                payload: result.data
            })
        }).catch(error => console.log(error))

}


//add todo

export const addTodo = (todo)=> dispatch => {
    axios.post(`api/todo/`, todo)
        .then(result => {
            dispatch({
                type: ADD_TODO,
                payload: result.data
            })
        }).catch(error => console.log(error))

}