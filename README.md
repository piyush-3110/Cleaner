
# PureTouch Cleaning Co. Website -- https://cleaner-six.vercel.app/

A premium, responsive website for PureTouch Cleaning Co., a local cleaning business. The website features a visually striking design with elegant typography, smooth transitions, and a professional appearance.

## Features

- Modern, responsive design optimized for all devices
- Interactive hero section with animated wipe effect
- Service showcase with pricing options
- Testimonial display for social proof
- Contact form with validation
- Google Maps integration

## Tech Stack

- React (with TypeScript)
- React Router for navigation
- Tailwind CSS for styling
- Shadcn UI components
- React Query for data management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/piyush-3110/Cleaner
cd puretouch-cleaning-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The website should now be running at `http://localhost:8080`.

## Customization Guide

### Branding

- **Colors**: Edit the color variables in `tailwind.config.ts` under the `puretouch` section
- **Typography**: Update the font family in `tailwind.config.ts` and import any new fonts in `index.css`
- **Logo**: Replace the text logo in the Navbar component with your own logo image

### Content

- **Text**: Update the text content in each component file
- **Images**: Replace placeholder images in the `/public/images` directory
- **Services**: Modify the service details in `src/components/services/ServiceList.tsx`
- **Testimonials**: Update testimonials in `src/components/home/Testimonials.tsx`
- **Contact Info**: Change contact details in `src/components/contact/ContactForm.tsx` and the footer

### Adding New Pages

1. Create a new component file in `src/pages/`
2. Add the route to `src/App.tsx`
3. Create necessary components in `src/components/`

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Configure the build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy


## License

This project is licensed under the MIT License.

## Credits

- Images sourced from placeholder services (replace with actual business photos)
