// 活动安排问题

let events = [
  { start: 1, end: 4 },
  { start: 3, end: 5 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 3, end: 8 },
  { start: 5, end: 9 },
  { start: 6, end: 10 },
  { start: 8, end: 11 },
  { start: 8, end: 12 },
  { start: 2, end: 13 },
  { start: 12, end: 14 },
];

// 贪心策略是找结束时间最早的活动
const scheduleEvents = (events) => {
  const res = [];

  // 获取结束时间最早的时间
  const getEarlyEndEvent = (events) => {
    let endTime = null;
    let res = null;

    events.forEach(i => {
      if((i.end < endTime) || !endTime) {
        res = i;
        endTime = i.end;
      }
    });

    return res;
  };

  // 删除不合适的events
  const deleteNotAvailableEvents = (events, endTime) => {
    // 如果开始时间大于结束时间那么就无法被安排
    return events.map(i => {
      if(i && i.start < endTime) {
        return null;
      }
      return i;
    }).filter(i => i);
  };

  let lastEvents = events;
  // 如果还有事件残留那么继续
  while (lastEvents.length) {
    // 获取最先结束的事件
    const earlyEndEvent = getEarlyEndEvent(lastEvents);
    res.push(earlyEndEvent);
    // 删除不能再安排的事件
    lastEvents = deleteNotAvailableEvents(lastEvents, earlyEndEvent.end);
  }

  return res;
};

scheduleEvents(events);
