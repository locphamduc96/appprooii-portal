const getDateFromMillis = (time: number): string => {
  const date = new Date(time);
  const yyyy = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'long' });
  let dd: number | string = date.getDate();
  if (dd < 10) dd = '0' + dd;

  return month + ' ' + dd + ', ' + yyyy;
};

function decodeHTMLEntities(text: string) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}

const Utils = {
  getDateFromMillis,
  decodeHTMLEntities
};

export default Utils;
