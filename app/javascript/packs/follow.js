import $ from 'jquery'
import axios from 'modules/axios'

const handleFollow = (accountId) => {
  $('.follow_btn').on('click', () => {
    axios.post(`/accounts/${accountId}/follow`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $('.follow_btn').addClass('hidden')
        $('.unfollow_btn').removeClass('hidden')
      }
    })
  })
} 

const handleUnfollow = (accountId) => {
  $('.unfollow_btn').on('click', () => {
    axios.post(`/accounts/${accountId}/unfollow`)
    .then((response) => {
      if (response.data.status === 'ok') {
        $('.unfollow_btn').addClass('hidden')
        $('.follow_btn').removeClass('hidden')
      }
    })
  })
} 

document.addEventListener('DOMContentLoaded', () => {
  const accountId = $('#profile-show').data().accountId

  axios.get(`/accounts/${accountId}/follow`)
    .then((response) => {
      const hasfollowed = response.data.hasfollowed

      if (hasfollowed) {
        $('.unfollow_btn').removeClass('hidden')
      } else {
        $('.follow_btn').removeClass('hidden')
      }
    })
  
  handleFollow(accountId)
  handleUnfollow(accountId)
})