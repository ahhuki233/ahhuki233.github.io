# Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)

## Installation Steps

### 1. Install Dependencies

If you encounter permission issues with npm, try one of these methods:

**Method 1: Standard Installation**
```bash
npm install
```

**Method 2: If you get dependency conflicts**
```bash
npm install --legacy-peer-deps
```

**Method 3: If you have npm cache permission issues**
```bash
# Clear npm cache
npm cache clean --force

# Then install
npm install --legacy-peer-deps
```

**Method 4: Use alternative package manager (Recommended)**

Using Yarn:
```bash
# Install Yarn if you don't have it
npm install -g yarn

# Install dependencies with Yarn
yarn install
```

Using pnpm:
```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies with pnpm
pnpm install
```

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### Permission Denied Errors

If you get EACCES permission errors on macOS/Linux:

```bash
# Fix npm permissions (one-time setup)
sudo chown -R $USER:$(id -gn $USER) ~/.npm
```

### Port Already in Use

If port 5173 is already in use:

1. Stop the process using that port
2. Or modify `vite.config.js` to use a different port:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change to your preferred port
  },
})
```

### Module Not Found Errors

Make sure all dependencies are installed:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## Next Steps

After successful installation:

1. Customize the content in `/src/components/`
2. Update colors and styling in `/src/index.css`
3. Replace placeholder text with your information
4. Add your project images to `/src/assets/`
5. Configure form submission in Contact component

Enjoy building your portfolio!
