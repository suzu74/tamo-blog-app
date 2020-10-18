/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
require("./rails-ujs.js");
import $ from 'jquery'
import axios from 'modules/axios'
import {
  listenInactiveHeartEvent,
  listenActiveHeartEvent
} from 'modules/handle_heart'

document.addEventListener('DOMContentLoaded', () => {
  // debugger
  const accountId = $('#profile-show').data().accountId
  // const accountId = data.accountId
  // debugger

  axios.get(`/accounts/${accountId}/follows/20`)
    .then((response) => {
      const hasfollowed = response.data.hasfollowed
      
      if (hasfollowed) {
        $('.unfollow_btn').removeClass('hidden')
      } else {
        $('.follow_btn').removeClass('hidden')
      }
    })
})