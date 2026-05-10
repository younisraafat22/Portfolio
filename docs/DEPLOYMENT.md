# Deployment Guide - Younis Ahmed Portfolio

Complete step-by-step guide to deploy your portfolio to GitHub Pages with custom domain.

## 📋 Prerequisites

- [ ] GitHub account created
- [ ] Git installed on your computer
- [ ] Domain purchased (younisahmed.com)

---

## 🚀 Step 1: Prepare Your Files

Your portfolio is ready! Files included:
- ✅ `index.html` - Clean, no commented code
- ✅ `styles.css` - Optimized styles
- ✅ `script.js` - No console.logs
- ✅ `.gitignore` - Ignores unnecessary files
- ✅ `README.md` - Documentation
- ✅ `LICENSE` - MIT License
- ✅ `CNAME` - Custom domain file
- ✅ All images and assets

---

## 🐙 Step 2: Create GitHub Repository

### Option A: Using GitHub Desktop (Easiest)

1. Download [GitHub Desktop](https://desktop.github.com)
2. Open GitHub Desktop
3. Click "File" → "Add Local Repository"
4. Select your portfolio folder
5. Click "Publish repository"
6. Name it: `portfolio` or `younisahmed.com`
7. Uncheck "Keep this code private"
8. Click "Publish repository"

### Option B: Using Command Line

```bash
# Navigate to your portfolio folder
cd "d:\FAU_Courses\Front_End_Development\Courses\UI UX Figma\My Portofolio"

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Younis Ahmed Portfolio"

# Create repo on GitHub.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 3: Enable GitHub Pages

1. Go to your repository on GitHub.com
2. Click **"Settings"** tab
3. Click **"Pages"** in left sidebar
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes
7. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## 🏷️ Step 4: Connect Custom Domain (younisahmed.com)

### Part A: Configure GitHub

1. Still in GitHub Pages settings
2. Under "Custom domain"
3. Enter: `younisahmed.com`
4. Click **"Save"**
5. Check **"Enforce HTTPS"** (may take a few minutes to become available)

The CNAME file is already in your repo!

### Part B: Configure DNS at Domain Registrar

Go to where you bought the domain (Namecheap, Google Domains, etc.)

#### Add These DNS Records:

**For Apex Domain (@):**
```
Type: A
Name: @
Value: 185.199.108.153
TTL: Automatic

Type: A
Name: @
Value: 185.199.109.153
TTL: Automatic

Type: A
Name: @
Value: 185.199.110.153
TTL: Automatic

Type: A
Name: @
Value: 185.199.111.153
TTL: Automatic
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: Automatic
```

#### Example Screenshots for Popular Registrars:

**Namecheap:**
1. Dashboard → Domain List → Manage
2. Advanced DNS tab
3. Add records as shown above

**Google Domains:**
1. My domains → Manage
2. DNS tab → Custom records
3. Add records as shown above

**GoDaddy:**
1. My Products → DNS → Manage
2. Add records as shown above

---

## ⏰ Step 5: Wait for DNS Propagation

- DNS changes take **1-48 hours** to propagate worldwide
- Usually works within 1-4 hours
- Check status: [whatsmydns.net](https://www.whatsmydns.net)

Test your domain:
- `http://younisahmed.com` 
- `https://younisahmed.com`
- `https://www.younisahmed.com`

All should redirect to your portfolio!

---

## ✅ Step 6: Verify Everything Works

Test checklist:
- [ ] Site loads at younisahmed.com
- [ ] HTTPS is enabled (green padlock)
- [ ] www.younisahmed.com redirects properly
- [ ] Custom cursor works
- [ ] Dark mode toggle works
- [ ] Mobile menu works
- [ ] All links work
- [ ] Images load
- [ ] Contact form displays

---

## 🔄 Step 7: Future Updates

When you want to update your portfolio:

### Using GitHub Desktop:
1. Make changes to your files
2. Open GitHub Desktop
3. Add commit message
4. Click "Commit to main"
5. Click "Push origin"
6. Changes go live in 1-2 minutes!

### Using Command Line:
```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio content"
git push
```

---

## 🎨 Alternative Hosting (Optional)

If you prefer other platforms:

### Netlify (Easiest, Recommended)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag & drop your folder
3. Add custom domain in settings
4. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import from GitHub
3. Add domain in settings
4. Follow DNS instructions

---

## 🆘 Troubleshooting

### Site not loading?
- Wait 24 hours for DNS
- Clear browser cache (Ctrl + Shift + Del)
- Try incognito/private mode
- Check [GitHub Status](https://www.githubstatus.com/)

### HTTPS not working?
- Wait a few hours after DNS propagates
- Uncheck and recheck "Enforce HTTPS" in GitHub settings

### Images not loading?
- Check file paths are correct
- Ensure images are committed to repo
- Check browser console for errors

### Custom domain not working?
- Verify CNAME file exists in repo
- Check DNS records are correct
- Use [DNS Checker](https://dnschecker.org)

---

## 📞 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/pages
- **DNS Help**: Contact your domain registrar support
- **Stack Overflow**: Search "GitHub Pages custom domain"

---

## 🎉 You're Done!

Your portfolio is now live at **younisahmed.com**!

Next steps:
- [ ] Share your portfolio on LinkedIn
- [ ] Add to email signature
- [ ] Print business cards
- [ ] Update resume with website
- [ ] Set up Google Analytics (optional)
- [ ] Submit to design directories (Dribbble, Behance, etc.)

---

**Built with ❤️ by Younis Ahmed**
