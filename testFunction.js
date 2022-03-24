exports.testFunction = (req, res) => {
    let body = req.body
  let params = ['organizationId', 'objectId', 'name']

  if (Object.keys(body).every(key => params.includes(key))) {
    console.log(JSON.stringify(body))
    res.sendStatus(200)
  }
  else {
    res.sendStatus(404)
  }
}