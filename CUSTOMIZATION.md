# Customization Guide

This guide will help you personalize your portfolio website.

## Quick Start Checklist

- [ ] Update personal information in Hero section
- [ ] Add your bio in About section
- [ ] Update skills and expertise
- [ ] Add your projects
- [ ] Update contact information
- [ ] Customize colors and fonts
- [ ] Add your resume PDF
- [ ] Update social media links

## 1. Personal Information

### Hero Section
**File:** `src/components/Hero.jsx`

```jsx
// Update these lines:
<span className="highlight purple">Xueer (Yuki) Xu</span>  // Replace with your name
<span className="highlight orange">Insight-Driven Researcher</span>  // Your primary role
<span className="highlight green">User-Centered Designer</span>  // Your secondary role

// Update the description:
I create user-centered experiences through insight and intention.  // Your personal tagline
```

### Footer
**File:** `src/components/Footer.jsx`

```jsx
© {currentYear} Xueer (Yuki) Xu. All rights reserved.  // Replace "Your Name"
```

## 2. About Section

**File:** `src/components/About.jsx`

### Update Bio
Replace the three paragraphs with your own story.

### Update Skills
Modify the `skills` array:

```jsx
const skills = [
  {
    category: 'Your Category',
    items: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']
  },
  // Add more categories as needed
]
```

## 3. Projects

**File:** `src/components/Projects.jsx`

Update the `projects` array with your work:

```jsx
{
  id: 1,
  title: 'YumGo: Restaurant Discovery & Booking',
  description: 'Student Project } A user-centered restaurant discovery and booking app built on familiar map-based interactions.',
  role: 'Your Role',
  tags: ['Tech 1', 'Tech 2', 'Tech 3'],
  link: 'https://your-project-link.com',  // Or '#' if no link yet
  accentColor: 'purple', // Options: 'purple', 'orange', 'green'
}
```

### Adding Project Images (Recommended)

1. Add images to `src/assets/`
2. Import in Projects.jsx:
```jsx
import projectImage from '../assets/project-name.jpg'
```

3. Add to project card:
```jsx
<img src={projectImage} alt="Project screenshot" />
```

## 4. Contact Information

**File:** `src/components/Contact.jsx`

### Email
```jsx
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

### Social Links
Update all instances of social links:
```jsx
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourusername">GitHub</a>
<a href="https://dribbble.com/yourusername">Dribbble</a>
```

### Form Submission
The form currently simulates submission. To connect to a real backend:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()

  // Replace with your API endpoint
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })

  // Handle response...
}
```

Popular form services:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

## 5. Colors & Branding

**File:** `src/index.css`

Update CSS variables at the top:

```css
:root {
  /* Main colors */
  --color-primary: #000000;
  --color-secondary: #ffffff;

  /* Accent colors - customize these! */
  --color-accent-purple: hsl(256, 70%, 60%);
  --color-accent-orange: hsl(19, 85%, 60%);
  --color-accent-green: hsl(81, 70%, 55%);

  /* Text colors */
  --color-text: #1a1a1a;
  --color-text-light: #4f4e4eff;
}
```

### Color Scheme Tips:
- Use [Coolors.co](https://coolors.co/) for color palette generation
- Ensure sufficient contrast for WCAG AA compliance (use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/))
- Test with colorblind simulators

## 6. Typography

**File:** `src/index.css`

```css
:root {
  /* Change font family */
  --font-family: 'Your Font', -apple-system, sans-serif;

  /* Adjust font sizes */
  --font-size-4xl: 3.5rem;  // Hero title
  --font-size-3xl: 2.5rem;  // Section titles
  --font-size-2xl: 2rem;    // Subsections
  --font-size-xl: 1.5rem;   // Large text
  --font-size-large: 1.125rem;  // Body large
  --font-size-base: 16px;   // Base size
}
```

### Using Custom Fonts:

1. **Google Fonts** (in `index.html`):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

2. **Local Fonts** (in `index.css`):
```css
@font-face {
  font-family: 'Your Font';
  src: url('/fonts/your-font.woff2') format('woff2');
}
```

## 7. Resume

Add your resume PDF to the `public` folder (create if it doesn't exist):

```bash
mkdir public
# Add resume.pdf to this folder
```

The download link in About.jsx will automatically work.

## 8. SEO & Meta Tags

**File:** `index.html`

```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
<title>Your Name - Portfolio</title>

<!-- Open Graph for social media -->
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="/og-image.jpg">
```

## 9. Favicon

Replace the default favicon:

1. Generate favicons at [Favicon.io](https://favicon.io/)
2. Place in `public` folder
3. Add to `index.html`:

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

## 10. Navigation

**File:** `src/components/Navigation.jsx`

Update the logo:
```jsx
<a href="#main-content" className="logo">
  <span aria-label="Home">Your Name</span>  // Or use logo image
</a>
```

Update navigation links if you add/remove sections:
```jsx
const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  // Add more sections as needed
]
```

## Testing Your Changes

After making changes:

1. **Visual Check**: View in browser at different screen sizes
2. **Accessibility**: Use [WAVE](https://wave.webaim.org/) or browser DevTools
3. **Responsiveness**: Test on mobile devices or use DevTools device emulation
4. **Performance**: Use Lighthouse in Chrome DevTools

## Deployment

Ready to deploy? See deployment guides for:
- [Vercel](https://vercel.com/) (Recommended)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

Most support direct integration with your Git repository for automatic deployments.

---

Need help? Check the main README.md or create an issue in your repository.
