<script setup lang="ts">
import { tasksWithProjectsQuery } from '@/utils/supaQueries.ts'
import { columns } from '@/utils/tableColumns/tasksColumns.ts'
import type { TasksWithProjects } from '@/utils/supaQueries.ts'

usePageStore().pageData.title = 'My Tasks'

const tasks = ref<TasksWithProjects | null>(null)
const getTasks = async () => {
  const { data, error, status } = await tasksWithProjectsQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  tasks.value = data
}

await getTasks()

useErrorStore().setError({ error: Error('I am an uncaught error') })
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>

<style scoped></style>
