# How to Customize Project Pages

This guide will help you easily create and customize project case study pages for your portfolio.

## Quick Start

1. **Duplicate the template**: Copy `project-medconnect.html` and rename it (e.g., `project-yourproject.html`)
2. **Update the content**: Follow the customization guide below
3. **Add your images**: Replace placeholder divs with your actual project images
4. **Link from homepage**: Make sure your homepage links to the new project page

## Step-by-Step Customization Guide

### 1. Update Meta Information (Lines 5-6)

```html
<meta name="description" content="YOUR PROJECT - Brief description">
<title>YOUR PROJECT NAME - Kyson Portfolio</title>
```

### 2. Update Project Header Section

**Project Tags** (Line 31):
```html
<div class="project-tags">
    <span class="tag">Your Tag 1</span>
    <span class="tag">Your Tag 2</span>
    <span class="tag">Your Tag 3</span>
</div>
```

**Project Title & Subtitle** (Lines 33-34):
```html
<h1 class="project-title">Your Project Name</h1>
<p class="project-subtitle">Your one-line project description</p>
```

**Project Metadata** (Lines 37-52):
```html
<div class="meta-item">
    <span class="meta-label">Role</span>
    <span class="meta-value">Your Role</span>
</div>
<div class="meta-item">
    <span class="meta-label">Timeline</span>
    <span class="meta-value">Duration (Year)</span>
</div>
<!-- Add more meta items as needed -->
```

### 3. Change Background Gradient

Update the placeholder class (Line 62) to use different gradients:
- `placeholder-1` - Purple gradient
- `placeholder-2` - Pink/Red gradient
- `placeholder-3` - Blue gradient
- `placeholder-4` - Green gradient

```html
<div class="placeholder-image placeholder-3">
```

Or add your custom gradient in `project-styles.css`:
```css
.placeholder-5 {
    background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

### 4. Add Your Project Images

Replace placeholder divs with actual images:

**Option A: Single Image**
```html
<div class="project-image">
    <img src="images/your-project-image.jpg" alt="Description" style="width: 100%; border-radius: 12px;">
    <p class="image-caption">Caption: Describe what this shows</p>
</div>
```

**Option B: Multiple Images Side-by-Side**
```html
<div class="project-image">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
        <img src="images/image1.jpg" alt="Description 1" style="width: 100%; border-radius: 8px;">
        <img src="images/image2.jpg" alt="Description 2" style="width: 100%; border-radius: 8px;">
    </div>
    <p class="image-caption">Caption explaining both images</p>
</div>
```

### 5. Customize Content Sections

#### Overview Section (Lines 73-77)
Replace with your project overview text.

#### Challenge Section (Lines 80-97)
Update or add/remove challenge items:
```html
<div class="challenge-item">
    <h3>Your Challenge Title</h3>
    <p>Description of the challenge</p>
</div>
```

#### Solution Section (Lines 100-111)
Update the feature list:
```html
<ul class="feature-list">
    <li>Your solution point 1</li>
    <li>Your solution point 2</li>
    <!-- Add more as needed -->
</ul>
```

#### Design Process (Lines 123-148)
Customize the 4 process steps:
```html
<div class="process-step">
    <div class="step-number">01</div>
    <h3>Your Phase Name</h3>
    <p>What you did in this phase</p>
</div>
```

#### Results Section (Lines 159-177)
Update metrics with your actual results:
```html
<div class="result-item">
    <div class="result-number">75%</div>
    <div class="result-label">Your metric</div>
</div>
```

### 6. Update Next Project Link (Line 193)

```html
<a href="project-your-next-project.html" class="next-project-link">
    <span class="next-project-title">Your Next Project Name</span>
    <!-- SVG arrow -->
</a>
```

## Adding More Sections

### Add a Quote Section
```html
<section class="content-section">
    <blockquote style="border-left: 4px solid var(--color-accent); padding-left: 1.5rem; font-size: 1.25rem; font-style: italic; color: var(--color-text-secondary);">
        "Your testimonial or important quote here"
    </blockquote>
</section>
```

### Add a Two-Column Layout
```html
<section class="content-section">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <div>
            <h3>Left Column Heading</h3>
            <p class="body-text">Content...</p>
        </div>
        <div>
            <h3>Right Column Heading</h3>
            <p class="body-text">Content...</p>
        </div>
    </div>
</section>
```

### Add Video Embed
```html
<div class="project-image">
    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe src="your-video-embed-url" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allowfullscreen></iframe>
    </div>
    <p class="image-caption">Video demonstration of the prototype</p>
</div>
```

## Creating Additional Project Pages

1. Copy `project-medconnect.html`
2. Rename to `project-yourname.html`
3. Update all content following the guide above
4. Update homepage `index.html` to link to your new page:
   ```html
   <a href="project-yourname.html" class="case-study-link-wrapper">
   ```

## Image Organization Tips

Create an `images` folder structure:
```
My Portofolio/
├── images/
│   ├── project-1/
│   │   ├── hero.jpg
│   │   ├── screen-1.jpg
│   │   └── screen-2.jpg
│   ├── project-2/
│   │   ├── hero.jpg
│   │   └── ...
```

Then reference images:
```html
<img src="images/project-1/hero.jpg" alt="Description">
```

## Best Practices

1. **Keep it scannable**: Use short paragraphs and clear headings
2. **Show, don't tell**: More images, less text
3. **Tell a story**: Problem → Process → Solution → Impact
4. **Real results**: Use actual metrics when possible
5. **Be visual**: Include wireframes, user flows, before/after comparisons
6. **Mobile-first**: Test on mobile devices - most recruiters view on phones

## Need Help?

- All project page styles are in `project-styles.css`
- Main site styles are in `styles.css`
- JavaScript functionality is in `script.js`

Happy customizing! 🎨
