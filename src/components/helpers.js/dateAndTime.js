import { useState, useEffect } from 'react';

export const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  return (
    {time: formattedTime, date: formattedDate}
  );
};

export function getTimePassed(startDateTime, endDateTime) {
  const startDate = new Date(startDateTime);
  const endDate = new Date(endDateTime);

  const timeDifference = endDate - startDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
      return years === 1 ? '1 year ago' : `${years} years ago`;
  } else if (months > 0) {
      return months === 1 ? '1 month ago' : `${months} months ago`;
  } else if (days > 0) {
      return days === 1 ? '1 day ago' : `${days} days ago`;
  } else if (hours > 0) {
      return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
  } else if (minutes > 0) {
      return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
  } else {
      return seconds === 1 ? '1 second ago' : `${seconds} seconds ago`;
  }
}
export function colorizeTime(st, v){
  const number = v.split(' ')[0]
  const njehsia = v.split(' ')[1]

  console.log(st == 'new' && +number >= 15 && njehsia === 'minutes');

  if (st == 'new' && +number >= 15 && njehsia === 'minutes' || njehsia === 'minute' || njehsia === 'seconds' || njehsia === 'second' || st == 'new' && njehsia != 'minutes'){
    return 'danger'
  } else{
    return 'secondary'
  }
}