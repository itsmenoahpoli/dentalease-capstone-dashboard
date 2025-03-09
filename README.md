<div style="display: flex; justify-content: center;">
  <img src="./src/assets/images/curakidney-logo.png" height="150" width="auto" />
</div>

<hr />

<h3 style="margin-bottom: 0;">CuraKidney Web Dashboard</h3>
<p style="font-size: 12px; color: #888;">Web-based dashboard for managing data and accomodate different user types and accesses (Nephrologists, Staffs, Patients, and Superadmin)</p>

<div style="margin-top: 30px;">
  <h5>Installation & setup guide</h5>

```bash
git clone git@bitbucket.org:curakidney-dev/curakidney-web-dashboard.git

cd curakidney-web-dashboard

cp env.example .env

npm install

npm run dev
```

<p style="font-size: 12px; color: #222;">Then proceed to open a browser with url of http://127.0.0.1:5173</p>

</div>

<hr />

<h6>Frameworks/Libraries used</h6>
<ul>
  <li>ReactJS</li>
  <li>TypeScript</li>
  <li>TailwindCss</li>
  <li>Ant Design</li>
</ul>

<hr />

<h6>Environment Variables (example)</h6>

```bash
VITE_APP_ENV=DEV
VITE_APP_API_URL=
VITE_APP_SECRET_PASSKEY=q5p56tFrB9A4KI9IlPSYJijL4F3DnAzLlUaYCqUbIH3
```
