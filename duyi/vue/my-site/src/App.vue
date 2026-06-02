<template>
  <div id="app">
    <Avatar :url="require('./assets/avatar.png')" :width="300" :height="300" />
    <Icon type="icon-home" />
    <Icon type="icon-collection" />
  </div>
</template>

<script>
import Avatar from './components/Avatar'
import Icon from './components/Icon'

export default {
  name: 'App',

  components: {
    Avatar,
    Icon,
  },

}
</script>
