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
import EventService from '@/services/EventService.js'

export default {
  components: { EventCard },
  // Using ES6 destructuring to unpack the context
  // async makes the function automatically return a Promise
  async asyncData({ error }) {
    try {
      // Destructuring even simplifies it more.
      const { data } = await EventService.getEvents()
      return { events: data }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.'
      })
    }
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
}
</script>
