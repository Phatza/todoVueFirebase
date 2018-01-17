<template>
  <div>
    <Row type="flex" justify="center" align="middle">
      <Col :xs="24" :md="8">
        <h3>TO DO</h3>
        <Row type="flex" justify="space-around" v-if="''!== todolist" v-for="todo in todolist">
          <Col span="12">
            <p span="12">{{ todo.task }}</p>
          </Col>
          <Col span="12">
            <taskSettings
              span="12"
              :task="todo.task"
              :todo="todo"
              @toProceed="proceed(todo)"
              @toDone="done(todo)"
              @removeTodo="remove(todo.task)">
            </taskSettings>
          </Col>
        </Row>
      </Col>
      <Col :xs="24" :md="8">
        <h3>IN PROGRESS</h3>
        <Row type="flex" justify="space-around" v-if="true === todolist.proceed" v-for="todo in todolist">
          <Col span="12">
            <p span="12">{{ todo.task }}</p>
          </Col>
          <Col span="12">
            <taskSettings span="12" :task="todo.task" :todolist="todolist" @removeTodo="remove(todo.task)"></taskSettings>
          </Col>
        </Row>
      </Col>
      <Col :xs="24" :md="8">
        <h3>DONE</h3>
        <Row type="flex" justify="space-around" v-if="true === todolist.done" v-for="todo in todolist">
          <Col span="12">
            <p span="12">{{ todo.task }}</p>
          </Col>
          <Col span="12">
            <taskSettings span="12" :task="todo.task" :todolist="todolist" @removeTodo="remove(todo.task)"></taskSettings>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <Col span="24">
        <Input v-model="task" placeholder="Ajouter une tache"></Input>
        <Button type="primary" size="large" icon="plus" @click="add(task)">add task</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
  import { mapMutations, mapActions, mapGetters } from 'vuex'
  import taskSettings from '~/components/taskSettings.vue'

  export default {
    data () {
      return {
        task: ''
      }
    },
    computed: {
      ...mapGetters([
        'todolist'
      ])
    },
    methods: {
      ...mapMutations([
        'add',
        'remove',
        'isTodo',
        'isProceed',
        'isDone'
      ]),
      ...mapActions({
        addTodo: 'add',
        removeTodo: 'remove',
        isTodo: 'isTodo',
        isProceed: 'isProceed',
        isDone: 'isDone'
      }),
      add (task) {
        if (this.task === '') {
          return this.$Message.error('Task\'s field cannot be empty')
        } else {
          this.addTodo(this.task)
          this.task = ''
        }
      },
      remove (task) {
        this.removeTodo(this.task)
      },
      todo (task) {
        this.isTodo(this.task)
      },
      proceed (task) {
        this.isProceed(this.task)
      },
      done (task) {
        this.isDone(this.task)
      }
    },
    components: {
      taskSettings
    }
  }
</script>

<style>
</style>
