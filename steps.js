/**
 * Mongodb connection
 * ----------------------
 * create account 
 * crate an user with password
 * whitelist ip address
 * database > connect > driver > node > view full code
 * change the password uri 
 * make sure to use express.json() middleware - cors()
 * -----------------------------
 * const userCollection = client.db('usersDB').collection('users')
 * ------------------------------------------------
 * 1. create post :
 * 
 * SERVER:
 * app.post('/users', async (req, res)=> {
 * const data = req.body;
 * const result = await userCollection.insertOne(data)
 * res.send(result)})
 * 
 * CLIENT:
 * fetch('.../users', {
 * method:'POST',
 * headers: {
 * 'content-type':'application/json'},
 * body: JSON.stringify(.....)})
 * -----------------
 * 2. read post
 * 
 * SERVER
 * app.get('/users', async(req, res) =>{
 * const cursor = userCollection.find()
 * const result = await cursor.toArray()
 * res.send(result)})
 * 
 * CLIENT
 * fetch(.../users)
 * ---------------------------
 * 3.delete post
 * 
 * SERVER
 * app.delete('/users/:id', async(req, res)=>{
 * const id = req.params.id;
 * const query = {_id : new ObjectId(id)}
 * const result = await userCollection.deleteOne(query);
 * res.send(result)
 * })
 * 
 * CLIENT
 * fetch('.../users/${id}',{
 * method: 'DELETE'
 * })
 */