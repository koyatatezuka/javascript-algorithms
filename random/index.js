// random obj container
const random = {};

random.findEmailDomain = email => email.match(/@\w.*/)[0].replace('@', '');

module.exports = random;
