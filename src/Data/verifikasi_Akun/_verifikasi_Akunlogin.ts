import { dataUser } from "../_akun_Login";

export function cekLogin(email: string, password: string): boolean {
    for (let i = 0; i < dataUser.length; i++) {
        if (email === dataUser[i].email && password === dataUser[i].password) {
            return true;
        }
    }

    return false;
}