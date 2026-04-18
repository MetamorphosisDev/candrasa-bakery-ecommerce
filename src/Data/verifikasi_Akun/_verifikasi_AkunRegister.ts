import { dataUser } from "../_akun_Login";

export function cekRegister(email: string, nomor_Handphone: string) {
    for (let i = 0; i < dataUser.length; i++) {
        if (email === dataUser[i].email || nomor_Handphone === dataUser[i].nomor_Handphone) {
            return false;
        }
    }
    return true;
}