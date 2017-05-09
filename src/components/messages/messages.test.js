import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { Message, fullName, formatDate } from './message';

it('fullName formats usernames correctly', () => {
  const username = "bob.jones1";
  expect(fullName(username)).toBe('bob jones');
});

it('formatDate formats dates correctly', () => {
  const date = "2015-10-11T08:40:51.620Z";
  expect(formatDate(date)).toBe('Sun Oct 11 2015 4:40:51');
});

it('Message component renders the text of the message', () => {
  const message = {
    attributes: {
      date: "2015-10-11T08:40:51.620Z",
      useragent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
      message: "hi!",
      username: "bob.jones",
      pic: "http://semantic-ui.com/images/avatar/small/elliot.jpg"
    },
    type: "messages",
    id: "1"
  };
  const wrapper = mount(
    <Message message={message} />
  );
  const div = wrapper.find('.message--info');
  expect(div.text()).toContain('hi!');
});
