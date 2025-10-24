# Web Developer Portfolio - Bootstrap & Vanilla JavaScript

A modern, responsive portfolio website built with **Bootstrap 5** and **Vanilla JavaScript**. Perfect for showcasing your web development skills, projects, and experience.

## 🎨 Features

✅ **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
✅ **Modern Dark Theme** - Professional dark color scheme (#171717 background, #28EC8D accent)
✅ **Smooth Animations** - Elegant transitions and scroll animations
✅ **Bootstrap 5** - Latest Bootstrap framework for responsive layout
✅ **Vanilla JavaScript** - No frameworks, pure JavaScript for interactivity
✅ **Font Awesome Icons** - Beautiful icons throughout the site
✅ **Contact Form** - Fully functional contact form with validation
✅ **SEO Friendly** - Proper semantic HTML structure
✅ **Accessibility** - WCAG compliant with keyboard navigation support
✅ **Mobile Menu** - Responsive hamburger navigation

## 📁 Project Structure

```
portfolio-bootstrap/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Custom CSS styles
├── js/
│   └── script.js       # Vanilla JavaScript functionality
├── images/             # Image assets folder
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Direct File Opening
1. Download or extract the project files
2. Open `index.html` in your web browser
3. That's it! No build process needed

### Option 2: Using a Local Server
For better performance and to avoid CORS issues:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
http-server
```

Then open `http://localhost:8000` in your browser.

## 🎯 Customization Guide

### 1. Update Personal Information

Edit `index.html` and replace:
- **Your Name** - Change "Your Name" in the hero section
- **Profile Image** - Replace the placeholder image URL
- **Email** - Update `your.email@example.com`
- **Phone** - Update `+1 (234) 567-890`
- **Social Links** - Update GitHub, LinkedIn, Twitter, Instagram URLs

### 2. Modify Skills

In `index.html`, find the Skills section and update the skill items:

```html
<span class="skill-item">Your Skill</span>
```

### 3. Add Your Projects

Edit `js/script.js` and modify the `portfolioProjects` array:

```javascript
const portfolioProjects = [
    {
        title: "Your Project Title",
        description: "Project description here",
        tags: ["Tag1", "Tag2", "Tag3"],
        icon: "🎨"  // Use any emoji
    },
    // Add more projects...
];
```

### 4. Change Colors

Edit `css/style.css` and modify the CSS variables:

```css
:root {
    --primary-bg: #171717;      /* Background color */
    --primary-text: #ffffff;    /* Text color */
    --accent-color: #28EC8D;    /* Accent color */
    --secondary-bg: #222222;    /* Secondary background */
    --border-color: #333333;    /* Border color */
    --text-muted: #b0b0b0;      /* Muted text color */
}
```

### 5. Update About Section

Edit the About section in `index.html` to reflect your experience and approach.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 JavaScript Features

### Smooth Scrolling
- Click navigation links for smooth scroll to sections
- Active nav link highlighting based on scroll position

### Form Validation
- Email validation
- Required field validation
- Message length validation
- Success/error messages

### Animations
- Fade-in animations on scroll
- Hover effects on cards and buttons
- Smooth transitions throughout

### Keyboard Navigation
- Tab navigation support
- Escape key to close mobile menu
- Focus visible styles for accessibility

## 📦 Dependencies

All dependencies are loaded from CDN:

- **Bootstrap 5.3.0** - CSS Framework
- **Font Awesome 6.4.0** - Icon Library
- **Google Fonts (Poppins)** - Typography

No npm or build process required!

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Contact Form Setup

The contact form currently shows a success message after submission. To make it functional:

1. **Using Formspree** (Recommended):
   - Go to https://formspree.io
   - Create a new form
   - Replace the form action in `index.html`

2. **Using EmailJS**:
   - Sign up at https://www.emailjs.com
   - Add EmailJS script to `index.html`
   - Configure in `js/script.js`

3. **Using Your Backend**:
   - Create an API endpoint
   - Update the form submission handler in `js/script.js`

## 🎨 Color Scheme

The portfolio uses a modern dark theme:

| Element | Color | Usage |
|---------|-------|-------|
| Background | #171717 | Main background |
| Text | #FFFFFF | Primary text |
| Accent | #28EC8D | Buttons, highlights |
| Secondary BG | #222222 | Cards, sections |
| Border | #333333 | Dividers, borders |
| Muted Text | #B0B0B0 | Secondary text |

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Mobile-friendly viewport settings

## ♿ Accessibility Features

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible styles
- Color contrast compliance
- Form labels properly associated

## 📄 License

This project is free to use for personal and commercial purposes.

## 💡 Tips & Tricks

1. **Add More Sections**: Copy existing section structure and customize
2. **Custom Fonts**: Replace Google Fonts link with your preferred font
3. **Add Images**: Create an `images/` folder and reference images from there
4. **Dark Mode Toggle**: Add a theme switcher using CSS variables
5. **Blog Section**: Add a blog page with similar structure
6. **Case Studies**: Create detailed project pages

## 🐛 Troubleshooting

**Issue**: Images not loading
- Solution: Use absolute URLs or ensure image paths are correct

**Issue**: Form not working
- Solution: Implement backend integration or use Formspree

**Issue**: Styles not applying
- Solution: Clear browser cache (Ctrl+Shift+Delete)

**Issue**: Mobile menu not closing
- Solution: Check if Bootstrap JS is properly loaded

## 📞 Support

For questions or issues:
1. Check the code comments
2. Review Bootstrap documentation: https://getbootstrap.com
3. Check Font Awesome docs: https://fontawesome.com

## 🚀 Deployment

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Deploy to Netlify
1. Go to https://netlify.com
2. Drag and drop the project folder
3. Your site will be live instantly

### Deploy to Vercel
1. Go to https://vercel.com
2. Import your repository
3. Deploy with one click

## 🎓 Learning Resources

- Bootstrap Docs: https://getbootstrap.com/docs
- JavaScript MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- CSS Tricks: https://css-tricks.com
- Font Awesome: https://fontawesome.com/docs

---

**Created with ❤️ using Bootstrap & Vanilla JavaScript**

Happy coding! 🚀

