<template>
    <section class="tic-tac-section">
        <h2>Round {{roundIndex}}</h2>
        <h2 v-if="whoWin">{{whoWin}}   
            <button @click="clearTickTable">Reset</button>
        </h2>
        <table>
        <tr v-for="(row, rowIndex) in ticTacTable" :key="rowIndex">
            <td v-for="(item, itemIndex) in row" :key="itemIndex">
            <input  name="tick" 
                    type="checkbox"  
                    class="checkbox-tick" 
                    :data-tick="item" 
                    :disabled="!!item || !!whoWin"
                    @click="addTickToTable(rowIndex, itemIndex)">
            </td>
        </tr>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ticTacEngine from '@/composables/ticTacEngine'

export default defineComponent({
    name: 'TicTacToeTable',
    setup() {
        const ticTacTable = ref([['', '', ''], ['', '', ''], ['', '', '']]),
            roundIndex = ref(0),
            whoWin = ref('')

        const addTickToTable = (rowIndex:number, itemIndex: number): void => {
            ticTacTable.value[rowIndex][itemIndex] = roundIndex.value%2 ? 'O' : 'X'
            roundIndex.value++
            whoWin.value = ticTacEngine(ticTacTable.value, roundIndex.value)
        }
        const clearTickTable = (): void => {
            ticTacTable.value = [['', '', ''], ['', '', ''], ['', '', '']]
            roundIndex.value = 0
            whoWin.value = ''
        }
        
        return {
            ticTacTable,
            roundIndex,
            whoWin,
            addTickToTable,
            clearTickTable
        }
    }
})
</script>

<style lang="less" scoped>
    .tic-tac-section {
        text-align: center;
        table {
            margin: 20px auto;
        td {
            border: 1px solid #000;
            font-size: 0;
            width: 70px;
            height: 70px;
            .checkbox-tick {
            position: relative;
            width: 100%;
            height: 100%;
            }
            .checkbox-tick::after {
            content: attr(data-tick);
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 2rem;
            }
        }
        }
    }

</style>
