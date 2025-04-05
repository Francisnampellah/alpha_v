# SMARTiNNO Navigation Component

This is a flexible Navigation component to be used across all pages in the SMARTiNNO website. It provides consistent styling and behavior while allowing for customization based on the page needs.

## Usage

Import the Navigation component in your page or layout file:

```tsx
import Navigation from "@/components/navigation/Navigation"
```

Then add it to your component:

```tsx
// Basic usage
<Navigation />

// With call-to-action button
<Navigation showCTA={true} />

// Homepage variant with CTA and custom text
<Navigation variant="homepage" showCTA={true} ctaText="Get Started" ctaLink="/contact" />
```

## Props

| Prop      | Type                                   | Default         | Description                                                 |
| --------- | -------------------------------------- | --------------- | ----------------------------------------------------------- |
| variant   | "transparent" \| "solid" \| "homepage" | "transparent"   | Style variant for the navigation                            |
| showCTA   | boolean                                | false           | Whether to show a call-to-action button                     |
| ctaText   | string                                 | "Get Started"   | Text for the call-to-action button                          |
| ctaLink   | string                                 | "#"             | Link for the call-to-action button                          |

## Variants

### transparent

The default variant. Navigation starts as transparent with white text, then becomes a white background with black text on scroll.

```tsx
<Navigation variant="transparent" />
```

Example usage: About page, services page, or any page with a hero image at the top.

### solid

Always shows a white background with black text, regardless of scroll position.

```tsx
<Navigation variant="solid" />
```

Example usage: Policy pages, documentation pages, or any page without a dark hero section.

### homepage

Similar to transparent but with specific styling for the homepage.

```tsx
<Navigation variant="homepage" />
```

Example usage: Homepage only.

## Examples

### Homepage

```tsx
<Navigation variant="homepage" showCTA={true} ctaText="Get Started" />
```

### About Page

```tsx
<Navigation variant="transparent" showCTA={true} ctaText="Contact Us" ctaLink="/contact" />
```

### Services Page

```tsx
<Navigation variant="transparent" showCTA={true} ctaText="View Solutions" ctaLink="/solutions" />
```

### Documentation or Policy Page

```tsx
<Navigation variant="solid" />
``` 