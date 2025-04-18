/* eslint-disable import/no-extraneous-dependencies */
import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');

let total = 0;

function count() {
  total += 1;
  $('#main').html(`You've been on this page for ${total} seconds.`);
}

setInterval(count, 1000);
