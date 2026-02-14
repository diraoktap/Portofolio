'use client'

import { handleContactForm } from './action';
import { useState } from 'react';

export default function ContactPage() {
    const [status, setStatus] = useState<string | null>(null);

    async function clientAction(formData: FormData) {
        setStatus("Sedang mengirim...");
        const result = await handleContactForm(formData);
        setStatus(result.message);
    }

    return (
        <main className="p-8 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold mb-6">Hubungi Saya</h1>

            <form action={clientAction} className="space-y-4">
                <div>
                    <label className="block mb-1">Nama</label>
                    <input name="name" type="text" required className="w-full border p-2 rounded text-black" />
                </div>
                <div>
                    <label className="block mb-1">Email</label>
                    <input name="email" type="email" required className="w-full border p-2 rounded text-black" />
                </div>
                <div>
                    <label className="block mb-1">Pesan</label>
                    <textarea name="message" required className="w-full border p-2 rounded text-black" rows={4} />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Kirim Pesan
                </button>
            </form>

            {status && <p className="mt-4 text-green-600 font-medium">{status}</p>}
        </main>
    );
}