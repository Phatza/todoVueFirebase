<template>
    <Dropdown trigger="click"> 
        <Button type="primary" shape="circle" icon="ios-more"></Button>
        <DropdownMenu slot="list">
            <DropdownItem v-if="!task.proceed"><a href="javascript:void(0)" @click="toProceed">Move to Proceed</a></DropdownItem>
            <DropdownItem v-if="!task.done"><a href="javascript:void(0)" @click="toDone">Move to Done</a></DropdownItem>
            <DropdownItem ><a href="javascript:void(0)" @click="removeTask">remove task</a></DropdownItem>
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
          type: Object,
          required: true
        }
      },
      methods: {
        removeTask () {
          this.$emit('removeTask')
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
