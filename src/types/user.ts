

export type User = {
    uid: string,
    email: string,
    level: number,
    age: number,
    gender: "male" | "female" | "other" |"NA",
    profileImgPath: string,
    userName: string,
}