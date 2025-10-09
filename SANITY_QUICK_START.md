# Sanity CMS Quick Start for ReelBama

## 🚨 Fix CORS Error First!

### Before using `/studio`, do this:

1. Go to https://www.sanity.io/manage
2. Select your project
3. **Settings** → **API** → **CORS Origins**
4. Click **Add CORS origin**
5. Add: `http://localhost:3000` (check "Allow credentials")
6. Add: Your production URL (check "Allow credentials")
7. **Save**

---

## 📋 Content Types You Can Manage

### 1. **Fishing Reports** 🎯 MOST IMPORTANT
Where anglers share their latest fishing experiences.

**Quick Add:**
- Lake: "Lake Guntersville"
- Date: Today
- Reporter: Your name
- Conditions: "Partly cloudy, 68°F water"
- Water Temp: 68
- Clarity: Select from dropdown
- Report: Detailed fishing story
- Catch Report: What you caught
- Best Lures: Add 3-4 lures that worked

**Shows on:**
- Homepage (most recent)
- `/reports` page (all reports)

---

### 2. **Catch of the Week** 🎣
Featured fish catches from the community.

**Quick Add:**
- Angler: "Bryan Brasher"
- Fish: "Largemouth Bass"
- Weight: 5.2
- Location: "Lake Guntersville"
- Photo: Upload image
- Date Caught: Select date
- Featured: ✅ (to show on homepage)

**Shows on:**
- Homepage (latest 5)

---

### 3. **Drop-Shot Column** 📝
Fishing technique articles and tips.

**Quick Add:**
- Title: "Best Topwater Lures for Fall"
- Author: Your name
- Published Date: Today
- Excerpt: Short preview (2-3 sentences)
- Content: Full article with rich text editor
- Featured: ✅

**Shows on:**
- Homepage (latest 3)

---

### 4. **Tournament Schedule** 🏆
Upcoming fishing tournaments.

**Quick Add:**
- Tournament Name: "Fall Bass Championship"
- Lake: "Lake Martin"
- Boat Ramp: "Kowaliga Marina"
- Date: Select future date
- Hours: "6:00 AM - 2:00 PM"
- Contact: email@example.com
- Verified: ✅ (after phone verification)

**Shows on:**
- Homepage (all upcoming)

---

### 5. **Fishing Guides** 🎣
Professional guide directory.

**Quick Add:**
- Guide Name: "Captain Mike"
- Region: "Lake Guntersville"
- Specialty: "Largemouth Bass"
- Contact: email@example.com
- Services: Check boxes (Boat, Gear, Photos)
- Licensed: ✅
- Verified: ✅

**Shows on:**
- Homepage (all verified guides)

---

### 6. **Photo of the Week** 📸

**Quick Add:**
- Caption: "Sunset over Lake Martin"
- Photographer: Your name
- Photo: Upload scenic image
- Week Of: Select date
- Currently Featured: ✅

---

### 7. **GoPro Video of the Week** 🎥

**Quick Add:**
- Video Title: "Epic Bass Strike"
- Creator: Your name
- Video URL: YouTube link
- Week Of: Select date
- Currently Featured: ✅

---

### 8. **Road Trip of the Month** 🗺️

**Quick Add:**
- Title: "Exploring Lake Eufaula"
- Author: Your name
- Published Date: Select date
- Hero Image: Upload cover image
- Excerpt: Short preview
- Content: Full article
- Currently Featured: ✅

---

## ⚡ Quick Tips

### **Featured Items:**
Only check "Featured" or "Currently Featured" for ONE item per type:
- One featured Photo
- One featured Video
- One featured Road Trip

### **Dates:**
- Use today's date for current content
- Site automatically shows newest first

### **Images:**
- Upload high-quality images (1200px+ width recommended)
- Sanity automatically optimizes them

### **Rich Text:**
- Use the editor toolbar for formatting
- Add images inline in articles
- Use headings for structure

---

## 🎯 Testing Your Content

After adding content in Sanity:

1. **Save as Draft** - To preview without publishing
2. **Publish** - Makes it live on your site
3. **Unpublish** - Removes from site (but keeps in Sanity)

Changes appear **instantly** on your website!

---

## 📊 Content Strategy

### **Start with these:**
1. Add 2-3 **Fishing Reports** (most valuable content)
2. Add 3-5 **Catches of the Week**
3. Add 1 **Featured Photo**
4. Add 2-3 **Drop-Shot Column** posts
5. Add upcoming **Tournaments**
6. Add verified **Guides**

This will populate your homepage with real Sanity content!

---

## 🔍 Still Using JSON Fallback?

Your site currently falls back to JSON if Sanity is empty. This means:

- ✅ Site works even if Sanity has no content yet
- ✅ You can add content gradually
- ✅ No downtime during migration

Once you have content in Sanity, it automatically replaces JSON data.

---

## 🎉 Ready to Go!

1. Fix CORS (see top of this file)
2. Visit http://localhost:3000/studio
3. Start adding content!
4. Watch it appear on your site instantly

Questions? Check `SANITY_CONTENT_GUIDE.md` for detailed field descriptions.

Happy content managing! 🎣✨

