# GitHub Pages Custom Domain Setup Guide

This guide provides detailed steps to register a custom domain and configure it with GitHub Pages for your Vue.js fantasy landing page.

## Table of Contents

1. [Domain Registration](#domain-registration)
2. [DNS Configuration](#dns-configuration)
3. [GitHub Pages Setup](#github-pages-setup)
4. [SSL Certificate Setup](#ssl-certificate-setup)
5. [Troubleshooting](#troubleshooting)

---

## Domain Registration

### Step 1: Choose a Domain Registrar

Popular and reliable domain registrars:

- **Namecheap** - Budget-friendly with good customer support
- **GoDaddy** - Well-known with extensive features
- **Cloudflare** - Great for developers, includes free DNS management
- **Google Domains** (now Squarespace) - Simple interface, good integration
- **Domain.com** - Competitive pricing with privacy protection

### Step 2: Register Your Domain

1. Visit your chosen registrar's website
2. Search for your desired domain name
3. Select an available domain (`.com`, `.dev`, `.io`, `.net` are popular choices)
4. Add to cart and proceed to checkout
5. Fill in registration details
6. **Important**: Enable domain privacy protection to hide personal information
7. Complete payment

**Recommended Domain Examples:**

- `fantasticcoir.com`
- `fantastic-event.dev`
- `fantasy-landing.io`

---

## DNS Configuration

### Option A: Using Cloudflare (Recommended)

#### Why Cloudflare?

- Free DNS management
- Built-in CDN for faster loading
- DDoS protection
- SSL/TLS encryption
- Analytics and performance insights

#### Setup Steps:

1. **Create Cloudflare Account**
   - Visit [cloudflare.com](https://cloudflare.com)
   - Sign up for a free account

2. **Add Your Domain to Cloudflare**
   - Click "Add a Site"
   - Enter your domain name
   - Select the Free plan
   - Cloudflare will scan existing DNS records

3. **Update Nameservers**
   - Cloudflare will provide 2 nameservers (e.g., `eva.ns.cloudflare.com`)
   - Go to your domain registrar's control panel
   - Find "Nameservers" or "DNS Management"
   - Replace existing nameservers with Cloudflare's nameservers
   - Save changes (propagation takes 24-48 hours)

4. **Configure DNS Records in Cloudflare**
   ```
   Type    Name    Content                      TTL     Proxy Status
   CNAME   @       pedrofabrino.github.io       Auto    Proxied (orange cloud)
   CNAME   www     pedrofabrino.github.io       Auto    Proxied (orange cloud)
   ```

### Option B: Using Your Registrar's DNS

If you prefer to use your domain registrar's DNS management:

#### For Root Domain (example.com):

```
Type    Host    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
```

#### For WWW Subdomain:

```
Type    Host    Value
CNAME   www     pedrofabrino.github.io
```

#### Alternative CNAME Setup (if your registrar supports CNAME for root):

```
Type    Host    Value
CNAME   @       pedrofabrino.github.io
CNAME   www     pedrofabrino.github.io
```

---

## GitHub Pages Setup

### Step 1: Access Repository Settings

1. Go to your GitHub repository: `https://github.com/PedroFabrino/fantasticcoir`
2. Click on the **Settings** tab
3. Scroll down to **Pages** section in the left sidebar

### Step 2: Configure Custom Domain

1. In the **Custom domain** field, enter your domain:

   ```
   yourdomain.com
   ```

   (Replace `yourdomain.com` with your actual domain)

2. Click **Save**

3. GitHub will create a `CNAME` file in your repository root

### Step 3: Enable HTTPS

1. Wait for DNS propagation (24-48 hours)
2. Once DNS is working, check **Enforce HTTPS**
3. GitHub will automatically provision an SSL certificate

### Step 4: Update Vite Configuration

Update your `vite.config.ts` to use the custom domain:

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/', // Change from '/fantasticcoir/' to '/' for custom domain
})
```

### Step 5: Update Package.json Deploy Script

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist -f"
  }
}
```

---

## SSL Certificate Setup

### Automatic SSL (Recommended)

GitHub Pages provides free SSL certificates automatically when:

1. Custom domain is properly configured
2. DNS records are correctly pointing to GitHub Pages
3. DNS propagation is complete (24-48 hours)

### Manual SSL Verification

1. Visit your domain: `https://yourdomain.com`
2. Check for the lock icon in the browser address bar
3. Certificate should show "Issued by: Let's Encrypt Authority X3"

---

## Troubleshooting

### Common Issues and Solutions

#### 1. "Domain does not resolve to the GitHub Pages server"

**Cause:** DNS records not properly configured
**Solution:**

- Verify DNS records are correct
- Wait for DNS propagation (24-48 hours)
- Use `nslookup yourdomain.com` to check DNS resolution

#### 2. "Certificate provisioning failed"

**Cause:** DNS not fully propagated or incorrect configuration
**Solution:**

- Wait longer for DNS propagation
- Temporarily disable "Enforce HTTPS"
- Re-save the custom domain in GitHub Pages settings

#### 3. 404 Page Not Found

**Cause:** Base URL configuration issue
**Solution:**

- Ensure `vite.config.ts` has `base: '/'` for custom domain
- Redeploy the site after configuration change

#### 4. Mixed Content Errors

**Cause:** HTTP resources loaded on HTTPS site
**Solution:**

- Ensure all assets use HTTPS or relative URLs
- Check browser console for specific errors

### DNS Propagation Check Tools

- [WhatsMyDNS.net](https://whatsmydns.net)
- [DNS Checker](https://dnschecker.org)
- Command line: `nslookup yourdomain.com`

### Testing Commands

```bash
# Check DNS resolution
nslookup yourdomain.com

# Check with dig (Linux/Mac)
dig yourdomain.com

# Test HTTPS certificate
curl -I https://yourdomain.com
```

---

## Final Verification Checklist

- [ ] Domain registered and nameservers updated
- [ ] DNS records configured correctly
- [ ] Custom domain added in GitHub Pages settings
- [ ] CNAME file exists in repository
- [ ] vite.config.ts updated with `base: '/'`
- [ ] Site deploys successfully
- [ ] HTTPS enforced and working
- [ ] All pages and assets load correctly
- [ ] Mobile and desktop responsive design working

---

## Expected Timeline

- **Domain Registration**: Immediate
- **Nameserver Propagation**: 24-48 hours
- **GitHub Pages Recognition**: 10 minutes after DNS propagation
- **SSL Certificate Provisioning**: 30 minutes to 24 hours after domain verification

---

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Cloudflare DNS Setup Guide](https://developers.cloudflare.com/dns/)
- [Vue.js Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

---

_Last Updated: November 2, 2025_
_Repository: fantasticcoir_
