# Valentine's Day Photo Gallery

A beautiful Valentine's Day photo gallery to share your special moments.

## How to Update Photos

1. Place your photos in the `src/assets/photos` directory
2. Name them as:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`

3. The photos will automatically appear in the gallery in order

Note: Make sure your photos are in JPG format. If you have photos in a different format, you'll need to convert them to JPG first.

## Photo Requirements

- Format: JPG
- Recommended size: 800x800 pixels or larger
- Aspect ratio: 1:1 (square) recommended for best display

## Customizing Photo Descriptions

You can update the photo descriptions in `src/assets/photos/index.js`:

```javascript
export const photos = [
  {
    id: 1,
    src: photo1,
    alt: 'Our First Date', // Update this text
  },
  // ... repeat for other photos
];
```