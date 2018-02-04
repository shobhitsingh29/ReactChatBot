import Production from './production'
import Development from './development'

const config = {
    production: Production,
    development: Development
};
// get app environment
const env = process.env.NODE_ENV || 'development';

export const isProd = () => {
    if(process.env.NODE_ENV === 'production')
        return true;
    else 
        return false;
};

export default config[env]