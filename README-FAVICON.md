# Favicon Setup

## Where to Place Your Favicon Files

Place all your favicon files **directly in this `public` folder**.

```
portfolio/
└── public/
    ├── favicon.ico           (16x16 or 32x32 ICO file)
    ├── favicon-16x16.png     (16x16 PNG)
    ├── favicon-32x32.png     (32x32 PNG)
    └── apple-touch-icon.png  (180x180 PNG for iOS)
```

## How to Generate Favicon Files

### Option 1: Use Favicon.io (Recommended - Free & Easy)
1. Visit [https://favicon.io/](https://favicon.io/)
2. Choose one of these options:
   - **Text to Favicon**: Generate from your initials (e.g., "YX" or "Y")
   - **Image to Favicon**: Upload your own logo/image
   - **Emoji to Favicon**: Use an emoji as your favicon
3. Download the generated zip file
4. Extract and copy these files to this `public` folder:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Option 2: Use RealFaviconGenerator
1. Visit [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
2. Upload your logo/image (at least 260x260px recommended)
3. Customize settings for different platforms
4. Download and extract files to this folder

### Option 3: Create Your Own
If you have design software (Figma, Photoshop, etc.):

1. **Create the base image:**
   - Size: 512x512px minimum
   - Format: PNG with transparent background
   - Keep it simple - favicons are displayed very small

2. **Generate different sizes:**
   - Use an online converter or image editing tool
   - Create: 16x16, 32x32, 180x180 versions
   - Convert one version to ICO format

3. **Name and save:**
   - `favicon.ico` (16x16 or 32x32)
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180)

## Quick Test

After adding your favicon files:

1. Start your dev server: `npm run dev`
2. Open `http://localhost:5173` in your browser
3. Look at the browser tab - you should see your favicon!
4. If it doesn't appear immediately, try:
   - Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
   - Clear browser cache
   - Close and reopen the browser tab

## Favicon Design Tips

- **Keep it simple**: Favicons are tiny (16x16px), so avoid complex details
- **High contrast**: Make sure it's visible on both light and dark browser themes
- **Test on multiple browsers**: Check Chrome, Firefox, Safari, and Edge
- **Initials work great**: "YX" or just "Y" can make a clean, professional favicon
- **Match your brand**: Use colors from your website's color scheme

## Current Setup

The HTML already includes these favicon links:
- Standard favicon (favicon.ico)
- PNG versions for modern browsers (16x16, 32x32)
- Apple touch icon for iOS devices (180x180)

Just add your files to this folder and you're done!
