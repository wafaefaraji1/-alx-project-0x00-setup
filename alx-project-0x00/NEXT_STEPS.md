# Next Steps Guide

## Current Status
✅ Tasks 0-3 completed
⏳ npm install in progress
📋 Tasks 4-6 remaining

## Task 4: Using Components

### Objective
Import and use the Card component in the landing page.

### Steps:
1. Open `pages/landing.tsx`
2. Import the Card component at the top:
   ```typescript
   import Card from "@/components/Card";
   ```
3. Use the Card component in the JSX:
   ```typescript
   const Landing: React.FC = () => {
     return (
       <div>
         <h1 className="text-xl font-extralight">Landing Page</h1>
         <Card title="Villa Arrecife Beach House" desc="Sideman, Bali, Indonesia" rating="4.76" />
       </div>
     )
   }
   ```
4. Test by visiting http://localhost:3000/landing

## Task 5: Typing Components with Props

### Objective
Add TypeScript interface for Pill component props.

### Steps:

1. **Update `interfaces/index.ts`:**
   ```typescript
   export interface PillProps {
     title: string;
   }
   ```

2. **Update `components/Pill.tsx`:**
   ```typescript
   import { PillProps } from "@/interfaces";

   const Pill: React.FC<PillProps> = ({ title }) => {
     return (
       <div className="flex justify-center items-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
         <p className="text-sm">{title}</p>
       </div>
     )
   }

   export default Pill;
   ```

3. **The Card component already uses Pill with props** - verify it works correctly

## Task 6: Advanced - Button Component

### Objective
Create a reusable Button component with customizable styles.

### Steps:

1. **Create `interfaces/index.ts` additions:**
   ```typescript
   export interface PillProps {
     title: string;
   }

   export interface ButtonProps {
     title: string;
     size?: 'small' | 'medium' | 'large';
     shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
     onClick?: () => void;
   }
   ```

2. **Create `components/Button.tsx`:**
   ```typescript
   import { ButtonProps } from "@/interfaces";

   const Button: React.FC<ButtonProps> = ({ 
     title, 
     size = 'medium', 
     shape = 'rounded-md',
     onClick 
   }) => {
     const sizeClasses = {
       small: 'px-3 py-1 text-sm',
       medium: 'px-4 py-2 text-base',
       large: 'px-6 py-3 text-lg'
     };

     const shapeClasses = {
       'rounded-sm': 'rounded-sm',
       'rounded-md': 'rounded-md',
       'rounded-full': 'rounded-full'
     };

     return (
       <button
         onClick={onClick}
         className={`bg-blue-500 text-white hover:bg-blue-600 transition-colors ${sizeClasses[size]} ${shapeClasses[shape]}`}
       >
         {title}
       </button>
     );
   };

   export default Button;
   ```

3. **Update `pages/landing.tsx` to use Button:**
   ```typescript
   import Card from "@/components/Card";
   import Button from "@/components/Button";

   const Landing: React.FC = () => {
     return (
       <div className="p-8">
         <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
         
         <div className="mb-8">
           <h2 className="text-lg font-semibold mb-4">Button Variations</h2>
           <div className="flex gap-4 flex-wrap">
             <Button title="Small Button" size="small" shape="rounded-sm" />
             <Button title="Medium Button" size="medium" shape="rounded-md" />
             <Button title="Large Button" size="large" shape="rounded-full" />
           </div>
         </div>

         <div>
           <h2 className="text-lg font-semibold mb-4">Property Cards</h2>
           <Card 
             title="Villa Arrecife Beach House" 
             desc="Sideman, Bali, Indonesia" 
             rating="4.76" 
           />
         </div>
       </div>
     )
   }

   export default Landing;
   ```

## Testing Checklist

After completing all tasks, test the following:

- [ ] Home page loads at http://localhost:3000
- [ ] Landing page loads at http://localhost:3000/landing
- [ ] About page loads at http://localhost:3000/about
- [ ] Card component displays correctly (after adding images)
- [ ] Pill components show different titles
- [ ] Button component renders in different sizes
- [ ] Button component renders in different shapes
- [ ] No TypeScript errors in the console
- [ ] No ESLint errors

## Important Reminders

### Replace Image Placeholders
Before testing the Card component fully, replace these files with actual images:
- `public/assets/images/house.png` - Property image
- `public/assets/images/star.png` - Star icon

### Running the Development Server
```bash
cd alx-project-0x00
npm run dev -- -p 3000
```

### Checking for Errors
- Open browser console (F12) to check for runtime errors
- Check terminal for TypeScript/ESLint errors
- Use VSCode's Problems panel to see type errors

## Additional Enhancements (Optional)

If you want to go beyond the requirements:

1. **Add more Card instances** with different data
2. **Create a layout component** for consistent page structure
3. **Add navigation** between pages
4. **Implement hover effects** on cards
5. **Add more button variants** (colors, outlined, etc.)
6. **Create a Header component** with navigation links
7. **Add responsive design** improvements

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

Good luck with completing the remaining tasks! 🚀
