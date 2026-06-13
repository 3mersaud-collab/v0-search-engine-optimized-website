# CHANGELOG-SEO.md — سجل تعديلات SEO

## 2026-06-13 — توحيد التقييمات + إضافة m6rsa
- **الملف:** components/seo-schema.tsx
- **التغيير:**
  - ratingValue: "5" → "4.7" (مطابق قوقل ماب الرسمي)
  - reviewCount: "50" → "27" (مطابق 27 Google reviews)
  - sameAs: إضافة https://m6rsa.com
- **السبب:** مطابقة schema مع البيانات الحقيقية لتجنب عقوبة قوقل
- **نسخة احتياطية:** commit 6f0d70ac
- **المرحلة:** ① لقطة ترتيب قبل ✅  ② كثافة ≤3% ✅  build ✅  ③ مراقبة 72 ساعة جارية
- **PR:** #56
- **commit:** 7b51be5
