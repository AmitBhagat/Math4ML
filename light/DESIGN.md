# The Design System: Editorial Academic

## 1. Overview & Creative North Star

### Creative North Star: "The Intellectual Curator"
This design system moves beyond the standard "knowledge base" template. It is envisioned as a high-end digital gallery for complex ideas. By leveraging **The Intellectual Curator** philosophy, we prioritize extreme legibility, intentional asymmetry, and a tonal depth that feels both authoritative and approachable.

The system breaks the "template" look by using a "Typographic First" architecture. Instead of relying on heavy containers and lines, we use dramatic scale shifts in typography and vast, rhythmic whitespace to guide the eye. This is an academic experience redefined through a luxury lens: quiet, confident, and meticulously organized.

---

## 2. Colors

The palette is rooted in a monochromatic high-contrast foundation, designed to focus the mind.

*   **Primary (#000000):** Used for foundational elements, primary buttons, and heavy headings to provide an "anchor" of authority.
*   **Surface & Background (#F7F9FB / #FFFFFF):** The canvas. We use these subtle cool greys to reduce eye strain compared to pure white, creating a more "premium paper" feel.
*   **Secondary & Tertiary (#545F73 / #64748B):** These mid-tones are reserved for supporting information, captions, and secondary actions, ensuring the primary content remains the focal point.

### The "No-Line" Rule
To achieve a high-end editorial feel, **1px solid borders are prohibited for sectioning.** Boundaries between content blocks must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `background` surface. Use the void as a divider.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum.
*   **Nesting:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a natural, soft "lift" that feels integrated rather than floating.

### The "Glass & Gradient" Rule
For floating elements (like navigation bars or modals), utilize Glassmorphism. Apply `surface` colors at 80% opacity with a `backdrop-blur` of 12px-20px. 
*   **Signature Textures:** For primary CTAs, use a subtle linear gradient from `primary` (#000000) to `primary-container` (#1B1B1B) at a 45-degree angle. This provides a "carbon" depth that flat black cannot achieve.

---

## 3. Typography

**Font Family:** Inter (Variable)
Inter is our workhorse. Its neutral, technical precision allows the content—the mathematics—to be the star.

*   **Display (3.5rem - 2.25rem):** Used for hero moments. Set with tight letter-spacing (-0.02em) to create a dense, authoritative block of text.
*   **Headline (2rem - 1.5rem):** The primary navigational markers. High contrast against the body text.
*   **Body (1rem - 0.875rem):** Optimized for long-form reading. We use a generous line-height (1.6) to ensure complex academic text remains breathable.
*   **Label (0.75rem):** All-caps with increased letter-spacing (+0.05em) for category markers and metadata.

**Hierarchy Strategy:** We convey brand identity through "Size Tension"—placing very large Display type in close proximity to small, delicate Label type. This creates a sophisticated, modern layout reminiscent of a high-end architecture journal.

---

## 4. Elevation & Depth

### The Layering Principle
We abandon traditional drop shadows in favor of **Tonal Layering**. Depth is achieved by "stacking" the surface tiers:
1.  **Base:** `background` (#F7F9FB)
2.  **Sectioning:** `surface-container-low` (#F2F4F6)
3.  **Interaction Objects (Cards):** `surface-container-lowest` (#FFFFFF)

### Ambient Shadows
When a "floating" effect is required (e.g., a card on hover), use **Ambient Shadows**:
*   **Blur:** 40px - 60px
*   **Opacity:** 4% - 6%
*   **Color:** Use a tinted version of `on-surface` (#191C1E). This mimics natural light diffusion across a surface.

### The "Ghost Border" Fallback
If containment is required for accessibility, use a **Ghost Border**: `outline-variant` (#CFC4C5) at 15% opacity. Never use 100% opaque borders; they "trap" the content and break the editorial flow.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background, `on-primary` text. `xl` roundedness (0.75rem). Transition with a subtle scale-up (1.02) on hover.
*   **Secondary:** `surface-container-high` background. No border. Text in `on-surface`.
*   **Tertiary:** Ghost style. No background. `label-md` typography with a subtle underline that appears on hover.

### Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Execution:** Separate list items using `spacing-md` and `spacing-lg`. For cards, use the "Tonal Layering" mentioned above.
*   **Academic Chips:** Small, `md` roundedness, using `secondary-container` backgrounds with `on-secondary-container` text. These should feel like metadata tags in a library catalog.

### Input Fields
*   **Style:** Minimalist. Only a bottom-aligned `outline-variant` (20% opacity). On focus, the line expands to 100% opacity `primary`.
*   **Helper Text:** Always use `body-sm` in `secondary` tone to maintain a quiet UI.

### Category Icons
*   **Visual Style:** Monolinear, thin-stroke (1.5px) icons. Enclose them in a `surface-container-highest` circle or square with `lg` roundedness to create a "stamp" effect.

---

## 6. Do’s and Don’ts

### Do
*   **DO** use asymmetric layouts. Align a heading to the left and the body text to a narrow column on the right to create "Editorial Tension."
*   **DO** use whitespace as a functional tool. If a section feels crowded, double the padding instead of adding a line.
*   **DO** use "Inter" in various weights. Use `SemiBold` for titles and `Regular` for body to create clear internal hierarchy.

### Don’t
*   **DON'T** use pure black (#000000) for long-form body text; use `on-surface` (#191C1E) to keep the reading experience soft.
*   **DON'T** use standard "Material Design" shadows. They feel too "app-like" and degrade the academic aesthetic.
*   **DON'T** use bright accent colors. The "color" in this system comes from the imagery and the sophisticated use of greyscale.