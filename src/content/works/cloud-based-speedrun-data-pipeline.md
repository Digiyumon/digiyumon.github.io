---
title: "Cloud-Based Speedrun Data Pipeline"
description: "A scalable, cloud-native ETL pipeline ingesting and processing over 15,000+ speedrun records into structured BigQuery tables."
tech:
  - Python
  - Google Cloud Platform
  - BigQuery
  - Cloud Storage
  - SQL
github: "https://github.com/Digiyumon/Speedrun.com_api_python_cli"
repo: "https://github.com/Digiyumon/Speedrun.com_api_python_cli"
link: "https://github.com/Digiyumon/Speedrun.com_api_python_cli"
order: 2
publishDate: 2026-07-15
---

[ View Repository on GitHub →](https://github.com/Digiyumon/Speedrun.com_api_python_cli)

## Overview

Designed and deployed an automated, cloud-native ETL data pipeline that ingests and transforms over 15,000+ speedrun records from the Speedrun.com REST API into structured Google BigQuery tables for analytics.

## Key Technical Highlights

- **Automated Data Ingestion:** Fetches raw leaderboard JSON payloads via custom Python API scripts and stages them in **Google Cloud Storage (GCS)**.
- **Schema Normalization:** Normalizes nested JSON fields, handles missing values, and prepares structured data using **Pandas**.
- **Cloud Data Warehousing:** Loads validated records into **BigQuery** tables, enabling low-latency analytical SQL queries across multiple gaming platforms.

## Implementation & Staging Routine

The script handles data validation and stages clean CSV payloads into GCS before triggering BigQuery ingestion:

```python
# Automated schema validation and GCS upload routine
import pandas as pd
from google.cloud import storage

def validate_and_stage(json_data, bucket_name, destination_blob):
    df = pd.read_json(json_data)

    # Perform schema normalization & data cleaning
    df_clean = df.dropna(subset=['run_id', 'time_seconds'])

    # Upload staging CSV to Google Cloud Storage
    client = storage.Client()
    bucket = client.bucket(bucket_name)
    blob = bucket.blob(destination_blob)

    blob.upload_from_string(df_clean.to_csv(index=False), content_type='text/csv')
```
