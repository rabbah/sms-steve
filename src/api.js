const send_sms = options => {
    return window
        .fetch(`/api/default/web-sms`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        })
        .then(
            res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return null;
                }
        })
        .then(data => {
            if (!data || data.error) {
                console.log("API Error: ", { data });
                throw Error ("API Error");
            } else {
                return data;
            }
        });
};

const api = {
    send_sms : send_sms
};

export default api;
