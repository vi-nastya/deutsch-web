const request = ({url, method, body}) => {
    let user = JSON.parse(localStorage.getItem('user'));

    return fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${user.api_token}`
        },
    })
        .then(response => response.json());
};

const get = (url) => {
    return request({url, method: 'get'});
};

const post = (url, body) => {
    return request({url, method: 'post', body});
};

export const rest = {
    get,
    post
};