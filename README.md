# Srinivas Bhukya - Personal Developer Portfolio

A modern, responsive, and aesthetic personal portfolio website designed for **Srinivas Bhukya**, a **Third-Year Computer Science and Engineering (CSE)** student. 

Built with clean, semantic **HTML5**, modern **CSS3**, and vanilla **JavaScript (ES6+)**, featuring a premium dark developer aesthetic with purple and electric blue gradient accents.

---

## 🌟 Key Highlights

- **Dark Theme Developer Aesthetic**: Styled with a dark palette (`#0a0d16`), glassmorphism cards, ambient purple (`#8b5cf6`) and electric blue (`#3b82f6`) glows.
- **Fully Responsive**: Seamlessly adapts to mobile phones (375px+), tablets, laptops, and ultra-wide desktop monitors.
- **Interactive UI & Animations**:
  - Smooth scrolling navigation.
  - Scrollspy: Navigation links highlight dynamically based on the visible section.
  - Scroll Reveal: Cards and sections fade and slide in smoothly as you scroll into view.
  - Responsive mobile drawer menu with keyboard (ESC) and backdrop support.
  - Floating back-to-top button.
- **Semantic & Accessible**:
  - Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - ARIA attributes (`aria-expanded`, `aria-label`, `aria-hidden`, `aria-live`).
  - High color contrast meeting accessibility standards.
  - Respects `prefers-reduced-motion` settings.
- **Honest & Functional Form**:
  - Client-side validation for name, email format, subject, and message.
  - Clear real-time feedback with inline error states.
  - Generates a direct `mailto:` fallback so users can immediately send an email with their pre-filled message.
  - Includes straightforward instructions for connecting backend services like Formspree or EmailJS.
- **Clean & Maintainable**:
  - Zero heavy external JavaScript dependencies or bulky frameworks.
  - Well-documented with `<!-- EDIT HERE: ... -->` comments in HTML and CSS for easy personalization.

---

## 📂 Project Structure

```text
Srinivasportfolio/
│
├── index.html       # Semantic HTML5 document containing all 8 sections
├── style.css        # Modular CSS3 styling, design system variables, and responsive media queries
├── script.js        # Interactivity, menu controls, scroll effects, and form validation
└── README.md        # Documentation, setup guide, and customization instructions
```

---

## 📋 Included Sections

1. **Home (Hero)**:
   - Greeting: *"Hi, I'm Srinivas Bhukya"*
   - Subtitle: *"Third-Year Computer Science Engineering Student"*
   - Engaging introduction summarizing engineering interests and continuous learning.
   - Dual Call-to-Action buttons: **"Explore My Work"** and **"Contact Me"**.
   - Profile visual placeholder with glowing frame and floating tech chips.
   - Quick social links (GitHub, LinkedIn, Email).

2. **About Me**:
   - Academic narrative highlighting Srinivas as a 3rd-year CSE undergraduate.
   - Core interests in programming, modern web technologies, relational databases, and software engineering.
   - Feature highlight cards covering programming mindset, full-stack curiosity, and continuous learning.

3. **Technical Skills**:
   - Structured into 5 categories:
     - 💻 Programming Languages
     - 🌐 Frontend Development
     - ⚙️ Backend Development
     - 🗄️ Databases
     - 🛠️ Developer Tools
   - Editable skill tags with placeholder badges.

4. **Projects**:
   - Browser mockup preview frames.
   - Project titles, descriptions, and technology stack pills.
   - Source code (GitHub) and Live Demo action buttons.
   - Clean placeholders ready for Srinivas's real projects.

5. **Education**:
   - Interactive academic timeline.
   - Bachelor of Technology / Engineering in Computer Science and Engineering (III Year).
   - Higher secondary / intermediate education entry.
   - Key coursework checklist (Data Structures & Algorithms, DBMS, OOP, OS, Networks, Web Technologies).
   - Editable college name, location, and graduation year placeholders.

6. **Certifications**:
   - Grid cards with issuing organization, certificate title, date, and credential link placeholders.
   - Includes an active learning track card for ongoing courses.
   - No fabricated certifications; strictly authentic placeholders.

7. **Contact**:
   - Direct contact channel cards (Email, LinkedIn, GitHub, Location).
   - Validated contact form with input icons, real-time error messages, and immediate `mailto:` delivery action.

8. **Footer**:
   - Personal branding, quick navigation links, social profile links, dynamic copyright year, and tech stack attribution.

---

## 🚀 How to Run Locally

You can run this project locally without any complex build tools, package managers, or compilers.

### Option 1: Open Directly in Any Web Browser (Easiest)
1. Navigate to the project directory:
   ```text
   C:\Users\krithika\OneDrive\Documents\Srinivasportfolio
   ```
2. Double-click `index.html`, or right-click `index.html` and choose **Open With > Google Chrome** (or Edge, Firefox, Brave, Safari).

---

### Option 2: Using VS Code Live Server (Recommended for Development)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension by *Ritwick Dey* (from the VS Code Extensions marketplace).
3. Right-click `index.html` and select **Open with Live Server**, or click **Go Live** in the bottom status bar.
4. Your browser will automatically open `http://127.0.0.1:5500/index.html` with automatic hot-reloading when you save files.

---

### Option 3: Using Python HTTP Server
If you have Python installed, open PowerShell or Terminal in the project folder and run:
```powershell
python -m http.server 8000
```
Then open your browser and navigate to:
```text
http://localhost:8000
```

---

### Option 4: Using Node.js
If you have Node.js installed:
```powershell
npx serve .
```
or
```powershell
npx http-server .
```

---

## ✏️ How to Customize & Personalize

Every placeholder is marked with clear `<!-- EDIT HERE -->` comments in `index.html`.

### 1. Adding Your Real Profile Photo
In `index.html`, find the `<div class="avatar__frame">` section inside the hero area:
```html
<!-- To use your actual photo, uncomment the <img> below and place your photo in an assets folder: -->
<!-- <img src="assets/srinivas-profile.jpg" alt="Srinivas Bhukya" class="avatar__img"> -->
```
1. Create a folder named `assets`.
2. Add your picture (e.g. `srinivas-profile.jpg`).
3. Uncomment the `<img>` line and hide or remove the `<div class="avatar__placeholder">`.

### 2. Updating College & Graduation Year
Search for `[Your College / Institute / University Name Here]` in `index.html`:
```html
<div class="timeline__institution">
  <i class="fa-solid fa-building-columns"></i>
  <span><strong>[Your College / Institute / University Name Here]</strong> &bull; [City, State]</span>
</div>
```
Replace the bracketed text with your university details and update `[Expected Year: YYYY]` (e.g., `2023 - 2026`).

### 3. Adding Your Real Social Media & Contact Links
- **GitHub**: Already connected to [`https://github.com/24p61a0553`](https://github.com/24p61a0553) and [`https://github.com/24p61a0553/Srinivasportfolio`](https://github.com/24p61a0553/Srinivasportfolio).
- **LinkedIn**: Search for `your-username` in `index.html` and replace `https://linkedin.com/in/your-username` with your LinkedIn URL.
- **Email**: Replace `srinivas.bhukya.placeholder@example.com` with your real email address.

### 4. Updating Projects
In the **Projects** section of `index.html`:
- Update `<h3>` project titles.
- Update descriptions and `<span class="tech-pill">` technology tags.
- Update `href` attributes on the **GitHub** and **Live Demo** buttons to link directly to your repository and deployed site.

### 5. Connecting a Real Contact Form Backend Service
The contact form currently performs client-side validation and generates a prefilled `mailto:` email link. If you would like submissions to arrive directly in your inbox automatically without needing a server, use one of the free services below:

#### Option A: Formspree (Quickest - Free tier available)
1. Go to [https://formspree.io](https://formspree.io) and create an account.
2. Create a new form and copy your Form Endpoint URL (e.g., `https://formspree.io/f/mqkopwxy`).
3. In `index.html`, update the `<form>` tag:
   ```html
   <form class="contact__form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Submissions will be forwarded straight to your email.

#### Option B: EmailJS
1. Register at [https://www.emailjs.com](https://www.emailjs.com).
2. Follow their 2-minute SDK setup to trigger `emailjs.sendForm(...)` inside `script.js`.

---

## 🌐 Browser Compatibility

Tested and optimized for:
- Google Chrome (latest)
- Microsoft Edge (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Mobile browsers (Chrome for Android, iOS Safari)

---

## 📄 License
This portfolio template is free to use, customize, and deploy for personal and educational portfolios.
