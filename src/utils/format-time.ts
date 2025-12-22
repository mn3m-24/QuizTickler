const formatTime = (milliseconds: number) => {
  return {
    minutes: Math.floor(milliseconds / (60 * 1000)),
    seconds: Math.floor((milliseconds % (60 * 1000)) / 1000),
  };
};

export default formatTime;
