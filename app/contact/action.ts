// Pertama, kita butuh "mesin" untuk memproses data.

'use server'

import { Resend } from 'resend';

// Ambil API Key dari .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleContactForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Gunakan ini dulu untuk testing
            to: ['diraoktap.code@gmail.com'], // GANTI dengan email asli kamu
            subject: `Pesan Baru dari ${name}`,
            html: `
        <p>Ada pesan baru dari website portofolio:</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
        });

        return { success: true, message: "Pesan berhasil terkirim ke email!" };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Gagal mengirim pesan." };
    }
}