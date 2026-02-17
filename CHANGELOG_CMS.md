# Cypress Resorts CMS - ADMIN DASHBOARD - CHANGELOG

## Completed

### Foundation
- [x] Created comprehensive TypeScript types for all entities
  - Villa, Guest, Reservation, Amenity, Calendar, Payment, Message
  - Location: `types/`
- [x] Built mock data layer with realistic resort data
  - 5 Villas, 10 Guests, 10 Reservations, 12 Amenities, Message threads
  - Location: `mock-data/`
- [x] Created mock database service with async CRUD operations
  - Simulates network delay, pagination, filtering
  - Location: `lib/db/mock-db.ts`
- [x] With MEWS Migration, integrated SQL apis for live data 
  - RLS fully implemented
  - Data fully secured with whitelist auth and OTP
  - Deployed LOGIN ATTEMPT tracking for additional security

### UI Components
- [x] Refactored sidebar for resort navigation
  - Dashboard, Reservations, Guests, Villas, Amenities, Calendar, Messages, Settings
  - Quick actions sidebar with today's stats
  - Cypress Resorts branding with forest green theme
- [x] Updated header with notifications dropdown
- [x] Updated stats cards for resort metrics
- [x] Updated charts with resort data (Revenue & Occupancy, Booking Channels)
- [x] Created activity table for today's check-ins/check-outs
- [x] Refactored cms app for DRY. New components created under /common, making an array of utilities available across the app
- [x] Refactor toggle switch and theme provider, including dark, light and system

### ADMIN DASHBOARD
- [x] Dashboard overview page (`/`)
  - Welcome section, stats cards, charts, today's activity table
  - Quick actions sidebar with today's check-ins, check-outs, and pending tasks
- [x] Reservations page (`/reservations`)
  - Filter by date range, status, payment status, villa
  - Pagination, search
  - Functions accessed via drop down on each reservations (elipses)
    - View Details
    - Edit Reservation
    - Check out (including late checkout time)
    - Lock code
    - send Message
- [x] Electronic lock code management
  - Generate new code (mock)
  - View active code
  - Revoke access
- [x] Villas inventory page (`/villas`)
  - Grid/list view toggle
  - Filter by status and type
  - Villa cards with details
  - Functions on cards (see elipses) for viewing and editing Villa details
    - Access by drop down menu (elipses)
    - View by guest filters details only disclosed to admin
  - Function on cards to view the calendar for the Villa
  - Function on cards to set maintenance schedule for the villa
    and block calendar. Also - notify guests (option)
- [x] Guest Profiles page (`/guests`)
  - Guest list with search and filters (VIP status, visit count, tags)
  - Guest cards showing contact info, stay history, preferences
  - Guest detail drawer with full profile, reservation history, notes
  - Add/edit guest functionality
  - Tag management for guest segmentation
- [x] Amenities page (`/amenities`)
  - Amenity catalog with category tabs (Spa, Dining, Activities, etc.)
  - Grid/list view toggle
  - Pricing and availability display
  - Amenity detail drawer with full info, pricing tiers, scheduling
  - Add/edit amenity functionality
  - Order history tracking
- [x] Calendar page (`/calendar`)
  - Monthly occupancy overview with grid and list views
  - Clean day cells showing occupancy count (X/total units)
  - Activity pills for arrivals, departures, and pending items
  - Today highlight with primary ring
  - Day run-sheet drawer with:
    - Progress tracking (checkboxes persisted to localStorage)
    - Tasks grouped by category (Arrivals, Departures, Services, Special Requests)
    - Unit status overview (collapsible)
    - Share functionality (copy to clipboard, native share, print)
    - Strikethrough on completed items

---

### GUEST PORTAL (mobile responsive)
- [x] Guest registration - (select login) overview page (`/`)
  - Diverted to guest profile registration after OTP verification
  - Collect minimum setup information then divert to portal
- [x] Portal page (`/guest/dashboard`)
  - Full view of all key functions for making and changing reservations
  - Full access to functions to shape the guest experience: 
    - Reservations 
    - Grocery Menu
    - Amenities
    - Experiences 
    - Concierge  
- [x] Electronic lock code 
  - View active code  
- [x] Villas inventory page (`/villas`)
  - Grid/list view toggle
  - Filter by status and type
  - Villa cards with details  
- [x] Availability (`/availability`)
  - Calendar driven search for availability across all Villas
  - Calendar color marks indicating dates where all villas sold out
  - Calendar search - next available date for a Villa
  - Added more elegant, guest friendly error messages when attempting to book sold out date 


---

## Work in Progress

### Content Engineering and Database Migration from MEWS
- [x] Download guest and reservation data from MEWS
- [x] Create Migration scripts for guests and reservations
- [x] Test Migrations - resolve data exceptions (ie - reservations with no guest profile match)
- [x] Create database schema migrations - guests and reservations
- [x] Create database schema migrations - villas
- [x] Replace mock-db for guests and reservations with Supabase client
- [x] Refactor components to use Supabase
- [x] Restructure components for improved maintenance and document
- [ ] Add real-time subscriptions for live updates (to be investigated - MEWS has a scheduled download function)
- [ ] Work with Tanner - provide missing table data (identified 3 reservations that appear to outliers -- Holbrook, checkin July 1, Hampton, checkin Sept 4, Herchecbach, checkin April 1 - all 3 guests appear to have new reservations at alternate dates, whcih are the dates reflected in their guest records)
- [x] Confirm with Tanner mapping of Villas from MEWS to new CYPRESS Platform. Data Map currently reflects Moody Modernist => Laurel Villa; European Organic => Magnolia Villa; Contemporary Elegance => Cedar Villa;
- [ ] Confirm with Tanner ERD for known entities;
- [ ] Content and maintenance functions for the following entities:
-- villas (including images)
-- amenities (+ workflow logic)
-- experiences (+ workflow logic)
-- tenant configurations + maintenance dashboard for other resorts using platform
-- calendar configurations + rules

### GENERAL QUESTIONS, BUGS, DATA ISSUES, SOFTWARE MAINTENANCE
- [x] Processing of new orders with Vice Kitchen 
- confirmation email was not sent when tested
- the STRIPE webhook references a tannerbliss1 projects (fix that reference)
- How is an order canceled or modified once submitted?
- [ ] Text integration via Twillio
- [x] For email transport, use cypressresort (remove strategicmachine) 
- [ ] Processing of new orders with Vice Kitchen 
- [ ] Execute set of actions on DRY for CMS platform
- [X] Set up new default constant of $629 per night for stays
- [x] Investigate and resolve reservation data that is showing up a day earlier than actual. Example cases include:
-- Julie Masterson
-- Josh Allen
-- every reservation examined is showing up a day earlier


### Guest Messaging (`/messages`)
- [ ] Thread list with unread indicators
- [ ] Message composer with templates
- [ ] Multi-channel support (email, SMS, in-app chat)
- [ ] Thread detail view
- [ ] Automated message triggers (pre-arrival, post-checkout)

### Settings (`/settings`)
- [ ] Resort profile settings
- [ ] Staff management and permissions
- [ ] Notification preferences
- [ ] Integration settings (PMS, payment processors)
- [ ] Email/SMS configuration


### Authentication
- [x] OTP implemented with whitelist for additional admin security
- [ ] Role-based access control?
- [ ] Staff login/logout

---

## Technical Debt / Improvements

### Performance
- [ ] Add React Query or SWR for data fetching
- [ ] Implement optimistic updates
- [ ] Add loading skeletons

### Testing
- [ ] Unit tests for utility functions
- [ ] Component tests for key UI elements
- [ ] E2E tests for critical flows

---

## Color Scheme Reference

```css
/* Resort Brand Colors */
--forest-green: #1a4d2e;
--gold-accent: #c4a35a;
--sage-green: #6b8e6b;
```

## File Structure

```
cypress-cms/
├── app/
│   ├── page.tsx              # Dashboard
│   ├── reservations/
│   │   └── page.tsx          # Reservations list
│   ├── villas/
│   │   └── page.tsx          # Villas inventory
│   ├── guests/
│   │   └── page.tsx          # Guest profiles
│   ├── amenities/
│   │   └── page.tsx          # Amenity catalog
│   ├── calendar/
│   │   └── page.tsx          # Occupancy calendar + run-sheets
│   ├── messages/             # TODO
│   └── settings/             # TODO
├── components/
│   ├── dashboard/            # Dashboard components
│   ├── reservations/         # Reservation components
│   ├── villas/               # Villa components
│   ├── guests/               # Guest components
│   ├── amenities/            # Amenity components
│   ├── calendar/             # Calendar + run-sheet components
│   └── ui/                   # shadcn/ui components
├── types/                    # TypeScript interfaces
├── mock-data/               # Mock data
├── lib/
│   └── db/                  # Database services
└── store/                   # Zustand stores
```
