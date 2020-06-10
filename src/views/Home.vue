<template>
    <el-container>
      <el-aside class="aside" width="200px">
                   <asideNav></asideNav>
      </el-aside>
      <el-container>
          <el-main class="contain">
                <mainDrag></mainDrag>
          </el-main>
          <el-footer height='200px'>
          <div class="drag">
           <vue-draggable-resizable
           style="width:100%"
            class-name-resizable="abc"
            :w="800"
            :h="150"
            :min-height="150"
            axis="x"
            :y='0'
            :handles='["tm"]'
            @resizing="onResize"
            :parent="false"
            :draggable="false">
            <h1>sdfjklj</h1>
            </vue-draggable-resizable>
            </div>
          </el-footer>
      </el-container>
    </el-container>
<!--     <el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
</el-container> -->
</template>
<script>
// import VueDraggableResizable from 'vue-draggable-resizable'
// import 'vue-draggable-resizable/dist/VueDraggableResizable.css'
import asideNav from '@/components/nav.vue'
import mainDrag from '@/components/main.vue'
export default {
  components: {
    asideNav, mainDrag
  },
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
    // /union/selectDatabase

  }
}
</script>
<style lang="less" scoped>
.el-container{
  height: 100vh;
  overflow: hidden;
  .el-main{
    height: 100%;
  }
}
.aside{
  // background-color: chocolate;
  height: 100vh;
}
.el-main,.el-footer{
  padding: 0;
}
.el-footer{
  // border-top: 3px solid #ccc;
  margin: 0;
  padding: 0;
  position: relative;
}
.drag{
  height: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  // background-color: coral;
//  transform: translateY(-100%);
}
.vdr{
  border: none;
  border-top: 3px #ccc solid;
}
.contain{
  position: relative;
}
</style>
