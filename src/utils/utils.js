export const auth = () => {
    const jwt = JSON.parse(sessionStorage.getItem("jwt"));

    if (jwt && jwt.jwt) {
        return {Authorization: "Bearer " + jwt.jwt};
    } else {
        return {};
    }
}