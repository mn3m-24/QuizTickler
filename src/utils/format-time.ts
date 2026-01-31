const formatTime = (milliseconds: number) => {
  const totalSeconds = Math.ceil(milliseconds / 1000);
  return {
    minutes: Math.floor(totalSeconds / 60),
    seconds: totalSeconds % 60,
  };
};

export default formatTime;
