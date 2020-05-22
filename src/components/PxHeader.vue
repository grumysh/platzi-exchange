<template lang="pug">
    header(class="shadow")
        nav
            nav(class="flex items-center justify-between flex-wrap bg-green-400 p-6")
                div(class="flex items-center flex-shrink-0 text-white mr-6")
                    px-icon(class="mr-2")
                    router-link(
                      class="font-semibold text-xl tracking-tight" 
                      to="/"
                    ) PlatziExchange
                div(class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto")
                    div(class="text-sm lg:flex-grow")
    
</template>
<script>
import PxIcon from '@/components/PxIcon'
export default {
  name: 'PxHeader',
  components: {
    PxIcon
  }
}
</script>
