exports.handler = async (event) => {
    const photoDatabase = {
        "1": "https://example.com/photo1.jpg",
        "2": "https://example.com/photo2.jpg",
        // 他の写真番号とURLを追加
    };

    const number = event.queryStringParameters.number;
    const url = photoDatabase[number];

    if (url) {
        return {
            statusCode: 200,
            body: JSON.stringify({ url: url }),
        };
    } else {
        return {
            statusCode: 404,
            body: JSON.stringify({ url: null }),
        };
    }
};
