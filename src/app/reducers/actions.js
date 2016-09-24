export const GET_TASKS = 'GET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const COMPLETE_TASK = 'COMPLETE_TASK'

const tasks = [
  {
    id: 1,
    type: 'daily',
    text: 'Bike Commute',
    completed: false
  },
  {
    id: 2,
    type: 'habit',
    text: 'Mug cake'
  },
  {
    id: 3,
    type: 'todo',
    text: 'Finish basic website',
    completed: false
  }
]

export  function getTasks(){
  return {
    type: GET_TASKS,
    payload: {
      tasks
    }
  }
}

export function completeTask(id){
  return {
    type: COMPLETE_TASK,
    payload: {
      id
    }
  }
}

  export function addTask(text, type) {
    return {
      type: ADD_TASK,
      payload: {
        text,
        type
      }
    }
  }


