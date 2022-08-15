export default (error: any) => {
  try {
    if (error.response) {
      return error.response.data;
    }
    return {
      message: error.message,
    };
  } catch (e) {
    return {
      message: 'Network error',
    };
  }
};
