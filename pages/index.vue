<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  components: { EventCard },
  // Using ES6 destructuring to unpack the context
  asyncData({ $axios }) {
    return $axios.get('http://localhost:3000/events').then((response) => {
      return {
        events: response.data
      }
    })
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>
