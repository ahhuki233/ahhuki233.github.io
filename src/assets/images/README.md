# Portfolio Images

## How to Add Your Images

### For the About Page:

1. **Add your images to this folder** (`src/assets/images/`)
   - Recommended filenames: `profile.jpg` and `lifestyle.jpg`
   - Supported formats: JPG, PNG, WebP, SVG

2. **Update the code in `src/pages/AboutPage.jsx`**
   - Find the section at the top marked "📸 ADD YOUR IMAGES HERE"
   - Uncomment the import lines (remove the `//`):
     ```javascript
     import profileImage from '../assets/images/profile.jpg'
     import lifestyleImage from '../assets/images/lifestyle.jpg'
     ```
   - Or use your own filenames:
     ```javascript
     import profileImage from '../assets/images/my-photo.png'
     import lifestyleImage from '../assets/images/my-lifestyle.jpg'
     ```

3. **Alternative: Use URLs**
   - Instead of importing, you can use direct URLs:
     ```javascript
     const profileImage = 'https://example.com/your-image.jpg'
     const lifestyleImage = 'https://example.com/your-lifestyle.jpg'
     ```

### Image Recommendations:

- **Profile image**: Portrait orientation (3:4 ratio works best)
- **Lifestyle image**: Vertical or square photo
- **File size**: Keep under 1MB for optimal loading
- **Resolution**: 800-1200px width is ideal

### Example Structure:
```
src/assets/images/
├── README.md (this file)
├── profile.jpg (your profile photo)
└── lifestyle.jpg (your lifestyle photo)
```
