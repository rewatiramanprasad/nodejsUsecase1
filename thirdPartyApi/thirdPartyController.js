const axios = require('axios')
const node_fetch = require('node-fetch');


const postalWithAxiom = async (req, res, next) => {
    let { postalCode } = req.params
    let url = `https://api.postalpincode.in/pincode/` + postalCode


    try {
        const data = await axios.get(url)
        console.log(data);
        res.send(data.data[0])
    }
    catch (e) {
        next(e)
    }

}


const postalWithNodeFetch = async (req, res, next) => {
    let { postalCode } = req.params
    let url = `https://api.postalpincode.in/pincode/` + postalCode

    await node_fetch(url)
        .then(respond => respond.json())
        .then(result => res.status(200).send(result[0]))
        .catch(err => next(err));


}




const generateToken = async (req, res, next) => {
    //let { postalCode } = req.params
   // let url = http://127.0.0.1:5000/v1/callback` + postalCode

const appKey='jxxjxe5oo8x711p'
const redirect='http//127.0.0.1:5000/v1/callback'


    try {
        const data = await axios({
            method: 'get',
            url: `https://www.dropbox.com/oauth2/authorize?client_id=${appKey}&response_type=code
            `,
            });
        console.log(data);
        res.send(data)
    }
    catch (e) {
        console.log(e)
    }

}





module.exports = { postalWithAxiom, postalWithNodeFetch,generateToken }