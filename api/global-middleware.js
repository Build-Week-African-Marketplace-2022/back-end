// validates req.body using yup schema passed as schema
const validator = (schema) => async (req, res, next) => {
    try {
      await schema.validate({ body: req.body })
      next()
    } catch (err) {
      next({ status: 401, ...err })
    }
  }
  
  // eslint-disable-next-line
  const errorHandling = (err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  }
  
  const sendEntries = (key) => (req, res) => res.json(req[key])
  
  const sendUnpackedEntry = (key) => (req, res) => res.json(req[key])
  
  const sendEntry =
    (key, status = 200) =>
    (req, res) => {
      res.status(status).json({ [key]: req[key] })
    }
  
  const sendEntryId = (key, idKey) => (req, res) => res.json({ [idKey]: req[key][idKey] })
  
  const sendMessage = (message) => (req, res) => res.json({ message })
  
  const sendNothing = (req, res) => res.status(201).end()
  
  module.exports = {
    validator,
    errorHandling,
    sendEntries,
    sendEntry,
    sendUnpackedEntry,
    sendEntryId,
    sendMessage,
    sendNothing,
  }