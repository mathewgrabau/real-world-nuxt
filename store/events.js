import EventService from '@/services/EventService.js'

// State must be anonymous function to ensure it's unique on server
export const state = () => ({
  events: []
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  }
}

export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      // Response just commits with the data returned
      commit('SET_EVENTS', response.data)
    })
  }
}
