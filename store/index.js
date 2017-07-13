import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    todolist: []
  },
  getters: {
    todolist: state => state.todolist
  },
  mutations: {
    add (state, task) {
      state.todolist.push({
        task,
        todo: true,
        inProgress: false,
        done: false
      })
    }
    // remove (state, { task }) {
    //   state.todolist.splice(state.todolist.indexOf(task), 1)
    // },
    // toggle (state, task) {
    //   task.done = !task.done
    // }
  },
  actions: {
    add ({ commit }, task) {
      commit('add', task)
    }
  }
})

export default store
