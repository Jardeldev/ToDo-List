<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <AppUserMenu />
                <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto p6 rounded-lg shadow-mg">
            
            <TodoSpinner v-if="loading" />

            <template v-else>
                  <TodoFormAdd />

                <TodoItems
                    v-if="$store.state.todos.length"/>

                <TodoEmpty v-else />
            </template>
    </div>
</div>
  </template>
  
  <script>
import TodoSpinner from '@/components/TodoSpinner';
import TodoFormAdd from '@/components/TodoFormAdd';
import TodoItems from '@/components/TodoItems';
import TodoEmpty from '@/components/TodoEmpty';
import AppUserMenu from '@/components/AppUserMenu.vue';


export default {
    name: 'App',
    components: { TodoEmpty, TodoItems, TodoFormAdd, TodoSpinner, AppUserMenu },

    data() {
        return {
            loading: false
        }
    },

    created() {
        this.loading = true
        this.$store.dispatch('getTodos').finally(() => {
            this.loading = false
        })
    },
}
  </script>
