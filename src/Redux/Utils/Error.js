export default function Error(error) {
  if (error.code) {
    return {
      code: error.code,
      message: error.message,
    };
  }
  return {
    code: -1,
    message: "We are facing some trouble ",
  };
}
