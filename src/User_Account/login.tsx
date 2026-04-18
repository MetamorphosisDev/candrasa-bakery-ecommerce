import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cekLogin } from "../Data/verifikasi_Akun/_verifikasi_Akunlogin"

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        setTimeout(() => {
            const valid = cekLogin(email, password);

            if (valid) {
                navigate('/');
            } else {
                setError("Email atau password salah!");
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
                        className="flex items-center justify-center w-9 h-9 bg-[#000066] text-white rounded-full hover:bg-blue-900 transition active:scale-90 shrink-0"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <img src="Images\Logo\logo-web-full-color.svg" alt="Logo" className="h-9 object-contain" />
                </div>

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-extrabold text-[#000066] leading-tight">Login sebelum membeli produk.</h1>
                    <p className="text-gray-400 text-[11px] mt-1 font-semibold uppercase tracking-wider">Pengguna Candrasa Bakery</p>
                </div>

                {/* Error */}
                {error && (
                    <div className="mb-4 px-4 py-2 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
                        ⚠️ {error}
                    </div>
                )}

                {/* Form */}
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="exampletta@gmail.com"
                            id='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#EAEAEA] border-none outline-none focus:ring-2 focus:ring-[#5543FF] transition-all text-sm text-gray-500"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-700">Password <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            placeholder="User123333%"
                            value={password}
                            id='Password'
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-[#EAEAEA] border-none outline-none focus:ring-2 focus:ring-[#5543FF] transition-all text-sm text-gray-500"
                            required
                        />
                        <div>
                            <a href="#" className="text-sm font-semibold text-[#0099FF] hover:underline inline-block mt-1">Forgot Your Password?</a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#000033] text-white py-3 rounded-lg font-bold text-sm tracking-[0.15em] hover:bg-black transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sedang Login...' : 'LOGIN'}
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

                {/* Register Link */}
                <div className="mt-6 text-center">
                    <p className="text-sm font-bold text-gray-800">
                        Tidak Punya Akun?{' '}
                        <Link to="/register" className="text-[#0099FF] hover:underline font-bold">Register</Link>
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex lg:w-1/2 h-screen bg-[#5543FF] relative items-center justify-center overflow-hidden">
                <div className="absolute top-8 right-12 text-white opacity-20 text-2xl font-bold tracking-[8px]">......<br />......</div>
                <div className="absolute bottom-30 left-12 text-white opacity-20 text-2xl font-bold tracking-[8px]">......<br />......</div>
                <div className="relative z-10 w-full px-12 flex flex-col items-center">
                    <img
                        src="Images\vectorimage_log.png"
                        alt="Bakery Illustration"
                        className="max-w-[125%] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;