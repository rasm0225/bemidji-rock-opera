# Bemidji! The Rock Opera - Website

A fully-featured rock opera website with audio player, synchronized lyrics, and track navigation.

## Features

- **Home page** with title and cover art
- **Audio player** that plays through 48 songs sequentially
- **Playback controls** (play/pause, previous, next)
- **Synchronized lyrics/script** display for currently playing song
- **Track listing** showing all 48 songs with click-to-jump functionality
- **About section** with story and creative background
- **Dark theatrical aesthetic** with dramatic typography
- **Fully responsive design** for mobile and desktop
- **Visual progress indicator** showing current song position
- **Auto-advance** to next song when one finishes

## File Structure

```
rock-opera/
├── index.html          # Main HTML file
├── styles.css          # All styling (dark theatrical theme)
├── script.js           # JavaScript functionality
├── cover-art.svg       # Placeholder cover art
├── README.md           # This file
└── songs/              # Directory for audio files (create this)
    ├── 01-opening-overture.mp3
    ├── 02-welcome-to-the-northwoods.mp3
    └── ... (48 songs total)
```

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser

2. **Add your audio files**:
   - Create a `songs/` directory in the same folder as index.html
   - Add your audio files (MP3 format recommended)
   - Name them according to the pattern: `01-song-title.mp3`, `02-song-title.mp3`, etc.

3. **The website will work without audio files** - you'll see the lyrics and can navigate the interface, but audio won't play until you add the files

## Customization Guide

### 1. Update Song Titles and Lyrics

Edit the `songs` array in `script.js` (starting at line 2):

```javascript
const songs = [
    {
        id: 1,
        title: "Your Song Title Here",
        audioFile: "songs/01-your-song-title.mp3",
        lyrics: "Your lyrics here...\n\nMultiple lines supported..."
    },
    // ... more songs
];
```

**Tips:**
- Keep the `id` numbers sequential (1-48)
- Use `\n\n` for line breaks in lyrics
- Match `audioFile` path to your actual audio file names

### 2. Replace Cover Art

**Option A - Replace the SVG:**
- Edit `cover-art.svg` or replace it with your own SVG design

**Option B - Use an image file:**
- Replace `cover-art.svg` with `cover-art.jpg` or `cover-art.png`
- Update line 14 in `index.html` to match your filename:
  ```html
  <img src="cover-art.png" alt="Bemidji! The Rock Opera Cover Art">
  ```

### 3. Modify the About Section

Edit the about content in `index.html` (lines 73-101):

```html
<section class="about-section">
    <h3>About the Opera</h3>
    <div class="about-content">
        <h4>The Story</h4>
        <p>Your story here...</p>
        <!-- Add more sections as needed -->
    </div>
</section>
```

### 4. Customize Colors

Edit CSS variables in `styles.css` (lines 8-15):

```css
:root {
    --color-bg-primary: #0a0a0a;        /* Main background */
    --color-bg-secondary: #1a1a1a;      /* Section backgrounds */
    --color-bg-tertiary: #2a2a2a;       /* Nested elements */
    --color-accent-gold: #d4af37;       /* Gold accents */
    --color-accent-crimson: #8b0000;    /* Red accents */
    --color-text-primary: #f5f5f5;      /* Main text */
    --color-text-secondary: #cccccc;    /* Secondary text */
    --color-border: #3a3a3a;            /* Borders */
}
```

### 5. Change Typography

Update font families in `styles.css`:

- Main body: Line 18 (`font-family: 'Georgia', 'Times New Roman', serif;`)
- Title: Line 52 (`font-family: 'Impact', 'Arial Black', sans-serif;`)
- Buttons: Line 144 (`font-family: 'Arial', sans-serif;`)

### 6. Adjust Number of Songs

If you have more or fewer than 48 songs:

1. Update the `songs` array in `script.js` with your total number of songs
2. The progress indicator and track listing will automatically adjust

## Audio File Format

**Recommended:**
- Format: MP3
- Bitrate: 192-320 kbps
- Sample rate: 44.1 kHz

**Also supported:**
- OGG Vorbis
- WAV (large file size)
- M4A/AAC

Update the audio source type in `index.html` line 34 if using non-MP3 files:
```html
<source src="" type="audio/ogg">  <!-- for OGG -->
<source src="" type="audio/wav">  <!-- for WAV -->
```

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

**Note:** Audio playback may be restricted by browser autoplay policies. Users may need to interact with the page (click play) before audio starts.

## Mobile Optimization

The website is fully responsive and optimized for:
- Smartphones (320px+)
- Tablets (768px+)
- Desktop (1200px+)

## Troubleshooting

**Audio won't play:**
- Check that audio files exist in the `songs/` directory
- Verify file names match the `audioFile` paths in `script.js`
- Check browser console (F12) for error messages
- Some browsers require user interaction before playing audio

**Lyrics not displaying:**
- Verify the `lyrics` property is set for each song in `script.js`
- Check for JavaScript errors in browser console

**Layout issues:**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Verify all CSS files are loading properly
- Check browser console for 404 errors

## Deployment

To publish your website:

1. **Simple hosting:**
   - Upload all files to any web hosting service
   - Ensure folder structure is maintained
   - Audio files should be in the `songs/` subdirectory

2. **Free hosting options:**
   - GitHub Pages
   - Netlify
   - Vercel
   - Neocities

3. **Server requirements:**
   - Static file hosting only (no server-side code needed)
   - Ensure MIME types are configured for audio files

## Credits

Website built for "Bemidji! The Rock Opera"

## License

Customize and use as needed for your rock opera project!
