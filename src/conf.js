const config = {
    APP_NAME: "GaanaWorld.in",
    VERSION: '1.0',
    APP_URL: "https://gaanaworld.in/",
    API_URL: "http://127.1.2.8/",
    DOWNLOAD_SERVER_URL: 'https://files.gaanaworld.in/',
    LIMITS: {
        LATEST_UPLOADS: 18,
        SONG_LIMIT: 20
    },
    USERINFO: {
        userName: null,
        isLogged: false,
        email: null,
        userId: null
    },
    TOAST_INFO_STYLE: {
        style: {
            border: '2px solid var(--dark-blue)',
            padding: '8px',
            color: 'var(--dark-blue)',
        },
        iconTheme: {
            primary: 'var(--dark-blue)',
            secondary: 'white',
        }
    }
}

export default config