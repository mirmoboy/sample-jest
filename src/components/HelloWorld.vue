<template>
  <div class="hello">
    <h1 class="title">{{ title }}</h1>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="form.name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'This is title',
      form: {
        name: 'kevin'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
