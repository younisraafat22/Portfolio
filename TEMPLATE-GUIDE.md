# Project Template Customization Guide

This guide will help you customize the 4 project page templates for your portfolio case studies.

## 📁 Available Templates

1. **project-template-flexible.html** - Base template with ALL sections as placeholders
2. **project-template-full.html** - Complete case study (Problem → Process → Solution → Results)
3. **project-template-process.html** - Process-focused (Heavy on research, iterations, testing)
4. **project-template-visual.html** - Visual showcase (More screens, less text)

---

## 🚀 Quick Start (3 Steps)

### 1. Duplicate & Rename
```bash
# Copy the template that fits your project best
# Example: Creating a new project called "FitTrack"
cp project-template-full.html project-fittrack.html
```

### 2. Change Project Color
Open your new file and find this in the `<head>` section:
```css
:root {
    --project-color: #6366F1; /* Change this to your project color */
}
```
**Example colors:**
- Blue: `#3B82F6`
- Purple: `#8B5CF6`
- Pink: `#EC4899`
- Green: `#10B981`
- Orange: `#F59E0B`

### 3. Replace All Placeholders
Search for `[` and replace all bracketed placeholders with your content:
- `[PROJECT NAME]` → Your project name
- `[Your Role]` → UI/UX Designer, Product Designer, etc.
- `[Duration]` → 3 weeks, 2 months, etc.

---

## 📝 Customization Checklist

### Essential Edits (Must Do)
- [ ] Update `<title>` tag
- [ ] Update `<meta name="description">` tag  
- [ ] Change `--project-color` variable
- [ ] Replace hero cover image placeholder
- [ ] Fill in project meta (Role, Timeline, Team, Platform)
- [ ] Write project overview/context
- [ ] Replace all `[PLACEHOLDER TEXT]` with your content
- [ ] Add your actual design images (replace gray placeholders)

### Optional Edits (Customize as Needed)
- [ ] Remove sections you don't need (entire `<section>` blocks)
- [ ] Reorder sections to fit your story
- [ ] Add more image placeholders if needed
- [ ] Adjust grid layouts (change `image-grid-2` to `image-grid-3`, etc.)

---

## 🎨 Working with Images

### Placeholder Sizes
All gray placeholders show recommended dimensions:

- **placeholder-small**: 120x120px (circular avatars)
- **placeholder-medium**: 600x800px (portrait screens)
- **placeholder-large**: 1200x800px (wide visuals)
- **placeholder-xlarge**: 1000x800px (hero shots)

### Replacing Placeholders
**Option 1: Direct Image**
```html
<!-- Replace this: -->
<div class="placeholder-large">
    <span>Hero Cover Image</span>
</div>

<!-- With this: -->
<img src="assets/images/fittrack-hero.png" alt="FitTrack app hero">
```

**Option 2: Background Image**
```html
<div class="placeholder-large" style="background: url('assets/images/fittrack-hero.png') center/cover;">
    <!-- Remove spans -->
</div>
```

### Image Tips
- Save images in `assets/images/` folder
- Use descriptive names: `projectname-screenname.png`
- Optimize for web (use TinyPNG or similar)
- Export at 2x for retina displays
- Recommended formats: PNG (with transparency), JPG (photos)

---

## 🧩 Section Reference

### Common Sections (All Templates Have These)

**Hero Section**
- Project title, subtitle, tags
- Meta info (Role, Timeline, Team)
- Hero cover image
- **Color:** Uses gradient with `--project-color`

**Overview/Context**
- Brief project description
- Problem statement
- Who it's for

**Final Designs**
- Key screens showcase
- Feature highlights with descriptions

**Style Guide**
- Color palette
- Typography
- Components (optional)

**Footer CTA**
- Back to home button
- Closing message

---

### Template-Specific Sections

#### project-template-flexible.html
Contains ALL possible sections as examples:
- Product Overview
- The Challenge
- Project Goals
- Target Audience
- User Persona
- Empathy Map
- Pain Points
- User Journey
- Design Process
- User Flow/IA
- Sketches
- Lo-Fi Wireframes
- Hi-Fi Screens
- Feature Deep Dives
- Style Guide
- Key Takeaways

**Best for:** Pick and choose sections you need

#### project-template-full.html
**Storytelling flow:** Context → Problem → Research → Solution → Impact

Key sections:
- The Story Behind [Project]
- The Challenge We Faced
- Getting to Know Our Users
- Meet [Persona]
- Our Design Goals
- How We Got There (Process)
- User Journey
- Wireframes
- The Solution
- Feature Deep Dives (2 sections)
- Complete Experience
- Design System
- The Impact (Metrics)
- Reflections & Learnings

**Best for:** Complete case studies with clear problem-solution narrative

#### project-template-process.html
**Focus:** Research methods, iterations, testing, decisions

Key sections:
- Deep Dive into Research (Methods grid)
- What We Discovered (Insights)
- Building Empathy (Empathy map)
- Our Primary Persona
- Mapping the Current Experience (Journey)
- Exploring Solutions (Sketches)
- Structuring Information (IA)
- Lo-Fi Prototyping & Testing
- Key Design Decisions
- Hi-Fidelity Testing (Before/After)
- Final Solution
- Process Reflections

**Best for:** Google UX Certificate projects, when you want to show your process thinking

#### project-template-visual.html
**Focus:** Let the designs speak, minimal text

Key sections:
- About This Project (brief)
- Multiple full-width showcases
- Feature highlights (quick descriptions)
- Large screen galleries
- Responsive designs
- Visual System
- Design Highlights (3 cards)

**Best for:** Strong visual projects, redesigns, branding work, when you have lots of beautiful screens

---

## 🎯 Removing Sections

To remove a section you don't need:

1. Find the entire `<section>` block
2. Delete from `<section class="content-section">` to `</section>`

**Example:**
```html
<!-- DELETE THIS ENTIRE BLOCK if you don't need Empathy Map -->
<section class="content-section bg-surface">
    <div class="container">
        <h2>Empathy Mapping</h2>
        <!-- ... content ... -->
    </div>
</section>
<!-- DELETE UP TO HERE -->
```

---

## 🔄 Adding More Images

### Add to existing grid:
```html
<div class="image-grid-2">
    <!-- Existing images -->
    <div class="placeholder-medium">
        <span>Screen 1</span>
    </div>
    <div class="placeholder-medium">
        <span>Screen 2</span>
    </div>
    
    <!-- ADD MORE LIKE THIS -->
    <div class="placeholder-medium">
        <span>Screen 3</span>
    </div>
</div>
```

### Change grid columns:
- `image-grid-2` → 2 columns (600px each)
- `image-grid-3` → 3 columns (400px each)

---

## 💡 Writing Tips

### Hero Subtitle
- Keep it ONE sentence
- Focus on impact or outcome
- Examples:
  - "Helping 50K+ users track their fitness goals with joy"
  - "Redesigning healthcare access for rural communities"
  - "A seamless booking experience for busy professionals"

### Section Intros
- Start with context or "why"
- Be conversational, not corporate
- Show your thinking process
- Use "we" if team project, "I" if solo

### Feature Descriptions
- Lead with the user benefit
- Explain your design decision
- Keep it concise (2-3 sentences)

---

## 🎨 Advanced Customization

### Change Layout Direction
```html
<!-- Default: text left, image right -->
<div class="two-column-layout">
    <div class="column-text">...</div>
    <div class="column-image">...</div>
</div>

<!-- Reverse: image left, text right -->
<div class="two-column-layout reverse">
    <div class="column-image">...</div>
    <div class="column-text">...</div>
</div>
```

### Adjust Container Width
```html
<div class="container">         <!-- Default: 1200px -->
<div class="container-narrow">  <!-- Narrow: 800px (for text-heavy) -->
```

### Add Background Color
```html
<!-- Default: transparent -->
<section class="content-section">

<!-- With background -->
<section class="content-section bg-surface">
```

---

## ✅ Before Publishing Checklist

- [ ] All `[PLACEHOLDER]` text replaced
- [ ] All gray image placeholders replaced with real images
- [ ] Project color matches your design
- [ ] Links to home page work
- [ ] Tested on mobile (responsive)
- [ ] Checked in both light and dark mode
- [ ] Proofread all text for typos
- [ ] Images optimized for web (not too large)
- [ ] Meta tags updated (title, description)

---

## 🆘 Common Issues

**Problem:** "My color isn't showing"
**Solution:** Make sure you updated the CSS variable in the `<style>` tag in the `<head>`

**Problem:** "Images look blurry"
**Solution:** Export images at 2x the size (e.g., 1200px → export at 2400px)

**Problem:** "Layout breaks on mobile"
**Solution:** Make sure you're using the provided grid classes (`image-grid-2`, etc.)

**Problem:** "Too much text in a section"
**Solution:** Break into two sections or add a two-column layout

**Problem:** "Don't need all these sections"
**Solution:** Delete entire `<section>` blocks you don't need

---

## 📚 Resources

- **Color Palettes:** coolors.co, colorhunt.co
- **Image Optimization:** tinypng.com, squoosh.app
- **Mockups:** mockups-design.com, ls.graphics
- **Icons:** heroicons.com, feathericons.com
- **Inspiration:** behance.net, dribbble.com

---

## 🎯 Template Selection Guide

**Choose project-template-flexible.html when:**
- You want maximum flexibility
- Your project doesn't fit standard patterns
- You want to mix and match many section types

**Choose project-template-full.html when:**
- You have a complete case study with clear problem/solution
- You want to show end-to-end process
- You have user research, testing, and results
- Google UX Certificate projects

**Choose project-template-process.html when:**
- You want to emphasize your methodology
- You have lots of research data and iterations
- You want to show critical thinking and decision-making
- Academic or learning projects

**Choose project-template-visual.html when:**
- You have stunning visuals to showcase
- The design speaks for itself
- You want a quick, impactful presentation
- Redesign or branding projects
- Dribbble/Behance style presentation

---

**Need help?** All templates use the same CSS file (`project-templates.css`), so styling is consistent. Just focus on your content and images!
