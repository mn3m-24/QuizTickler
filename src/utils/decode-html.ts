const decodeHtml = (str: string) => {
  return new DOMParser().parseFromString(str, 'text/html').documentElement
    .textContent;
};

export default decodeHtml;
