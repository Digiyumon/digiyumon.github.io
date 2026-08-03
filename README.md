<div align="center">

# Alejandro Ojeda-Celis

**Software & Data Engineering Portfolio**

A minimal portfolio showcasing scalable ETL pipelines, full-stack database architectures, and technical support systems. Built with Astro, TypeScript, and Markdown.

</div>

---

## Overview

This repository powers my personal software and data engineering portfolio. It is structured for clear readability and fast page loads, highlighting my technical projects, core competencies, and background in computer science.

### Featured Projects

- **Cloud-Based Speedrun Data Pipeline:** Python ETL pipeline ingesting and transforming 15,000+ records into Google Cloud Storage and BigQuery tables with daily cron automation.
- **Interactive Reaction Tester:** Full-stack, event-driven TypeScript web application capturing millisecond-precise reaction times, backed by a multi-tier PostgreSQL (Supabase) relational database.
- **Speedrun.com Data Export Tool:** Python CLI utility leveraging REST APIs and Pandas to extract and parse leaderboard data into structured CSVs.

---

## Tech Stack & Architecture

- **Framework:** Astro 7 (Static Site Generation & Content Layer API)
- **Languages:** TypeScript, Python, SQL, HTML5, CSS3, Markdown
- **Database & Cloud:** PostgreSQL (Supabase), Google Cloud Platform (BigQuery, Cloud Storage)
- **Deployment & Hosting:** GitHub Pages / Vercel with automated CI/CD build actions

---

## Repository Structure

```text
src/
├── consts.ts          # Global site metadata, titles, and navigation paths
├── content/
│   └── works/         # Markdown entries for featured software & data projects
├── layouts/           # BaseLayout wrapper containing header, nav, and footers
├── pages/
│   ├── index.astro    # High-impact homepage & technical competency grid
│   ├── about.astro    # Professional background, bio, and circular avatar setup
│   └── works.astro    # Dynamic project index renderer
└── styles/            # Global styling, color tokens, and typography
```
