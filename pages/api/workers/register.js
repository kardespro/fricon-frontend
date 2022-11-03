// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
  
  res.status(200).json({ workerID: makeid(5) })
}
