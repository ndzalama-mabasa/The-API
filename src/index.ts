export const handler = async (event) => {
  const randomNumber = Math.random();
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello from Lambda with new code ${randomNumber}`),
  };
  return response;
};
