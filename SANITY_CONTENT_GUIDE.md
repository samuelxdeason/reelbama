# ReelBama Sanity Content Management Guide

## 📋 Content Schemas Created

Your Sanity Studio now has schemas for all ReelBama content types. Visit `/studio` to start managing content!

---

## 🎣 Content Types

### 1. **Catch of the Week** (`catchOfTheWeek`)
Featured fish catches from the community.

**Fields:**
- Angler Name (required)
- Fish Species (required)
- Weight in lbs (required)
- Location (required)
- Photo (required)
- Date Caught (required)
- Featured checkbox (for homepage)

**Use for:** Weekly featured catches, community submissions

---

### 2. **Fishing Reports** (`fishingReport`)
Detailed reports from local anglers about lake conditions and catches.

**Fields:**
- Lake Name (required)
- Report Date (required)
- Reporter Name (required)
- Weather & Water Conditions (required)
- Water Temperature (required)
- Water Clarity (dropdown: Clear/Stained/Muddy)
- Fishing Report (detailed text)
- Catch Report (what was caught)
- Best Lures (list)

**Use for:** Weekly/daily fishing reports, lake updates

---

### 3. **Tournament Schedule** (`tournament`)
Upcoming fishing tournaments across Alabama.

**Fields:**
- Tournament Name (required)
- Lake (required)
- Boat Ramp (required)
- Tournament Date (required)
- Hours (e.g., "6:00 AM - 2:00 PM")
- Contact Email (required)
- Verified checkbox (phone verified)

**Use for:** Tournament calendar, event scheduling

---

### 4. **Photo of the Week** (`photoOfTheWeek`)
Scenic photography from around Alabama waters.

**Fields:**
- Caption (required)
- Photographer (required)
- Photo (required)
- Week Of (date)
- Currently Featured checkbox

**Use for:** Weekly featured scenic photos

---

### 5. **GoPro Video of the Week** (`videoOfTheWeek`)
Action videos from the community.

**Fields:**
- Video Title (required)
- Creator Name (required)
- YouTube Video URL (required)
- Thumbnail (optional - upload or use YouTube's)
- Week Of (date)
- Currently Featured checkbox

**Use for:** Weekly featured videos

---

### 6. **Fishing Guides** (`guide`)
Professional fishing guide directory.

**Fields:**
- Guide Name (required)
- Region / Lake (required)
- Specialty (required)
- Contact Email (required)
- Phone Number
- Website
- Bio
- Services (checkboxes: Boat Provided, Gear Included, Photo Service)
- Trip Types (list)
- Licensed Professional checkbox
- Verified checkbox

**Use for:** Guide registry, professional directory

---

### 7. **Drop-Shot Column** (`dropShotPost`)
Fishing technique articles and tips from columnists.

**Fields:**
- Title (required)
- Author Name (required)
- Published Date (required)
- Excerpt (preview text)
- Content (rich text with images)
- Featured checkbox

**Use for:** Educational content, fishing techniques, tips

---

### 8. **Road Trip of the Month** (`roadTrip`)
Featured destination articles for fishing trips.

**Fields:**
- Title (required)
- Author (required)
- Published Date (required)
- Hero Image (required)
- Excerpt (preview)
- Content (rich text with images)
- Currently Featured checkbox

**Use for:** Monthly featured destinations

---

## 🚀 Getting Started

### 1. Access Sanity Studio
- Visit: `http://localhost:3000/studio` (development)
- Or: `https://your-domain.com/studio` (production)

### 2. Create Your First Content
1. Click on any content type in the left sidebar
2. Click "Create new" button
3. Fill in the required fields
4. Click "Publish"

### 3. Featured Content
- Use the "Featured" or "Currently Featured" checkbox to mark content for homepage display
- Only one item should be featured at a time for Photo/Video/Road Trip

---

## 🔄 Next Steps: Connecting to Your Website

To display Sanity content on your website, you'll need to:

1. **Install Sanity client:**
```bash
npm install @sanity/client
```

2. **Create queries to fetch content:**
- Query fishing reports sorted by date
- Get featured catches
- Fetch upcoming tournaments

3. **Update components to use Sanity data:**
- Replace JSON file data with Sanity queries
- Use Sanity image URLs
- Real-time content updates

Would you like help setting up the queries and connecting this to your website components?

---

## 📝 Tips

- **Images:** Upload high-quality images through Sanity's image field
- **Rich Text:** Use the content editor for formatted text with headings, lists, and inline images
- **Featured Items:** Only mark one item as "featured" for Photo/Video/Road Trip at a time
- **Dates:** Use date fields for proper sorting and filtering
- **Verification:** Use checkboxes to mark verified guides and tournaments

---

## 🆘 Need Help?

If you need assistance:
1. Setting up queries to fetch this content
2. Connecting Sanity to your website components
3. Deploying the studio to production
4. Managing image assets

Just ask! 🎣✨

