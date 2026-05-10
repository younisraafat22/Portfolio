# Younis Ahmed - UI/UX Designer Portfolio

A clean, modern portfolio website showcasing UI/UX design work, branding, and case studies.

**Live Site**: [https://younisahmed.netlify.app/](https://younisahmed.netlify.app)

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile
- **Dark Mode** - Seamless light/dark theme toggle
- **Custom Cursor** - Interactive custom cursor with hover states
- **Smooth Animations** - Polished micro-interactions and transitions
- **Case Studies** - Dedicated pages for project deep-dives
- **Contact Form** - Integrated contact form
- **Fast & Lightweight** - Pure HTML, CSS, and JavaScript

## 🛠️ Tech Stack

- HTML5 - Semantic markup
- CSS3 - Custom properties, Flexbox, Grid, animations
- JavaScript - Vanilla JS for interactions
- Google Fonts - Inter & Syne typography

## 📁 Project Structure

```
portfolio/
├── index.html
├── project-bolt.html
├── project-chemistryhub.html
├── project-qawafel.html
├── project-radiview.html
├── project-template-process.html
├── project-zazoulaw.html
├── Younis_Ahmed_CV.html
├── Younis_Ahmed_CV_ATS_Optimized.txt
├── Younis-Ahmed-UIUX-Graphic-Design-CV.pdf
├── CV.docx
├── CNAME
├── DEPLOYMENT.md
├── PROJECT-CUSTOMIZATION-GUIDE.md
├── README.md
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   ├── project-styles.css
│   │   └── project-templates.css
│   ├── images/
│   ├── js/
│   │   └── script.js
│   └── Branding/
├── Bolt/
├── Chemistry Hub/
├── Icarus/
├── Qwafel/
├── Various Projects/
└── ZazouaLaw/
```

The root keeps the live homepage and case studies together for simple static hosting. Supporting design assets stay under `assets/`, while project-specific source files and exports are grouped in their own folders.

## 🚀 Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open in browser:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Or simply open index.html in your browser
```

3. Visit `http://localhost:8000`

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Create GitHub Repository**
   - Go to github.com and create new repository
   - Name it `portfolio` or `younisahmed.com`

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: main branch, / (root)
   - Save

4. **Your site is live at**: `https://YOUR_USERNAME.github.io/portfolio/`

### Custom Domain Setup

1. **Purchase Domain** (younisahmed.com)
   - Namecheap, Google Domains, or Porkbun

2. **Add to GitHub Pages**
   - Settings → Pages → Custom domain
   - Enter: `younisahmed.com`
   - Save (CNAME file already included)

3. **Configure DNS at Registrar**
   ```
   Type: A Record
   Name: @
   Values:
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153

   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

4. **Wait 1-24 hours** for DNS propagation

### Alternative Hosting

**Netlify** (Easiest):
1. Drag & drop folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Get instant URL
3. Add custom domain in settings

**Vercel**:
1. Import from GitHub at [vercel.com](https://vercel.com)
2. Deploy automatically
3. Add custom domain

## 🎨 Customization

### Update Personal Info

**In `index.html`:**
- Hero title and description
- Stats (years, projects, clients)
- Case study content
- Social media links
- Contact info

**In `assets/css/styles.css`:**
- Colors (`:root` variables)
- Fonts
- Spacing
- Animations

### Add New Projects

1. Duplicate a matching case-study page, such as `project-template-process.html`
2. Rename it to `project-yourname.html`
3. Update content, images, and project links
4. Add the new card in the Work section of `index.html`
5. See `PROJECT-CUSTOMIZATION-GUIDE.md` for details

### Connect Contact Form

Update `assets/js/script.js` form submission:

```javascript
// Options:
// 1. Formspree: https://formspree.io
// 2. Netlify Forms (if using Netlify)
// 3. EmailJS: https://www.emailjs.com
// 4. Web3Forms: https://web3forms.com
```

## 📊 SEO Optimization

Update meta tags in `<head>`:

```html
<meta name="description" content="Your description">
<meta property="og:title" content="Your Name - UI/UX Designer">
<meta property="og:description" content="Your description">
<meta property="og:image" content="preview-image.jpg">
<meta name="twitter:card" content="summary_large_image">
```

## 🔄 Making Updates

After making changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Changes go live in 1-2 minutes!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🆘 Troubleshooting

**Site not loading?**
- Wait 24 hours for DNS propagation
- Clear browser cache (Ctrl + Shift + Del)
- Check GitHub Pages is enabled

**Images not showing?**
- Verify file paths start with `assets/images/`
- Check images are committed to repo

**Custom domain issues?**
- Verify DNS records are correct
- Check CNAME file exists in root
- Use [dnschecker.org](https://dnschecker.org)

## 📞 Contact

- **Email**: your@email.com
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **Behance**: [behance.net/yourprofile](https://behance.net/yourprofile)

## 📖 Additional Resources

- **Deployment Guide**: See `DEPLOYMENT.md` for detailed setup
- **Customization Guide**: See `PROJECT-CUSTOMIZATION-GUIDE.md`

---

Built with ❤️ by Younis Ahmed © 2025
- **Project Tags**: Visual categorization with animated underlines

### Individual Project Pages
- **Full Case Studies**: Detailed project pages with hero images, process, results
- **Easy Customization**: Template-based system (see PROJECT-CUSTOMIZATION-GUIDE.md)
- **Consistent Navigation**: Back to home button in nav
- **Next Project Links**: Seamless navigation between projects
- **Rich Content Sections**: Overview, Challenge, Solution, Process, Results, Learnings

### About Section
- **Slide-in Animations**: Portrait slides from left, text from right
- **Professional Layout**: Portrait + bio in clean grid
- **Animated Skills List**: Each skill fades in sequentially
- **Authentic Voice**: Personal but professional tone

### Contact Section
- **Working Contact Form**: Functional form with validation
- **Form Animations**: Pulse effect on focus, shimmer button effect
- **Success/Error States**: Visual feedback for form submission
- **Loading State**: Animated loading indicator on submit
- **Social Links**: Behance, Dribbble, LinkedIn with creative hover animations
  - Circular fill effect
  - Icon rotation and scale on hover

### Creative Animations Throughout
- **Page Load**: Staggered fade-in animations
- **Scroll Triggers**: Elements animate as they enter viewport
- **Hover States**: 
  - Button shimmer effect
  - Social link circular fill
  - Tag underline animations
  - Card 3D tilt
- **Floating Elements**: Mockups have gentle floating animation
- **Form Interactions**: Pulse effects and loading states

### Footer
- **Brand Consistency**: Signature logo repeated
- **Minimal Design**: Copyright and essential info only

## 🎯 Design Specifications

### Typography
- **Font Family**: Inter (geometric sans-serif)
- **Weights**: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Hierarchy**: Clear distinction between headings, body, and supporting text

### Color Palette
```css
Background:     #FAFAFA (soft off-white)
Surface:        #FFFFFF (pure white)
Primary Text:   #111827 (near black)
Secondary Text: #6B7280 (medium gray)
Tertiary Text:  #9CA3AF (light gray)
Accent:         #2563EB (blue)
Accent Hover:   #1D4ED8 (darker blue)
Border:         #E5E7EB (light border)
Border Light:   #F3F4F6 (subtle border)
Button:         #111827 (black for CTA buttons)
```

### Spacing System
- Uses consistent spacing scale from 0.5rem to 6rem
- Maintains visual rhythm throughout the design

### Animation Timings
- Fast: 0.15s (micro-interactions)
- Base: 0.3s (standard transitions)
- Slow: 0.5-0.8s (page load animations)
- Floating: 3s infinite loop

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (single column, optimized touch targets)

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in any modern web browser
2. No build process required!

### View a Project Page
Click any project card or navigate to a case-study page such as `project-bolt.html`

## 📝 Customization Guide

### Update Your Information

1. **Name & Title** in hero section (index.html, line ~31):
```html
<h1 class="hero-title-main">Hi, I'm [Your Name] — Creative Director<br>& Product Designer...</h1>
```

2. **Social Links** in Contact section (index.html, lines ~253-282):
```html
<a href="https://your-behance-url" target="_blank">...</a>
```

3. **Bio & Skills** in About section (index.html, lines ~207-224)

### Create New Project Pages

See `PROJECT-CUSTOMIZATION-GUIDE.md` for detailed instructions on:
- Duplicating the project template
- Customizing content sections
- Adding your images
- Changing colors and gradients
- Linking from homepage

### Customize Contact Form

The contact form currently simulates submission. To connect to a real backend:

1. Open `script.js`
2. Find the `ACTUAL BACKEND IMPLEMENTATION` comment (line ~54)
3. Replace with your backend endpoint:
```javascript
const response = await fetch('YOUR_BACKEND_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

Popular backend options:
- **Formspree**: No code backend for forms
- **Netlify Forms**: If hosted on Netlify
- **EmailJS**: Direct email sending
- **Custom API**: Your own backend service

## 🎨 Animation Features

### Homepage Animations
1. **Hero Section**: Staggered fade-in for title, subtitle, CTA
2. **Case Studies**: Sequential fade-in with delays
3. **Mockups**: Gentle floating animation
4. **About Section**: Slide-in from left and right
5. **Skills List**: Sequential fade-in
6. **Buttons**: Shimmer effect on hover
7. **Social Links**: Circular fill animation
8. **Tags**: Underline animation on card hover

### Interaction Animations
- 3D tilt on case study cards
- Smooth scroll with offset for sticky nav
- Form input pulse on focus
- Loading spinner on form submit
- Icon rotation and scale on hover

## 🔧 Technical Details

### Performance
- Optimized CSS with minimal repaints
- Debounced scroll events
- CSS animations over JavaScript
- Lazy loading ready
- Minimal JavaScript footprint

### Accessibility
- Semantic HTML5
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for all interactive elements
- Sufficient color contrast ratios
- Screen reader friendly

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### SEO Ready
- Meta descriptions
- Semantic structure
- Clean URLs (when deployed)
- Fast load times
- Proper heading hierarchy

## 📱 Responsive Behavior

### Desktop (1200px+)
- 2-column case study grid
- Side-by-side about layout
- Full navigation menu
- All animations enabled

### Tablet (768px - 1199px)
- 2-column case study grid (narrower)
- Adjusted spacing
- Maintained visual hierarchy
- All animations enabled

### Mobile (< 768px)
- Single column layout
- Stacked case studies
- Larger touch targets
- Optimized typography
- Performance-optimized animations

## 🎯 Next Steps

### To Make This Production-Ready:
1. ✅ Replace "Kyson" with your actual name
2. ✅ Update bio and skills in About section
3. ✅ Add your real social media links
4. ✅ Create project pages using the template
5. ✅ Add real project images to case studies
6. ✅ Connect contact form to backend service
7. ⬜ Add analytics (Google Analytics, Plausible, etc.)
8. ⬜ Set up hosting (Netlify, Vercel, GitHub Pages)
9. ⬜ Connect custom domain
10. ⬜ Add favicon and meta tags for social sharing

### Optional Enhancements:
- Add dark mode toggle
- Include testimonials section
- Add downloadable resume
- Implement case study filtering
- Add blog section
- Create more advanced animations with GSAP

## 📄 Files Overview

- **index.html** - Main homepage structure
- **styles.css** - All homepage styling and animations
- **script.js** - Interactive features (form, scroll, animations)
- **project-styles.css** - Specific styles for project pages
- **project-template-process.html** - Example project case study template
- **PROJECT-CUSTOMIZATION-GUIDE.md** - Detailed guide for project pages

## 🆘 Support

For questions or customization help:
1. Check `PROJECT-CUSTOMIZATION-GUIDE.md` for project page questions
2. Review code comments in HTML/CSS/JS files
3. Modern web design best practices apply throughout

---

**Built with care for designers who value quality, attention to detail, and creative interactions. ✨**

© 2025 Kyson. All rights reserved.


## 🎨 Design Philosophy

This portfolio embodies the principles of modern product design:
- **Minimal & Clean**: Generous white space, soft neutral backgrounds, no visual clutter
- **Content-Focused**: Strong hierarchy emphasizing case studies and work
- **Polished Interactions**: Subtle hover states, smooth transitions, refined micro-interactions
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessible**: Semantic HTML, keyboard navigation, ARIA labels

## 📁 Project Structure

```
My Portofolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── y.png              # Signature logo - Y only
├── younis.png         # Full signature logo
└── README.md          # This file
```

## ✨ Key Features

### Navigation
- **Sticky Header**: Remains visible while scrolling
- **Logo Hover Effect**: 'Y' logo transforms to full 'Younis' signature on hover
- **Active Section Highlighting**: Navigation links highlight based on scroll position
- **Smooth Scrolling**: Polished navigation between sections

### Hero Section
- **Interactive Logo**: Large signature logo with hover transformation
- **Clear Value Proposition**: Product Designer headline with supporting copy
- **Call-to-Action**: Primary button to view work

### Work Section
- **Case Study Grid**: 2-column responsive layout (1-column on mobile)
- **Rich Cards**: Large mockup images, titles, descriptions, tags
- **Hover Effects**: Subtle lift and shadow on hover
- **3D Tilt Effect**: Cards respond to mouse movement
- **Project Tags**: Visual categorization (Product Design, UI/UX, Medtech, etc.)

### About Section
- **Professional Layout**: Portrait + bio in clean grid
- **Skills List**: Core competencies in easy-to-scan format
- **Authentic Voice**: Personal but professional tone

### Contact Section
- **Prominent Email**: Large, clickable email address
- **Social Links**: Behance, Dribbble, LinkedIn with icon buttons
- **Hover Animations**: Engaging micro-interactions

### Footer
- **Brand Consistency**: Signature logo repeated
- **Minimal Design**: Copyright and essential info only

## 🎯 Design Specifications

### Typography
- **Font Family**: Inter (geometric sans-serif)
- **Weights**: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Hierarchy**: Clear distinction between headings, body, and supporting text

### Color Palette
```css
Background:     #FAFAFA (soft off-white)
Surface:        #FFFFFF (pure white)
Primary Text:   #111827 (near black)
Secondary Text: #6B7280 (medium gray)
Tertiary Text:  #9CA3AF (light gray)
Accent:         #2563EB (blue)
Accent Hover:   #1D4ED8 (darker blue)
Border:         #E5E7EB (light border)
Border Light:   #F3F4F6 (subtle border)
```

### Spacing System
- Uses consistent spacing scale from 0.5rem to 6rem
- Maintains visual rhythm throughout the design

### Responsive Breakpoints
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (single column, optimized touch targets)

## 🚀 Getting Started

### Quick Start
1. Open `index.html` in any modern web browser
2. That's it! No build process required.

### Customization Guide

#### Update Your Information
1. **Email**: Replace `younis@example.com` in `index.html` (line ~237)
2. **Social Links**: Update href attributes in Contact section (lines ~239-262)
3. **Bio**: Edit text in About section (lines ~207-212)
4. **Skills**: Modify skills list (lines ~217-224)

#### Add Your Portrait
Replace the placeholder in the About section with your photo:
```html
<div class="about-image">
    <img src="your-portrait.jpg" alt="Younis" class="portrait">
</div>
```

Add this CSS:
```css
.portrait {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--color-border);
}
```

#### Update Case Studies
Each case study follows this structure:
```html
<article class="case-study">
    <div class="case-study-image">
        <!-- Add your project mockup image here -->
    </div>
    <div class="case-study-content">
        <h3>Project Title</h3>
        <p>Description...</p>
        <div class="case-study-tags">
            <span class="tag">Tag 1</span>
        </div>
        <a href="project-url">View case study</a>
    </div>
</article>
```

#### Add Real Project Images
Replace placeholder divs with actual images:
```html
<div class="case-study-image">
    <img src="project-mockup.jpg" alt="Project Name">
</div>
```

## 🎨 Inspired By

This portfolio draws inspiration from:
- **Bestfolios**: Curated collection of top designer portfolios
- **Wall of Portfolios**: Premium portfolio showcase
- **Leading Product Designers**: Clean, minimal, content-focused approaches

## 🔧 Technical Details

### Performance
- Optimized CSS with minimal repaints
- Debounced scroll events
- Lazy loading ready
- Minimal JavaScript footprint

### Accessibility
- Semantic HTML5
- ARIA labels where appropriate
- Keyboard navigation support
- Focus states for all interactive elements
- Sufficient color contrast ratios

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### SEO Ready
- Meta descriptions
- Semantic structure
- Clean URLs (when deployed)
- Fast load times

## 📱 Responsive Behavior

### Desktop (1200px+)
- 2-column case study grid
- Side-by-side about layout
- Full navigation menu

### Tablet (768px - 1199px)
- 2-column case study grid (narrower)
- Adjusted spacing
- Maintained visual hierarchy

### Mobile (< 768px)
- Single column layout
- Stacked case studies
- Larger touch targets
- Optimized typography

## 🎯 Next Steps

### To Make This Production-Ready:
1. **Add Real Content**: Replace placeholder text and images
2. **Link Case Studies**: Create detailed case study pages
3. **Add Analytics**: Integrate Google Analytics or similar
4. **Set Up Hosting**: Deploy to Netlify, Vercel, or GitHub Pages
5. **Custom Domain**: Connect your professional domain
6. **Add Favicon**: Create and link favicon files
7. **SEO Optimization**: Add meta tags, Open Graph tags
8. **Performance Testing**: Run Lighthouse audits

### Optional Enhancements:
- Add dark mode toggle
- Implement contact form with backend
- Add blog section
- Include testimonials
- Add downloadable resume
- Implement case study filtering
- Add animation on scroll library (GSAP, Framer Motion)

## 📄 License

Feel free to use this template for your personal portfolio. Attribution appreciated but not required.

## 🙋 Support

For questions or customization help, refer to:
- HTML/CSS/JS documentation
- Modern web design best practices
- Portfolio design inspiration sites

---

**Built with care for designers who value quality and attention to detail.**
