<template>
<div class="d-flex justify-center px-5  ">
 <div class="d-block px-5 home">
  <TimeLIne />
 </div>
</div>
</template>

<script>
    import TimeLIne from '@/components/TimeLIne';
  export default {
    name: 'Home',

    components: {
      TimeLIne
    },
  }
</script>
