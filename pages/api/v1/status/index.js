function status(request, response) {
  response.status(200).json({ key: "I'm gonna be rich." });
}

export default status;
