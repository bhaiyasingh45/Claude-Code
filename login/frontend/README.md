# FoodieExpress — Login

Front end for the FoodieExpress login screen, built from the [Figma design](https://www.figma.com/design/eU1otgThzSeMrtf6LIOXrr/foodieexpress?node-id=2-4).

Stack: React 19 + TypeScript + Vite + Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

## Structure

```
src/
  components/
    LoginScreen.tsx       # top-level screen composition
    StatusBar.tsx          # mock device status bar
    HeroHeader.tsx         # brand logo + tagline
    LoginCard.tsx           # bottom sheet: heading, phone field, OTP button, socials, terms
    PhoneNumberField.tsx    # country code + phone number input
    SocialLoginRow.tsx      # Google / Apple / Facebook continue buttons
  assets/                   # icons and images exported from Figma
```
