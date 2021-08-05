<template>
    <main>
        <h1>Tic Tac Toe</h1>
        <TicTacToeTable />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TicTacToeTable from '@/components/TicTacToeTable.vue'
export default defineComponent({
    name: 'Game',
    components: {
        TicTacToeTable
    },
    setup() {
        return {

        }
    }
})
</script>
