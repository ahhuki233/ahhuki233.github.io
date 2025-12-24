# Portfolio Website

A responsive, accessible portfolio website built with React and focused on user experience and WCAG AA compliance.

## Features

- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **Accessibility (WCAG AA)**: Built with accessibility in mind, including:
  - Semantic HTML5 elements
  - ARIA labels and roles
  - Keyboard navigation support
  - Focus indicators
  - Screen reader friendly
  - Reduced motion support
  - High contrast mode support
- **Modern UX**: Clean, minimalist design with smooth animations and interactive elements
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Semantic markup and meta tags for better search engine visibility

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom CSS with CSS variables for theming
- **No external UI libraries**: Clean, custom components for full control

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Updating Content

1. **Hero Section**: Edit `/src/components/Hero.jsx`
   - Update name, title, and description
   - Modify call-to-action buttons

2. **About Section**: Edit `/src/components/About.jsx`
   - Update bio and description
   - Modify skills and expertise

3. **Projects**: Edit `/src/components/Projects.jsx`
   - Update the `projects` array with your work
   - Add project images (recommended)

4. **Contact**: Edit `/src/components/Contact.jsx`
   - Update email and social links
   - Configure form submission (currently simulated)

### Styling

- **Color Scheme**: Update CSS variables in `/src/index.css`
- **Typography**: Modify font families and sizes in CSS variables
- **Spacing**: Adjust spacing variables for layout changes
- **Animations**: Customize transition speeds and easing

### Accessibility Features

This portfolio includes:
- Skip to main content link
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and attributes
- Keyboard navigation
- Focus indicators
- Form validation with error messages
- Reduced motion support
- High contrast mode support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading ready
- Optimized CSS
- Minimal JavaScript bundle
- Fast initial page load

## License

MIT License

## Acknowledgments

Design inspired by modern, minimalist portfolio websites with a focus on accessibility and user experience.
