const user = require('../Api/pasien/ApiPasien');
const auth = require('../Api/Auth/ApiAuth')
const kamar = require('../Api/kamar/ApiKamar')
const penyakit = require('../Api/penyakit/ApiPenyakit')
const biaya = require('../Api/Biayaperawatan/ApiBiaya')
const player = require('./player.json')

module.exports = (app) => {

//Route pasien
app.get('/pasien', user.getusers ) 
app.get('/pasien/:Id', user.findUsers ) 
app.get('/pasien/namapasien/:name', user.findname )
app.post('/addpasien', user.addUser )
app.put('/edit/:Id', user.updateUser )
app.put('/edit/updateuserbyname/:name', user.updateUserbyname )
app.delete('/pasien/delete/:Id', user.deleteUser )

// Route auth
app.post('/login', auth.login )
app.post('/register', auth.register )
app.get('/user/:Id', auth.getUserById )
app.put('/user/update/:Id', auth.updateUser )
app.get('/authenticated', auth.authenticated )
app.post('/forgotPassword', auth.forgotPassword )
app.put('/reset/:token', auth.resetPassword )
app.put('/verifikasi/:token', auth.verify)
app.post('/verifyemail', auth.verifyEmail)

// Route penyakit
app.get('/penyakit', penyakit.getpenyakit )
app.get('/penyakit/:Id', penyakit.findpenyakit )
app.post('/addpenyakit', penyakit.addpenyakit )
app.put('/editpenyakit/:Id', penyakit.updatepenyakit )
app.delete('/penyakit/delete/:Id', penyakit.deletepenyakit )

// Route kamar
app.get('/kamar', kamar.getkamar )
app.get('/kamar/:Id', kamar.findKamar )
app.post('/addkamar', kamar.addKamar )
app.put('/editkamar/:Id', kamar.updateKamar )
app.delete('/kamar/delete/:Id', kamar.deleteKamar )

// Route biaya
app.get('/biaya', biaya.getbiaya )
app.get('/biaya/:Id', biaya.findbiaya )
app.post('/addbiaya', biaya.addbiaya )
app.put('/editbiaya/:Id', biaya.updatebiaya )
app.delete('/biaya/delete/:Id', biaya.deletebiaya )





}


