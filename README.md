# PIK-R CERIA DENSATGA

Website modern, mobile-first, dan aksesibel untuk PIK-R CERIA DENSATGA.

## Tech Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- lucide-react icons
- Poppins via `next/font`

## Getting Started

Install dependencies and run the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build & Checks

```bash
npm run lint
npm run build
```

## Aset

Logo dan file modul masih memakai placeholder. Semua data utama mudah diganti
di `src/lib/site-data.ts`:

- Logo: `[LINK_LOGO]`
- Folder modul: `[LINK_GOOGLE_DRIVE_MODUL]`
- Link tiap PDF: `[LINK_GDRIVE_*]`

## Yang Perlu Diisi Sebelum Publish

1. Nama sekolah resmi untuk mengganti `SMAN [NAMA SEKOLAH]`.
2. Logo final PIK-R CERIA DENSATGA.
3. Link Google Drive untuk 6 modul PDF:
   - Dasar PIK-R
   - PKBR
   - Risiko Seksualitas
   - P.U.P
   - Life Skills
   - 8 Fungsi Keluarga
4. Pastikan nomor Admin Wisnu dan Koor Khansa sudah benar.
5. Review semua materi bersama pembina/Guru BK.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
