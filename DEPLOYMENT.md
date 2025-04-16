# Deployment Guide for Kashmir Landing Page

This guide provides detailed instructions for deploying the Kashmir Landing Page to various platforms.

## Prerequisites

Before deploying, make sure you have:

1. A GitHub, GitLab, or Bitbucket account where you can push your code
2. An account on the platform you want to deploy to (Vercel, Netlify, or cPanel)
3. Node.js and npm installed on your local machine

## Building the Project

To build the project locally:

```bash
# Navigate to the project directory
cd new-kashmir-landing-page

# Install dependencies
npm install

# Build the project
npm run build
```

The build output will be in the `out` directory, which contains static HTML, CSS, and JavaScript files.

## Deployment Options

### 1. Vercel (Recommended for Next.js)

Vercel is the platform built by the creators of Next.js and offers the best integration.

#### Steps:

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Sign up or log in to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub, GitLab, or Bitbucket account

3. **Import your repository**:
   - Click "Add New" → "Project"
   - Select the repository containing your Next.js project
   - Vercel will automatically detect that it's a Next.js project

4. **Configure the project**:
   - Project Name: Choose a name for your deployment
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: `./` (or the path to your Next.js project if in a subdirectory)
   - Build Command: `npm run build` (should be auto-filled)
   - Output Directory: `out` (should be auto-filled)

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your project

6. **Set up a custom domain** (optional):
   - In your project dashboard, go to "Settings" → "Domains"
   - Add your domain and follow the instructions to configure DNS

### 2. Netlify

Netlify is another excellent platform for deploying static sites and Next.js applications.

#### Steps:

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Sign up or log in to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up or log in with your GitHub, GitLab, or Bitbucket account

3. **Import your repository**:
   - Click "Add new site" → "Import an existing project"
   - Select the Git provider where your repository is hosted
   - Select your repository

4. **Configure the build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`

5. **Deploy**:
   - Click "Deploy site"
   - Netlify will build and deploy your project

6. **Set up a custom domain** (optional):
   - In your site dashboard, go to "Domain settings"
   - Click "Add custom domain" and follow the instructions

### 3. cPanel

If you're using a traditional web hosting service with cPanel, you'll need to manually upload the built files.

#### Steps:

1. **Build your project locally**:
   ```bash
   npm run build
   ```

2. **Log in to cPanel**:
   - Access your hosting provider's cPanel login page
   - Enter your username and password

3. **Access File Manager**:
   - In cPanel, find and click on "File Manager"
   - Navigate to the public directory (usually `public_html` or `www`)
   - If you want to deploy to a subdirectory, create or navigate to that directory

4. **Upload files**:
   - Click "Upload" in the File Manager
   - Select all files from your local `out` directory
   - Wait for the upload to complete

5. **Configure .htaccess** (if needed):
   - If you encounter routing issues, create or edit the `.htaccess` file
   - Add the following rules to handle client-side routing:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## WordPress Integration Options

There are three main options for integrating with WordPress:

### 1. Headless WordPress

Use WordPress as a backend CMS and fetch content via the REST API or GraphQL.

- **Setup**: Install and configure the WP REST API or WPGraphQL plugin on your WordPress site
- **Integration**: Use `fetch` or a library like `axios` in your Next.js app to retrieve content
- **Deployment**: Deploy the Next.js app separately using one of the methods above

### 2. Subdomain/Separate Hosting

Host the Next.js app on a subdomain of your main WordPress site.

- **Setup**: Create a subdomain (e.g., `campaign.yourdomain.com`)
- **Deployment**: Deploy the Next.js app to the subdomain using one of the methods above
- **Integration**: Add links between your WordPress site and the campaign landing page

### 3. Reverse Proxy

Configure your server to serve the Next.js app under a specific path of your main domain.

- **Setup**: Configure Nginx or Apache to proxy requests to a specific path
- **Deployment**: Deploy the Next.js app using one of the methods above
- **Configuration Example** (Nginx):

  ```nginx
  location /campaigns/ {
    proxy_pass http://localhost:3000/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
  ```

## Troubleshooting

### Common Issues:

1. **404 errors on page refresh**: 
   - For Netlify: Add a `_redirects` file in the `public` directory with: `/* /index.html 200`
   - For Vercel: This should work out of the box
   - For cPanel: Configure `.htaccess` as shown above

2. **Images not loading**:
   - Check that image paths are correct
   - Ensure the `next.config.js` has proper image configuration

3. **API calls failing**:
   - Check CORS settings if calling external APIs
   - Verify API endpoints are correct

4. **Styling issues**:
   - Make sure all CSS files are being included in the build
   - Check for browser compatibility issues
