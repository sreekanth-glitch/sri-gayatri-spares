# Sri Gayatri Cycle & Bike Automobiles — Full-stack Next.js project

A responsive Next.js 14 + JSX + Tailwind CSS + Framer Motion storefront with MongoDB/Mongoose product management and WhatsApp order handoff.

## Included
- Home hero using your supplied banner and logo.
- Bike Spares / Cycle Spares category switch.
- Products loaded dynamically from MongoDB.
- Quantity controls, cart total and WhatsApp order confirmation.
- About, Brands and Contact pages.
- Password-protected admin dashboard at `/home/redg74`.
- Admin can add/delete products; image upload limit is 2 MB.

## Requirements
- Node.js 18.17 or newer (Node 20 LTS recommended)
- MongoDB Atlas database (or another MongoDB connection string)
- WhatsApp number with country code, digits only (India example: `91XXXXXXXXXX`)

## Setup on Windows PowerShell

1. Extract the ZIP and open the project folder in VS Code.
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Create `.env.local` from the example:
   ```powershell
   Copy-Item .env.example .env.local
   ```
4. Edit `.env.local` and set:
   - `MONGODB_URI`: MongoDB connection string
   - `ADMIN_PASSWORD`: strong private dashboard password
   - `SESSION_SECRET`: long random secret (32+ characters)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`: shop WhatsApp number, digits only, e.g. `919876543210`
   - `NEXT_PUBLIC_SHOP_PHONE`, `NEXT_PUBLIC_SHOP_ADDRESS`, `NEXT_PUBLIC_ESTABLISHED_YEAR`
5. Start:
   ```powershell
   npm run dev
   ```
6. Open `http://localhost:3000`.
7. Admin dashboard: `http://localhost:3000/home/redg74`.

## MongoDB Atlas quick setup
1. Create a free cluster at https://www.mongodb.com/atlas.
2. Create a database user and password.
3. In Network Access, allow your development IP. For deployment, configure access appropriate to your hosting provider; avoid broad access where possible.
4. Copy the Node.js connection string and replace username, password and database name in `.env.local`.

## Deploy to Vercel
1. Push the project to a private/public GitHub repository.
2. Import it into Vercel.
3. Add every `.env.local` variable in Vercel Project Settings → Environment Variables.
4. Redeploy after adding variables.
5. Use MongoDB Atlas for persistent database storage. Do not rely on local filesystem uploads in serverless deployment.

## Important notes
- The admin route name is not a substitute for authentication. The dashboard uses a password login and an HTTP-only signed cookie. Keep `ADMIN_PASSWORD` and `SESSION_SECRET` private.
- This starter uses a single shared admin password. Add stronger role management, rate limiting and CSRF protections before a high-traffic production launch.
- Images are stored as base64 Data URLs in MongoDB. The 2 MB upload limit is enforced in the browser and API. For many products, use Cloudinary/S3 and store only image URLs in MongoDB.
- Brand logos are editable placeholders, not a claim that the shop stocks every listed brand. Replace them with the actual brands you sell.
- About page's experience counter uses `NEXT_PUBLIC_ESTABLISHED_YEAR`; update it to the shop's real establishment year.
- Orders are sent to WhatsApp for manual confirmation. This does not charge customers or create an online payment.
- Contact form opens WhatsApp; it does not send email.

## Project structure
```text
app/
  about/page.jsx
  api/admin/login/route.js
  api/admin/logout/route.js
  api/products/route.js
  brands/page.jsx
  contact/page.jsx
  home/redg74/page.jsx
  page.jsx
components/
  Footer.jsx
  Navbar.jsx
  ProductShop.jsx
lib/
  auth.js
  db.js
  requireAdmin.js
models/
  Product.js
public/images/
  logo.png
  banner.png
```
