import React from 'react';

const Message = props  => {
  const { date, useragent, message, username, pic } = props.message.attributes;
  return (
    <div className="message">
      <img className="message--pic" src={pic} alt={message} />
      <div className="message--info">
        <p>{message}</p>
        <p className="text-capitalize">{fullName(username)}</p>
        <p>{useragent}</p>
        <p>{formatDate(date)}</p>
      </div>
    </div>
  );
}

const fullName = (username) => {
  const arr = username.replace(/[0-9]/g, '').split(".");
  return `${arr[0]} ${arr[1]}`;
}

const formatDate = (date) => {
  const d = new Date(date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  return `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
}

export {
  Message,
  fullName,
  formatDate
};
