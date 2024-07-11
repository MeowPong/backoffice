const config = {
    apiPath: 'https://apiformyproject.azurewebsites.net',
    headers: ()=> {
        return{
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        };
    },
};

export default config;