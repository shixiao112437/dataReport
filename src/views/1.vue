<template>
      <vue-draggable-resizable
            class-name-resizable="abc"
            :w="800"
            :h="50"
            :min-width="800"
            axis="x"
            @resizing="onResize"
            :parent="true"
            :draggable="false"
          ></vue-draggable-resizable>
</template>

<script>
export default {

}
</script>

<style>

</style>
