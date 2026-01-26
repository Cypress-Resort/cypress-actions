# Cypress Resorts CMS - Development Plan

**Project:** Luxury Resort Administration Platform
**Template:** cypress-cms (Next.js 16 Dashboard)
**Date:** January 2026

---

## Executive Summary

Transform the existing CRM dashboard template into a world-class administration dashboard for Cypress Resorts, a luxury boutique resort. The dashboard will enable resort administrators to manage reservations, guests, villa inventory, amenities, and communications from a single unified interface.

The CMS permitting guests to access their account and manage reservations will be added in the next phase of work

---

## Phase 1: Foundation & Data Layer

### 1.1 TypeScript Entity Types

Create strongly-typed interfaces for all business entities:

```
types/
├── villa.ts           # Villa/room inventory
├── guest.ts           # Guest profiles
├── reservation.ts     # Bookings with status tracking
├── amenity.ts         # Products and services
├── calendar.ts        # Availability and blackouts
├── payment.ts         # Payment records
├── message.ts         # Guest communications
└── index.ts           # Barrel export
```

### 1.2 Mock Database Layer

Build a service layer that simulates database operations:

```
lib/
├── db/
│   ├── mock-db.ts     # In-memory data store
│   ├── villas.ts      # Villa CRUD operations
│   ├── guests.ts      # Guest CRUD operations
│   ├── reservations.ts # Reservation CRUD operations
│   ├── amenities.ts   # Amenity CRUD operations
│   ├── calendar.ts    # Calendar operations
│   ├── payments.ts    # Payment operations
│   └── index.ts       # Unified DB interface
```

### 1.3 Mock Data Generation

Create realistic mock data:

```
mock-data/
├── villas.ts          # 5 luxury villas
├── guests.ts          # 25 guest profiles
├── reservations.ts    # 30 reservations (past, current, future)
├── amenities.ts       # 20 amenities (spa, food, activities)
├── calendar.ts        # Calendar with blackouts/holidays
├── payments.ts        # Payment records
└── messages.ts        # Guest email threads
```

---

## Phase 2: Navigation & Layout

### 2.1 Sidebar Restructure

Replace CRM navigation with resort-specific menu:

**Main Navigation:**
- Dashboard (overview)
- Reservations (bookings management)
- Guests (guest profiles)
- Villas (room inventory)
- Amenities (products/services)
- Calendar (availability view)
- Messages (guest communications)
- Reports (analytics)

**Quick Actions:**
- Today's Check-ins
- Today's Check-outs
- Pending Payments

### 2.2 Header Updates

- Replace "Synclead" branding with "Cypress Resorts"
- Add notification bell for alerts
- Add quick search for guests/reservations
- Maintain dark/light theme toggle

---

## Phase 3: Dashboard Overview

### 3.1 Key Metrics Cards

Replace sales metrics with resort KPIs:

1. **Today's Occupancy** - % of villas occupied
2. **Active Reservations** - Current bookings count
3. **Today's Revenue** - Expected revenue for today
4. **Pending Check-ins** - Arrivals expected today

### 3.2 Charts Replacement

**Lead Sources Chart → Booking Channels**
- Direct Website
- Phone/Email
- Travel Agent
- OTA (Booking.com, Expedia)

**Revenue Flow Chart → Occupancy & Revenue**
- Monthly occupancy rate trend
- Revenue comparison (current vs previous year)
- Average daily rate (ADR)

### 3.3 Quick View Table

Replace deals table with today's activity:
- Upcoming check-ins (next 24 hours)
- Upcoming check-outs
- Active guests
- Pending requests

---

## Phase 4: Reservations Module

### 4.1 Reservations List Page

**Filters:**
- Date range (check-in, check-out)
- Villa selection
- Guest name search
- Status (confirmed, pending, cancelled, checked-in, checked-out)

**Table Columns:**
- Confirmation #
- Guest Name
- Villa
- Check-in / Check-out
- Nights
- Total Amount
- Status
- Actions

**Actions:**
- View details
- Modify reservation
- Cancel reservation
- Send message

### 4.2 Reservation Detail View

**Sections:**
- Guest information
- Stay details (villa, dates, rate)
- Payment status
- Amenity orders
- **Electronic Lock Control** (generate access code)
- Communication history
- Modification history

---

## Phase 5: Guest Management

### 5.1 Guest List Page

**Filters:**
- Name search
- Email search
- VIP status
- Visit history (new, returning)

**Table Columns:**
- Name
- Email
- Phone
- Total Stays
- Last Visit
- VIP Status
- Actions

### 5.2 Guest Profile View

**Sections:**
- Contact information
- Preferences (room, dietary, etc.)
- Stay history
- Payment history
- Notes
- Communication log

---

## Phase 6: Villa Inventory

### 6.1 Villas List Page

**Display:**
- Card or table view toggle
- Status filter (available, occupied, maintenance)
- Amenity filter

**Villa Card:**
- Hero image
- Villa name
- Current status
- Rate per night
- Key amenities icons
- Quick actions

### 6.2 Villa Detail View

**Sections:**
- Photo gallery
- Description
- Configuration (beds, baths, sqft)
- Amenities list
- Rate calendar
- Maintenance log
- Current/upcoming reservations

---

## Phase 7: Amenities & Products

### 7.1 Amenities List

**Categories:**
- Spa & Wellness
- Food & Beverage (fridge stocking)
- Activities & Experiences
- Transportation

**Table Columns:**
- Name
- Category
- Price
- Availability
- Popular (booking count)
- Status

### 7.2 Amenity Orders

Track guest amenity requests:
- Order ID
- Guest
- Reservation
- Items
- Total
- Status (pending, confirmed, delivered, completed)

---

## Phase 8: Communications

### 8.1 Message Center

**Inbox View:**
- Guest messages list
- Unread count
- Search and filter

**Message Thread:**
- Full conversation history
- Reply composer
- Attachment support
- Quick response templates

---

## Phase 9: Calendar & Availability

### 9.1 Calendar View

**Features:**
- Month/week/day views
- Villa availability grid
- Blackout dates highlighted
- Holiday markers
- Drag-to-create reservation

---

## Component Architecture

```
components/
├── dashboard/
│   ├── sidebar.tsx              # Resort navigation
│   ├── header.tsx               # Updated header
│   ├── content.tsx              # Layout wrapper
│   ├── metrics-cards.tsx        # Occupancy, revenue, etc.
│   ├── booking-channels-chart.tsx
│   ├── occupancy-chart.tsx
│   └── activity-table.tsx       # Today's activity
├── reservations/
│   ├── reservations-table.tsx
│   ├── reservation-filters.tsx
│   ├── reservation-detail.tsx
│   ├── reservation-form.tsx
│   └── lock-control.tsx         # Electronic lock
├── guests/
│   ├── guests-table.tsx
│   ├── guest-profile.tsx
│   └── guest-form.tsx
├── villas/
│   ├── villas-grid.tsx
│   ├── villa-card.tsx
│   ├── villa-detail.tsx
│   └── villa-form.tsx
├── amenities/
│   ├── amenities-table.tsx
│   ├── amenity-orders.tsx
│   └── amenity-form.tsx
├── messages/
│   ├── message-list.tsx
│   ├── message-thread.tsx
│   └── message-composer.tsx
├── calendar/
│   ├── availability-calendar.tsx
│   └── reservation-calendar.tsx
└── shared/
    ├── status-badge.tsx
    ├── currency-display.tsx
    ├── date-range-picker.tsx
    └── confirmation-dialog.tsx
```

---

## App Router Structure

```
app/
├── layout.tsx                   # Root layout
├── page.tsx                     # Dashboard overview
├── reservations/
│   ├── page.tsx                 # Reservations list
│   └── [id]/
│       └── page.tsx             # Reservation detail
├── guests/
│   ├── page.tsx                 # Guests list
│   └── [id]/
│       └── page.tsx             # Guest profile
├── villas/
│   ├── page.tsx                 # Villas inventory
│   └── [id]/
│       └── page.tsx             # Villa detail
├── amenities/
│   ├── page.tsx                 # Amenities list
│   └── orders/
│       └── page.tsx             # Amenity orders
├── messages/
│   └── page.tsx                 # Message center
├── calendar/
│   └── page.tsx                 # Availability calendar
└── reports/
    └── page.tsx                 # Analytics & reports
```

---

## Mock Data Specifications

### Villas (5 units)
Based on provided schema - Ridge Villa, Falls Villa, etc.
- Full configuration with amenities
- Images from Cloudinary
- Rate plans

### Guests (25 profiles)
- Name, email, phone
- Address
- VIP status
- Preferences
- Visit count

### Reservations (30 records)
- Mix of statuses: confirmed, checked-in, checked-out, cancelled
- Date range: past 30 days to future 60 days
- Various villas
- Payment status

### Amenities (20 items)
- Spa treatments (massage, facial, etc.)
- Food packages (breakfast, dinner, fridge stocking)
- Activities (hiking, kayaking, etc.)
- Transportation

### Calendar
- Blackout dates
- Holiday pricing
- Seasonal rates

---

## Design Principles

1. **Luxury Aesthetic** - Clean, elegant, minimal
2. **Information Hierarchy** - Most important info first
3. **Action-Oriented** - Clear CTAs, minimal clicks
4. **Responsive** - Tablet-friendly for on-property use
5. **Accessible** - WCAG 2.1 AA compliant
6. **Performant** - Fast load, smooth transitions

---

## Color Palette (Luxury Resort)

Maintaining dark/light themes with resort-appropriate colors:

**Primary:** Deep forest green (#1a4d2e)
**Accent:** Warm gold (#c4a35a)
**Background:** Warm off-white (#faf8f5)
**Text:** Charcoal (#2d2d2d)
**Success:** Sage green (#6b8e6b)
**Warning:** Amber (#d4a574)
**Error:** Muted red (#c25450)

---

## Implementation Order

1. ✅ Types & mock data (foundation)
2. ✅ Mock DB service layer
3. ✅ Sidebar navigation refactor
4. ✅ Dashboard overview page
5. ✅ Reservations module
6. ✅ Guest management
7. ✅ Villa inventory
8. ✅ Amenities module
9. ✅ Messaging system
10. ✅ Calendar view
11. ✅ Reports page

---

## Future Considerations (Post-Prototype)

- Supabase/PostgreSQL migration
- Real-time updates with subscriptions
- Booking engine integration
- Payment processing (Stripe)
- Smart lock API integration
- Email service integration
- Mobile app companion

---

*This plan will be executed incrementally. Each component will be well-documented and designed for future refactoring.*
