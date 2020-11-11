// export const getPoetry = async ()=>{
//     const result = await fetch("https://v1.jinrishici.com/all.json","GET")
//     const { origin, author, content } = await result.json();
//
//     return [ origin, author, content];
// }
export const getPoetry = () => {
    return fetch("https://v1.jinrishici.com/all.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            const { origin, author, content } = data;
            return [origin, author, content];
        });
};