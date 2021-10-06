// TODO: format error for prod
export default function formatApiError(error) {
  // if (error?.response?.status === 404) {
  //   return "Something's not right with the requested URL";
  // } else if (error?.response?.status === 500) {
  //   return "Something went wrong, please check your network and try again";
  // }

  // return "Something went wrong please try again later";

  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
}
