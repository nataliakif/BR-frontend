const stringMax = (string, stringLength) => {
  const stringStrip = string
    .split(' ')
    .filter(word => word)
    .join(' ');

  if (stringStrip.length > stringLength) {
    const subStringStrip = stringStrip.substring(0, stringLength);

    const newString = subStringStrip.substring(
      0,
      Math.max(
        subStringStrip.lastIndexOf(' '),
        subStringStrip.lastIndexOf(',') + 1
      )
    );
    return newString + ' ...';
  } else {
    return stringStrip;
  }
};

export default stringMax;
