# Remove JSON Fallback (Optional)

If you want to force your site to ONLY use Sanity (no JSON fallback), follow these steps:

## ⚠️ Warning

Only do this AFTER you've added content to Sanity! Otherwise your site will show empty sections.

## Steps to Remove JSON Fallback

### 1. Update app/page.tsx

Change from:
```typescript
const catches = sanityCatches.length > 0 ? sanityCatches : JSON_FALLBACK
```

To:
```typescript
const catches = sanityCatches
```

Do this for all content variables.

### 2. Remove JSON Import

Remove this line:
```typescript
import data from '../data/test-website-data.json';
```

### 3. Remove getSection Helper

Delete the entire getSection function and SectionData interface.

---

## ✅ Recommended Approach

**Keep the fallback system!** It's actually a great safety net:
- Site never breaks if Sanity is down
- You can test changes in JSON before adding to Sanity
- Backup data source
- Gradual migration

You can keep both systems running indefinitely!

