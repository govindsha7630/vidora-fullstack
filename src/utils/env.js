const env = {
    mongoDbUri: String(process.env.MONOGODB_URI),
    
}
console.log(env.mongoDbUri)

export default env