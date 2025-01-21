export const handler = async (event) => {
  let randomNumber = Math.random();
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello from ES Module with code ${randomNumber}`),
  };
  return response;
};
