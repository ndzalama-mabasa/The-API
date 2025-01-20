const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!")
  };
  return response;
};
export {
  handler
};
//# sourceMappingURL=index.mjs.map
