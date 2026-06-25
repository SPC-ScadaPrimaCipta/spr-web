# SPR Web — Company Profile PT. Sakatoyo Prima Resources

Website company profile untuk **PT. Sakatoyo Prima Resources (SPR)**, perusahaan konsultansi teknik dan rekayasa di bidang pertambangan, pengolahan mineral, metalurgi, dan sumber daya berkelanjutan.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Testing:** Vitest + Testing Library
- **Build Tool:** Vite

## Sections

| Section | Component | Description |
|---------|-----------|-------------|
| Beranda | `Hero.tsx` | Hero banner & company overview |
| Profil Perusahaan | `Hero.tsx` | Company profile detail & overview |
| Visi & Misi | `VisiMisi.tsx` | Vision and mission statements |
| Solusi dan Teknologi | `Teknologi.tsx` | Technology & engineering approach |
| Services | `Layanan.tsx` | Main services (consulting & training) |
| Other Services | `LayananPendukung.tsx` | Additional supporting services |
| Mengapa SPR | `MengapaMemilih.tsx` | Why choose SPR |
| Kontak | `Footer.tsx` | Contact information & address |

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | TypeScript type checking |
| `npm run test` | Run tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |

## Deployment

### Docker

```bash
docker compose up -d --build
```

The service runs on port **3002** behind Traefik with domain **saktoyo.id**.

## Data

All company content is centralized in `src/data.ts`, including company profile, vision & mission, services, technology approach, and contact information.

## Project Structure

```
src/
├── __tests__/       # Test files
├── app/             # Next.js app router
├── components/      # React components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── VisiMisi.tsx
│   ├── Teknologi.tsx
│   ├── Layanan.tsx
│   ├── LayananPendukung.tsx
│   ├── MengapaMemilih.tsx
│   ├── SakatoyoLogo.tsx
│   └── Footer.tsx
├── data.ts          # All content data
├── index.css        # Global styles
└── App.tsx          # Root component
```
