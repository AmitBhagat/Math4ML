# Design System Document: The Intellectual Noir

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Curator"**

This design system is not a mere utility; it is a scholarly environment. It moves away from the "SaaS-standard" look by embracing the quiet authority of an elite research institution at midnight. We break the "template" aesthetic through high-contrast typographic scales and intentional asymmetry. The UI should feel like a curated archive—expensive, precise, and profoundly deep. 

Instead of rigid, boxed-in grids, we utilize **Tonal Architecture**. Elements are not "contained"; they are "situated" within a hierarchy of light and shadow. The goal is to create a focused, immersive experience where the information is the protagonist, supported by a cast of vibrant teal and purple interactive accents that act as digital ink.

---

## 2. Colors & Surface Philosophy

### The Palette
We use a palette of deep slates and luminous accents to simulate a high-end dark mode experience.

*   **Primary (#3cddc7):** The "Logic Teal." Use for primary actions and focused states.
*   **Secondary (#ddb7ff):** The "Insight Purple." Reserved for secondary highlights, accents, and creative exploration.
*   **Surface (#0b1326):** The "Infinite Slate." Our baseline dark canvas.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off content. In this system, boundaries are defined exclusively by:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Negative Space:** Using the spacing scale to create mental boundaries.
3.  **Tonal Transitions:** Subtle shifts in container depth.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. We use the surface-container tiers to create "nested" depth:
*   **Background:** `surface` (#0b1326)
*   **Lowered Content:** `surface-container-lowest` (#060e20) for inactive or backgrounded areas.
*   **Standard Containers:** `surface-container` (#171f33) for the main content blocks.
*   **Elevated Elements:** `surface-container-highest` (#2d3449) for cards or elements that require immediate attention.

### The "Glass & Gradient" Rule
To add "soul" to the digital interface:
*   **Glassmorphism:** For floating modals or navigation bars, use `surface-bright` at 60% opacity with a `20px` backdrop blur.
*   **Signature Gradients:** For primary CTAs, use a linear gradient from `primary` (#3cddc7) to `primary_container` (#00a392) at a 135-degree angle. This provides a tactile, "etched" quality.

---

## 3. Typography: The Editorial Edge

The typography system pairs the intellectual rigor of a serif with the modern clarity of a sans-serif.

*   **Display & Headline (Newsreader):** This is our "Editorial" voice. Use `display-lg` and `headline-md` for high-level concepts and section titles. The serif typeface conveys tradition and authority.
*   **Body & Title (Work Sans):** Our "Functional" voice. Work Sans provides a crisp, silver-toned readability against the slate backgrounds.
*   **The Hierarchy of Truth:** 
    *   **Display-lg (3.5rem):** Use for hero moments. Intentional letter-spacing (-0.02em) creates a premium, tight feel.
    *   **Label-md (0.75rem):** Use `on_surface_variant` (#bcc9c6) in all-caps with 0.1em tracking for a "metadata" look.

---

## 4. Elevation & Depth

### The Layering Principle
Avoid traditional drop shadows. Instead, stack containers.
*   **Example:** A `surface-container-high` card sitting on a `surface-container-low` section creates a natural, soft lift that mimics high-end paper stock.

### Ambient Shadows
When a "floating" effect is mandatory (e.g., a dropdown menu), use **Ambient Shadows**:
*   **Shadow Color:** A tinted version of the background (`#060e20`).
*   **Settings:** 0px 24px 48px, 8% opacity. This mimics natural light diffusion rather than a digital "glow."

### The "Ghost Border" Fallback
If accessibility requires a border, use a **Ghost Border**:
*   **Token:** `outline-variant` (#3d4947) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary_container`. No border. `DEFAULT` roundedness (0.25rem).
*   **Secondary:** Ghost style. No background, `outline` (#879391) text, and a `secondary` (#ddb7ff) 2px bottom underline on hover.
*   **Tertiary:** Text-only in `primary_fixed`. Use for low-emphasis actions like "Cancel" or "Back."

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Layout:** Use a `surface-container` background. Separate list items with 16px of vertical space. 
*   **Interaction:** On hover, shift the background to `surface-container-high` and slightly translate the element 4px to the right.

### Input Fields
*   **Base:** `surface-container-lowest` background. 
*   **Active State:** No thick border. Instead, use a 1px `primary` glow at the bottom and a subtle `surface-bright` highlight to the container.
*   **Typography:** Labels use `label-md` in `on_surface_variant`.

### Academic Annotations (Custom Component)
Small, floating chips using `secondary_container` (#6f00be) with `on_secondary_container` (#d6a9ff) text. These are used for "Citations" or "Footnotes" within the UI to reinforce the academic theme.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts (e.g., a wide left margin for a Display heading).
*   **Do** use "Silver" typography (`on_surface_variant`) for secondary information to reduce visual noise.
*   **Do** embrace negative space. If an element feels "crowded," double the padding.

### Don't
*   **Don't** use pure black (#000000). It kills the "Slate" depth.
*   **Don't** use standard 1px borders. They make the UI look like a generic dashboard.
*   **Don't** use high-vibrancy purple for large surfaces; keep it for interactive "sparks."
*   **Don't** use "sm" or "none" roundedness for main containers—keep to `DEFAULT` (0.25rem) to maintain a modern, sophisticated edge that isn't too "tech-brutalist."