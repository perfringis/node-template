module.exports.hello = async (req, res) => {
  return await res.status(200).json({ message: 'hello!' });
};
