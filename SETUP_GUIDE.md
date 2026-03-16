# AR Consultancy - Complete Setup Guide

Complete guide to setup Backend API, Main Website, and Admin Panel.

## 📁 Project Structure

```
ar-consultancy/
├── backend/          # Node.js + Express + MongoDB API
├── adminpanel/       # Next.js Admin Panel
├── app/             # Main Next.js Website
├── components/      # Website Components
└── lib/             # Shared utilities
```

---

## 🚀 Backend Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Create `.env` file:

```bash
cp .env.example .env
```

Update `.env`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/ar-consultancy
JWT_SECRET=your_secret_key_change_this
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@arconsultancy.ae
FRONTEND_URL=http://localhost:3000
ADMIN_EMAIL=admin@arconsultancy.ae
```

### 3. Start MongoDB

**Option A: Local MongoDB**
```bash
mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Create account at mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string
4. Update MONGODB_URI in .env

### 4. Seed Database

```bash
npm run seed
```

This will populate your database with:
- 6 Features
- 6 Services
- 3 Packages
- 6 Locations
- 3 Testimonials
- 6 FAQs

### 5. Start Backend Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Backend will run on: **http://localhost:5000**

Test API: http://localhost:5000/api/health

---

## 🌐 Main Website Setup

### 1. Install Dependencies

```bash
# From root directory
npm install
```

### 2. Configure Environment

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Start Website

```bash
npm run dev
```

Website will run on: **http://localhost:3000**

---

## 👨‍💼 Admin Panel Setup

### 1. Install Dependencies

```bash
cd adminpanel
npm install
```

### 2. Configure Environment

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Start Admin Panel

```bash
npm run dev
```

Admin Panel will run on: **http://localhost:3001**

### 4. Login Credentials

```
Email: admin@arconsultancy.ae
Password: admin123
```

---

## 📊 API Endpoints

### Features
- `GET /api/features` - Get all features
- `POST /api/features` - Create feature
- `PUT /api/features/:id` - Update feature
- `DELETE /api/features/:id` - Delete feature

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Packages
- `GET /api/packages` - Get all packages
- `POST /api/packages` - Create package
- `PUT /api/packages/:id` - Update package
- `DELETE /api/packages/:id` - Delete package

### Locations
- `GET /api/locations` - Get all locations
- `POST /api/locations` - Create location
- `PUT /api/locations/:id` - Update location
- `DELETE /api/locations/:id` - Delete location

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial
- `PUT /api/testimonials/:id` - Update testimonial
- `DELETE /api/testimonials/:id` - Delete testimonial

### FAQs
- `GET /api/faqs` - Get all FAQs
- `POST /api/faqs` - Create FAQ
- `PUT /api/faqs/:id` - Update FAQ
- `DELETE /api/faqs/:id` - Delete FAQ

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `PUT /api/contact/:id` - Update contact status

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe
- `POST /api/newsletter/unsubscribe` - Unsubscribe
- `GET /api/newsletter` - Get subscribers (admin)

---

## 🔧 Quick Start (All Services)

### Terminal 1: Backend
```bash
cd backend
npm install
npm run seed
npm run dev
```

### Terminal 2: Main Website
```bash
npm install
npm run dev
```

### Terminal 3: Admin Panel
```bash
cd adminpanel
npm install
npm run dev
```

### Access URLs:
- **Main Website**: http://localhost:3000
- **Admin Panel**: http://localhost:3001
- **Backend API**: http://localhost:5000

---

## 📝 Testing

### Test Backend API

```bash
# Health check
curl http://localhost:5000/api/health

# Get features
curl http://localhost:5000/api/features

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+971501234567",
    "businessType": "ecommerce",
    "message": "Test message"
  }'
```

---

## 🎨 Admin Panel Features

1. **Dashboard** - Overview statistics
2. **Features Management** - CRUD operations
3. **Services Management** - CRUD operations
4. **Packages Management** - CRUD operations
5. **Locations Management** - CRUD operations
6. **Testimonials Management** - CRUD operations
7. **FAQs Management** - CRUD operations
8. **Contacts** - View and manage inquiries
9. **Newsletter** - Manage subscribers

---

## 🔐 Security Notes

### Production Checklist:

1. **Change default credentials**
   - Update admin email/password
   - Change JWT_SECRET

2. **Enable HTTPS**
   - Use SSL certificates
   - Update FRONTEND_URL

3. **Secure MongoDB**
   - Enable authentication
   - Use strong passwords
   - Whitelist IP addresses

4. **Email Configuration**
   - Use app-specific passwords
   - Enable 2FA on email account

5. **Environment Variables**
   - Never commit .env files
   - Use secure secret management

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB
mongod
```

### Port Already in Use
```bash
# Kill process on port 5000
npx kill-port 5000

# Kill process on port 3000
npx kill-port 3000
```

### API Not Responding
1. Check backend is running
2. Verify MONGODB_URI in .env
3. Check MongoDB is running
4. Review backend logs

### CORS Errors
- Verify FRONTEND_URL in backend .env
- Check API_URL in website .env.local

---

## 📦 Deployment

### Backend (Heroku)
```bash
heroku create ar-consultancy-api
heroku config:set MONGODB_URI=your_mongodb_uri
git push heroku main
```

### Website & Admin (Vercel)
```bash
vercel
```

---

## 📞 Support

For issues or questions:
- Email: support@arconsultancy.ae
- Documentation: Check README files in each folder

---

## ✅ Verification Checklist

- [ ] MongoDB installed and running
- [ ] Backend dependencies installed
- [ ] Backend .env configured
- [ ] Database seeded successfully
- [ ] Backend server running on port 5000
- [ ] Website dependencies installed
- [ ] Website .env.local configured
- [ ] Website running on port 3000
- [ ] Admin panel dependencies installed
- [ ] Admin panel .env.local configured
- [ ] Admin panel running on port 3001
- [ ] Can login to admin panel
- [ ] API endpoints responding
- [ ] Contact form working
- [ ] Data displaying on website

---

## 🎉 You're All Set!

Your complete AR Consultancy system is now running:

1. **Main Website** (http://localhost:3000) - Customer-facing website
2. **Admin Panel** (http://localhost:3001) - Content management
3. **Backend API** (http://localhost:5000) - Data and business logic

Start managing your content through the admin panel and watch it reflect on the main website in real-time!
