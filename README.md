# Uppesi-delivery-app-WIP-Final-project
Uppesi Delivery App

**Overview**
The Uppesi Delivery App project consists of three main sections:

- Customer Ordering App
- Admin Panel
- Dispatch Panel
  
This project allows users to order deliveries, track them in real-time, and includes admin and dispatch panels for managing deliveries. The frontend is designed using HTML, CSS, and JavaScript, with added features such as icons, images, maps, and charts for better user experience.

**Table of Contents**
- Features
- Installation
- File Structure
- Backend Setup
- Frontend Sections
- Testing and Running
- API Routes
   
**Features**
- Customer Ordering App: Users can log in, order deliveries, fill in parcel details, track the delivery live, and complete payments.
- Admin Panel: Admins can manage users, view reports, and handle payment requests.
- Dispatch Panel: Dispatchers can view and manage delivery routes, customers, and track ongoing orders.

**Backend Setup**
The backend is built using Node.js and Express.js.
   
**Database Models**
- Created tables for users, orders, parcels, and payments.

**Routes**
- /auth: Handles login/signup logic.
- /admin: Admin functionalities like managing users and viewing reports.
- /dispatch: Routes for handling delivery operations and tracking.

a. **Customer Ordering App**
- The web page has the following features: 

**1. Header: Contains the logo and navigation bar with:**

- Language selection: Dropdown for English, Swahili, and French.
- Currency selection: Dropdown for Ksh and USD.
- Account: User profile options.

**2. Main Sections:**

- Select Pickup & Dropoff Locations: Form inputs for location detection and user entry.
- Parcel Details: Parcel size selection with weight categories and price estimations.
- Delivery Info: Auto-updating section based on customer input.
- Payment Methods: Options for card, mobile money, and cash payment.
- Live Order Tracking: Includes a map that shows real-time delivery tracking.

**3. Footer**:

- Links to Partners, Resource Center, Terms of Service, Privacy Policy, Contact Us, and FAQs.

b. **Admin Panel**
The Admin Panel is designed to help administrators manage and monitor orders, settings, and marketing activities within the Uppesi Delivery App.

**Layout Structure**
The admin panel consists of:
- A Panel View (on the left side) with categories and sub-categories for navigation.
- A Main View (on the right side) that displays detailed information based on the selected sub-category.

**Panel View Categories**
**1. Orders**
This category allows admins to view, manage, and control all activities related to orders, merchants, customers, accounting, and reviews.
The sub-categories are: 
- Dashboard: Provides an overview of orders, customer activity, and merchant reports.
- Orders: Displays all the active and past orders with details and status tracking.
- Merchants: Lists merchants, their performance, and reviews.
- Accounting: Shows revenue and payment details for orders, commissions, and settlements.
- Customers: View and manage customer details, account activity, and order history.
- Product Reviews: Admin can see and moderate customer reviews of products and services.

**2. Settings**
The Settings category allows the admin to customize and configure the platform settings.
We have the following sub-categories: 
- Profile: Edit and manage admin profile details.
- Customize: Modify the UI layout and branding elements like logo, fonts, and color.
- Styling: Adjust the platform’s theme, including CSS-based styling changes.
- CMS: Manage content like blog posts, articles, or other marketing information.
- Catalog: Manage the products catalog with pricing, descriptions, and availability.
- Configuration: Control system-level configurations such as API settings, integrations, etc.
- Tax: Set tax configurations based on region or delivery options.
- Payment Options: Manage the available payment gateways such as card, mobile money, etc.
- Delivery Options: Configure the delivery modes, fees, and timing options.

**3. Marketing**
This section allows the admin to manage promotional tools.
We have the following sub-categories:
- Promocode: Create and manage discount codes for customers.
- Campaigns: Organize marketing campaigns with detailed performance tracking.

c. **Dispatcher Panel**
The Dispatcher Panel is designed for managing and coordinating delivery orders, routes, and customers. 

**Layout Structure**
The dispatcher panel consists of:
- A Panel View (on the left side) for navigation.
- A Main View (on the right side) for displaying selected details.
- 
**Panel View Categories**
It has 2 categories: Home and Settings.

**Home**
The Home section is where dispatchers manage day-to-day operations.
The following are the sub-categories: 
- Dashboard: Displays key metrics, such as total revenue, active routes, and ongoing deliveries. Includes charts and a map (Kenya) to show revenue by location.
- Customers: Lists all customers with details about total customers, active customers, and inactive customers. Provides a table with name, email, phone number, status, and action options (e.g., edit or delete).
- Routes: Displays a list of active and completed delivery routes, with the ability to assign and track new routes.
- Payout Requests: Manage and process payout requests for drivers, agents, and merchants.
  
**Settings**
This section allows dispatchers to manage their profile and configuration settings.
It has the following sub-categories: 
- Profile: Manage dispatcher profile settings, including contact details and security options.
- Customize: Adjust UI preferences or personal settings related to dispatch operations.
- Teams: Manage dispatch agents and team members. Assign roles and view performance reports.
- Agent: View and manage delivery agents, including assigning orders or managing availability.
- Payment Options: Set up and manage payout and payment processing methods.
- Geofence: Configure geofencing zones for delivery operations. This will allow the dispatcher to create boundaries and manage deliveries within defined zones
- Banners: Manage promotional banners to display on the customer ordering website.

Both the Admin Panel and Dispatcher Panel are built using HTML, CSS, and JavaScript. Each panel provides interactive views where users can:
- Navigate the different sub-categories through the panel.
- Perform tasks such as creating new orders, managing customers, viewing reports, and configuring settings.
- Icons and Charts are used in the dashboard views to visually represent key metrics.
- For Admin Panel: Charts and tables will be used extensively for viewing reports, managing orders, merchants, and campaigns.
- For Dispatcher Panel: Maps, routes, and customer tracking are highlighted in the main dashboard, with real-time information shown to the dispatcher.
