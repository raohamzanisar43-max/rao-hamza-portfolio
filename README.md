# Mohammad Hamza Nisar - Professional Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS showcasing my skills, projects, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Dark Theme**: Eye-friendly dark color scheme with purple accents
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Semantic HTML5 structure

## 🛠️ Technologies Used

- **Frontend**: React 19.2.4
- **Styling**: Tailwind CSS 4.2.1
- **Icons**: Heroicons
- **Build Tool**: Create React App
- **Deployment**: Ready for static hosting

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.js           # Landing section
│   ├── Navigation.js     # Navigation bar
│   ├── Background.js     # Education & certifications
│   ├── Projects.js       # Project showcase
│   ├── Skills.js         # Technical skills
│   ├── Experience.js     # Work experience
│   ├── Achievements.js   # Achievements & awards
│   ├── Contact.js        # Contact information
│   └── Footer.js         # Footer section
├── App.js                # Main application component
├── index.css             # Global styles
└── index.js              # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Slate 900 (#0f172a)
- **Secondary**: Slate 800 (#1e293b)  
- **Accent**: Slate 700 (#334155)
- **Text**: Slate 200 (#e2e8f0)
- **Muted**: Slate 400 (#94a3b8)
- **Purple**: Purple 600 (#7c3aed)

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: System fonts for optimal readability
- **Responsive**: Scales appropriately across devices

## 🚀 Getting Started

### Prerequisites
- Node.js 14+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raohamzanisar43-max/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Compressed and properly sized
- **Minimal Bundle**: Tree-shaking and code splitting
- **CSS Optimization**: Purged unused styles

## 🔧 Customization

### Modifying Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      dark: {
        primary: '#0f172a',
        secondary: '#1e293b',
        // ... other colors
      }
    }
  }
}
```

### Adding Sections
1. Create new component in `src/components/`
2. Import and add to `App.js`
3. Add navigation item to `Navigation.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Portfolio**: [https://hamza-portfolio.vercel.app](https://hamza-portfolio.vercel.app)
- **LinkedIn**: [in/rao-hamza-870b15337](https://www.linkedin.com/in/rao-hamza-870b15337)
- **GitHub**: [@raohamzanisar43-max](https://github.com/raohamzanisar43-max)
- **Email**: raohamzanisar40@gmail.com

---

Built with ❤️ using React and Tailwind CSS
