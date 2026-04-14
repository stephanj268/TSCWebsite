export const PORT = 3000
export const URL = `http://localhost`

export function validateEmail(email: any) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}