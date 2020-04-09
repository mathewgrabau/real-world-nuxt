<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    try {
      // Destructuring even simplifies it more.
      const { data } = await $axios.get(
        'http://localhost:3000/events/' + params.id
      )
      return { event: data }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id
      })
    }
  },
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Event description for ' + this.event.title
        }
      ]
    }
  }
}
</script>
