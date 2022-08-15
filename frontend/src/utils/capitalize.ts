export default (str: string): string => {
  if (typeof str === 'string' && str?.length) {
    return `${str[0].toUpperCase()}${str.substring(1)}`;
  }
  return str;
};
