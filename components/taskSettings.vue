<template>
    <Dropdown trigger="click"> 
        <Button type="primary" shape="circle" icon="ios-more"></Button>
        <DropdownMenu slot="list">
            <DropdownItem v-if="!todo.todo"><a href="javascript:void(0)" @click="toDo">Move to Todo</a></DropdownItem>
            <DropdownItem v-if="!todo.proceed"><a href="javascript:void(0)" @click="toProceed">Move to Proceed</a></DropdownItem>
            <DropdownItem v-if="!todo.done"><a href="javascript:void(0)" @click="toDone">Move to Done</a></DropdownItem>
            <DropdownItem ><a href="javascript:void(0)" @click="removeTodo">remove task</a></DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
    export default {
      data () {
        return {
          visible: false
        }
      },
      props: {
        task: {
          type: String,
          required: true
        },
        todo: {
          type: Object,
          required: true
        }
      },
      methods: {
        removeTodo () {
          this.$emit('removeTodo')
        },
        toDo () {
          this.$emit('toDo')
        },
        toProceed () {
          this.$emit('toProceed')
        },
        toDone () {
          this.$emit('toDone')
        }
      }
    }
</script>
