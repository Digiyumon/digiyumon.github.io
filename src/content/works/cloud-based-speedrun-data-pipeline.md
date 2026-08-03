---
title: "Cloud-Based Speedrun Data Pipeline"
description: "A scalable, cloud-native ETL pipeline ingesting and processing over 15,000+ speedrun records into structured BigQuery tables."
tech:
  - Python
  - Google Cloud Platform
  - BigQuery
  - Cloud Storage
  - SQL
order: 2
publishDate: 2026-07-15
---

## Overview

Designed and deployed a scalable, cloud-native ETL pipeline that ingests and processes over 15,000+ speedrun records, transforming raw JSON into queryable BigQuery tables with daily automated updates.

## Technical Execution & Pipeline Architecture

Built a Python ETL pipeline using Google Cloud Platform to automate schema normalization, validation, and staging before loading transformed data into BigQuery.

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
