export function generateRandomString(length: number) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function generateRandomStringArray(
  arrayLength: number,
  stringLength: number
) {
  const randomStringArray = [];
  for (let i = 0; i < arrayLength; i++) {
    randomStringArray.push(generateRandomString(stringLength));
  }
  return randomStringArray;
}
