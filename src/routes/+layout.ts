export const ssr = false;
export const prerender = true;

export const load = ()=> {
    const user = {
        name: "Tito Mitto",
        age: 24
    }
    return user;
}