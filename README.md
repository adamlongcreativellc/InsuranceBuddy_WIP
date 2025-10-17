# InsuranceBuddy Lander

A Next.js 15.5.2 landing page application using App Router, React 19, TypeScript, and Tailwind CSS v4.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `pnpm run dev` - Start the development server with Turbopack
- `pnpm run build` - Build the production application
- `pnpm run start` - Start the production server
- `pnpm run lint` - Run ESLint to check code quality

## Tech Stack

- **Next.js 15.5.2** with App Router and Turbopack
- **React 19.1.0**
- **TypeScript** with strict mode
- **Tailwind CSS v4**
- **Material-UI v7** (@mui/material)
- **Firebase Admin SDK** for backend integration

## Beta Invite Submissions

The application features an early access signup form that stores beta invites in Firestore.

### API Endpoint

`POST /api/early-access` - Submit beta signup request

**Request Body:**
```json
{
  "email": "user@example.com",
  "platform": "iOS" | "Android",
  "personalInsurance": ["health", "auto", "home"],
  "topChallenges": ["tracking", "claims", "documents"]
}
```

**Features:**
- Email validation and duplicate prevention
- Stores submissions in `beta_signups` collection in Firestore
- Captures user agent and IP address metadata
- Returns 409 Conflict if email already registered

See [route.ts](src/app/api/early-access/route.ts) for implementation details.

## Firebase Deployment

This application is configured for automated deployment to Firebase App Hosting via [firebase.json](firebase.json).

### Preview URL

https://insurancebuddy-lander--insurancebuddy-test.us-central1.hosted.app

### Configuration

The `firebase.json` file configures:

- **Backend ID**: `insurancebuddy-lander`
- **Root Directory**: `/` (project root)
- **Ignored paths**: `node_modules`, `.git`, debug logs, and `functions`

### Firebase Emulator

Run the Firebase emulator locally:

```bash
firebase emulators:start
```

The App Hosting emulator runs on port 5002 and executes `pnpm run dev` as configured in [firebase.json](firebase.json).

### Automated Deployments

Deployments to Firebase App Hosting are triggered automatically through the Firebase backend configuration. The application builds with Turbopack and deploys based on the settings in [firebase.json](firebase.json).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)
- [Material-UI Documentation](https://mui.com/material-ui/)
