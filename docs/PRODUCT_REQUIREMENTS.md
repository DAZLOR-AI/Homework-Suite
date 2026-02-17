# Homework Suite Product Requirements

## 1. Vision
Homework Suite converts homework into interactive, reward-driven experiences that increase motivation and improve learning outcomes without sacrificing academic rigor.

## 2. Users
### Primary
- Students aged 6 to 25+
- Segment by educational stage: primary, secondary, university

### Secondary
- Teachers: create assignments, monitor progress, intervene early
- Parents: monitor activity, reinforce routines, celebrate effort

## 3. Core Functional Requirements
### Homework Input
- Photo upload (OCR)
- PDF upload (text extraction + OCR fallback)
- Manual entry
- Teacher-created assignments
- LMS import (future)

### Processing Pipeline
- OCR extraction
- Subject detection
- Question segmentation
- Difficulty estimation
- Learning objective tagging

### Game Layer
- Subject-specific game templates
- Reward logic (points, streaks, milestones)
- Assignment session progression
- Completion summaries with explanations

### Adaptive Learning
- Topic-level mastery model
- Difficulty adjustment by confidence/performance
- Spaced repetition scheduling
- Personalized practice recommendations

### Dashboards
- Student home + progress + profile
- Teacher class insights + assignment controls
- Parent progress and report views

## 4. Non-Functional Requirements
- 60fps interaction targets on modern devices
- Graceful degradation for low-end hardware
- Full keyboard and screen-reader support on web
- Dark mode and reduced motion support
- Multi-tenant data separation for school deployments

## 5. Trust, Safety, and Compliance
- COPPA support for users under 13
- FERPA-aligned educational data handling
- GDPR compliance patterns
- No predatory monetization loops
- Moderated social mechanics and reporting workflows

## 6. Success Metrics
### Engagement
- DAU/MAU
- Session length
- Homework completion rate
- Streak retention

### Learning
- Mastery growth rate
- Accuracy by concept over time
- Time-to-mastery reduction

### Business
- Trial-to-paid conversion
- D30 retention
- School license expansion

## 7. Monetization Principles
- Freemium baseline access
- Premium unlocks depth and analytics (not pay-to-win)
- Cosmetics-only optional purchases
- School licensing pathway

## 8. MVP Scope
- Auth and profiles
- Homework input (photo/manual/PDF)
- OCR + basic subject parser
- 3–4 game modes
- Points, levels, badges
- Basic progress dashboard
- Web plus one mobile platform
