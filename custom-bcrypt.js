const md5 = require('md5');

module.exports={
    /**
     * 
     * @param {string} rawpass- the password to be hashed
     * @param {string} [options={0}] - containing salt ans rounds
     * @return {string}
     */
    hash(rawpassword, options={}){
        /** 
         * salt is optional; if not probided it will be set to current timestamp
         */
        const salt = options.salt ? options.salt : new Date().getTime();

        /**
         * rounds is optional, if not provided it will be set to 10
         */
        const rounds = options.rounds ? options.rounds : 10
        let hashed = md5(rawpassword+salt)
        for(let i=0;i<=rounds;i++){
            hashed = md5(hashed)
        }
        return `${salt}$${rounds}$${hashed}`
    },
/**
 *
 * @param {string} rawPassword - the raw pasword
 * @param {string} hashedpassword - hash password
 * @return
 *  
 */
compare (rawpassword,hashedpassword) 
{
    try{
        const [salt,rounds]= hashedpassword.split('$');
        const hashedRawpassword = this.hash(rawpassword,{salt,rounds});
        return hashedpassword === hashedRawpassword;
    } catch(err)
    {
     throw Error(err.message);
    }
}
}