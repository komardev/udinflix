const appUrl = process.env.REACT_APP_API_OMDB;
const apiKey = process.env.REACT_APP_API_KEY

const development = {
    url: {
        api: `${appUrl}/?apikey=${apiKey}`
    },
}

export const config = development;

const baseUrl = {
    main: `${config.url.api}`,
};

export default baseUrl;