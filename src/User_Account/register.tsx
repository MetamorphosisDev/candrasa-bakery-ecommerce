import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cekRegister } from '../Data/verifikasi_Akun/_verifikasi_AkunRegister';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [noTelp, setNoTelp] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        setTimeout(() => {
            const sukses = cekRegister(email, noTelp);

            if (sukses) {
                alert('Registrasi berhasil! Silakan login.');
                navigate('/login');
            } else {
                setError('Email atau nomor HP sudah terdaftar!');
            }

            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-white font-inter">

            {/* Left Side */}
            <div className="w-full lg:w-1/2 flex flex-col px-10 md:px-16 lg:px-20 py-8 overflow-hidden">

                {/* Back + Logo */}
                <div className="flex flex-col items-start gap-4 mb-8">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center w-9 h-9 bg-blue-dark text-white rounded-full hover:bg-blue-900 transition active:scale-90 shrink-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <img src="Images\Logo\logo-web-full-color.svg" alt="Logo" className="h-9 object-contain" />
                </div>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-extrabold text-[#000066] leading-tight">Buat Akun Baru</h1>
                    <p className="text-gray-400 text-[11px] mt-1 font-semibold">Ayo buat akun untuk menjelajahi web kami!</p>
                </div>


                {error && (
                    <div className="mb-4 px-4 py-2 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                        ⚠️ {error}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-4" onSubmit={handleRegister}>

                    {/* Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700">Name <span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-[#EAEAEA] border-none outline-none focus:ring-2 focus:ring-[#5543FF] transition-all text-sm text-gray-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="First Name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-[#EAEAEA] border-none outline-none focus:ring-2 focus:ring-[#5543FF] transition-all text-sm text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="@exampletta@gmail.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#EAEAEA] border-none outline-none focus:ring-2 focus:ring-[#5543FF] transition-all text-sm text-gray-500"
                            required
                        />
                    </div>

                    {/* No. Telp */}
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700">No. Telp</label>
                        <input
                            type="text"
                            placeholder="0 8 X X X X X X X X"
                            value={noTelp}
                            onChange={e => setNoTelp(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#EAEAEA] border-none outline-none focus:ring-2 focus:ring-[#5543FF] transition-all text-sm text-gray-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#000033] text-white py-3 rounded-lg font-bold text-sm tracking-[0.05em] hover:bg-black transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Mendaftarkan...' : 'Register'}
                    </button>
                </form>

                {/* Divider */}
                <div className="relative flex py-5 items-center">
                    <div className="grow border-t border-gray-300"></div>
                    <span className="shrink mx-4 text-gray-400 text-xs font-semibold uppercase">Or with</span>
                    <div className="grow border-t border-gray-300"></div>
                </div>

                {/* Social */}
                <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="flex items-center justify-center py-3 rounded-lg bg-[#EAEAEA] hover:bg-gray-200 transition">
                        <img src="\Images\Logo\GoggleLogo.png" alt="Google" className="w-7" />
                    </button>
                    <button type="button" className="flex items-center justify-center py-3 rounded-lg bg-[#EAEAEA] hover:bg-gray-200 transition">
                        <img src="\Images\Logo\FacebookLogo.png" alt="Facebook" className="w-7" />
                    </button>
                </div>

                {/* Login Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm font-bold text-gray-800">
                        Udah Punya Akun?{' '}
                        <Link to="/login" className="text-[#0099FF] hover:underline font-bold">Login</Link>
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#5543FF] relative items-center justify-center overflow-hidden">
                <div className="absolute top-8 right-12 text-white opacity-20 text-2xl font-bold tracking-[8px]">......<br />......</div>
                <div className="absolute bottom-16 left-12 text-white opacity-20 text-2xl font-bold tracking-[8px]">......<br />......</div>
                <div className="relative z-10 w-full px-12 flex flex-col items-center">
                    <img
                        src="/Images\vectorimage_log.png"
                        alt="Bakery Illustration"
                        className="max-w-[125%] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;