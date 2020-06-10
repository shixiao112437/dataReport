<template>
<div>
    <h1>内容区</h1>
    <draggable @change="reveive" class="drag" :list="list" group="data" >
   <!--  <div v-for="(item,index) in list" :key="index">
      {{item.name}} </div> -->
      <div class="wrap">
        <div class="item">
              <el-table v-for="(item,index) in list" :key="index">
              <el-table-column label="是的"></el-table-column>
              <el-table-column label="是的"></el-table-column>
              <el-table-column label="是的"></el-table-column>
              <el-table-column label="是的"></el-table-column>
          </el-table>
        </div>
      </div>

  </draggable>

</div>

</template>

<script>
import { mapState } from 'vuex'
import { dataByName } from '@/api/indx.js'

export default {
  data () {
    return {
      list: []

    }
  },
  methods: {
    add (res) {
      console.log(res)
    },
    receive (a, b, c) {
      console.log(a, b, c)
    },
    async reveive (e) {
      console.log(e)
      const table = e.added.element.ev.xx1
      console.log(table)
      const res = await dataByName(table)
      console.log(res.data)
      this.list.push(res)
    }
  },
  computed: {
    ...mapState(['group'])
  }
}
</script>

<style lang='less' scoped>
.drag{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(86, 86, 151);
}
.wrap{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .item{
      width: 25%;
    }
}
</style>
