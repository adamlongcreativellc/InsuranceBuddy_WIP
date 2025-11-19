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


BACKGROUND:

Creative Brief: InsuranceBuddy™ App Store Launch Assets

1.0 Project Overview & Strategic Imperative

Our mission is to architect the definitive first impression for InsuranceBuddy™ in the marketplace. The immediate goal is to develop the initial set of compelling visual and textual assets for the InsuranceBuddy™ App Store and Google Play Store listings. These assets are the vanguard of our launch strategy and their flawless execution is critical for the upcoming beta launch presentation with Jake, requiring full readiness for our Wednesday meeting.

Following the strategic model of Rocket Money's successful app store presence, we will create seven conceptual marketing screens and the accompanying descriptive copy. These assets must not only showcase the app's functionality but also communicate its core value proposition in a visually engaging and immediately understandable format.

This brief will translate our brand's promise and innovative technology into a powerful first impression designed to drive our single most important business goal: user acquisition.

2.0 Core Objective & Key Performance Indicator (KPI)

In a marketplace this crowded, ambiguity is failure. Our creative must be surgically focused on a single objective: to cut through the noise and drive downloads by instantly communicating the app's unique value to our target audience. We have seconds to answer their implicit question—"Why should I download this?"—and our answer must be compelling.

To visually and textually communicate that InsuranceBuddy™ is the easiest way for users to finally understand and control their true insurance spending, compelling them to download the app for the beta.

The primary key performance indicator (KPI) for this creative work will be the download conversion rate from the app store page. Success will be measured by the percentage of the initial ~40 beta users who visit the page and proceed to download the application. This is the first real-world test of our messaging's potency.

With our objective defined, we now turn our focus to the people we are trying to reach, whose needs must dictate every creative decision.

3.0 Target Audience

Every creative decision we make—from hex code to headline—will be an answer to the direct needs of our target user. We are not designing for everyone; we are designing for them. A deep, empathetic understanding of their mindset, challenges, and motivations is the non-negotiable foundation of this project.

* Demographics:
  * Our audience is between 30 and 65 years old, with a strategic focus on the 35-45 age range, which represents the "most intense" period of asset and insurance accumulation.
  * These are individuals and families actively acquiring assets that require insurance: houses, cars, boats, and RVs. They are at a life stage characterized by major events like getting married and having children.
* Psychographics & Pain Points:
  * Their core problem is simple yet profound: they are busy people building wealth who have insurance but are fundamentally disorganized and "don't know what they have."
  * They feel overwhelmed by the chaos of scattered documents. Their policies are strewn across a dizzying mix of physical and digital locations: the desk drawer, storage tub, kitchen drawer, filing cabinet, glove compartment, lockbox, safety deposit box, and safe, alongside files lost on their phone, computer, and buried in email.
  * This constant disorganization fuels a frantic internal monologue—“Where did I put that policy?”, “Was it in the car?”, “Maybe the desk?”, “Did I scan that?”, “Is it in my email?”—leading to a "huge level of embarrassment," a feeling the app addresses in a helpful, non-judgmental way.
* What We Are NOT Targeting:
  * We are explicitly not targeting 20-year-olds who may still be on their parents' insurance or individuals who are unconcerned with their financial well-being. Our focus is on those who have a vested interest in managing their increasingly complex financial lives.

Having defined precisely who we are speaking to, we can now articulate what we must tell them.

4.0 The Core Message & Brand Promise

The core message is the single most important idea we must plant in the audience's mind. It must be simple, memorable, and a direct reflection of our brand's unique promise. This is the thought that must linger long after they've viewed our app store page.

InsuranceBuddy™ is your faithful companion that finally reveals how much you're really spending on insurance and organizes all your scattered policies into one secure place.

This message is supported by several key brand promises that must be consistently communicated across all assets:

* Reveal Your Real Spend: The app delivers a moment of shocking clarity. The real-world example of "Stephen"—who thought he was spending $12,000 annually but discovered his actual spend was $35,000—perfectly encapsulates this high-value discovery.
* Organize the Chaos: We solve the universal problem of document clutter. The app acts as a powerful tool to consolidate policies from countless scattered locations into a single, secure, and easily accessible digital vault.
* Work For You, Not Sell to You: Our mission is one of pure consumer advocacy. We must state clearly that InsuranceBuddy™ does not sell insurance products and will never share or sell user data.
* Private & Secure AI: We leverage powerful, private AI that works exclusively with the user's own data. This "gated AI" concept, combined with messaging around top security standards like SOC2, builds essential trust.
* Patent Pending Innovation: This is a "brand new" technology that is "patent pending." This message is critical for differentiation and communicates a clear competitive advantage and defensible innovation.

This message defines what we say. Our brand personality dictates how we say it.

5.0 Tone of Voice & Brand Personality

Our brand's personality dictates the emotional connection we build with our users; it is the difference between being a sterile utility and a beloved companion. The tone of voice is the practical application of this personality in every headline, button, and visual element we create.

Trait	Execution & Key Phrases
Faithful Companion	Use assistive, non-judgmental language. Position Buddy as a helpful partner, not a demanding advisor. Use phrases like: "Let Buddy do this for you," "How can I help?", "fetch," and "remember."
Playful & Approachable	Employ a simple, 4th-5th grade reading level. Use fun metaphors like Buddy "eating your homework" (policies). Incorporate playful visual elements like paw prints.
Clear & Empowering	Focus on "gain" motivation over "pain" or fear. The message is that the user's life is getting better and more successful, and Buddy helps manage that growing complexity.
Innovative & Trustworthy	Consistently feature the "Patent Pending" status. Use clear, simple language to describe powerful tech (e.g., "Reads 475+ policy elements in under 50 seconds").

