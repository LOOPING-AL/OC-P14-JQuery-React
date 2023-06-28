const genericCall = (method: string, body: {} | undefined) =>
  fetch('http://localhost:3001/employee', {
    method,
    ...(body && {
      body: JSON.stringify(body),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res);

export default genericCall;
