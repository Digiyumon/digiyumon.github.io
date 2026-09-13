---
title: "Cloud-Based Speedrun Data Pipeline"
description: "A scalable, cloud-native ETL pipeline ingesting and processing over 15,000+ speedrun records into structured BigQuery tables."
tech:
  - Python
  - Speedrun.com API
  - Google Cloud Platform
  - BigQuery
  - Cloud Storage
  - SQL
github: "https://github.com/Digiyumon/Speedrun.com_api_python_cli"
link: "https://github.com/Digiyumon/Speedrun.com_api_python_cli"
order: 2
publishDate: 2026-07-15
---

[ View Repository on GitHub →](https://github.com/Digiyumon/Speedrun.com_api_python_cli)

## Overview

Designed and deployed an automated, cloud-native ETL data pipeline that ingests and transforms over 15,000+ speedrun records from the Speedrun.com REST API into structured Google BigQuery tables for analytics.

## Key Technical Highlights

- **Dynamic REST API Extraction:** Engineered a Python CLI utility that queries the Speedrun.com REST API, dynamically constructing endpoints to extract game metadata, sub-categories, and variable-specific leaderboards.
- **Custom CSV Serialization & Validation:** Handled nested JSON responses to generate custom CSV schemas, including platform lookup parsing, emulator detection, dynamic time-column selection, and custom terminal progress indicators.
- **API Rate-Limit & Bottleneck Handling:** Implemented defensive polling delays, terminal loading animations, and user notifications to gracefully manage API rate limits when processing high-volume player profiles.
- **Cloud Storage Integration:** Integrated the `google-cloud-storage` SDK to authenticate via GCP service account keys, allowing users to stage extracted datasets directly to Google Cloud Storage buckets for downstream BigQuery ingestion.

## Implementation & API Query Routine

The CLI utility handles complex query string parameters, dynamically constructing request URLs to extract specific category variables directly from the Speedrun.com REST API:

```python
def get_category_leaderboard(game_id, game_category, variable_info):
    """Queries Speedrun.com API for category leaderboards, dynamically injecting category variables."""
    has_variable_been_added = False
    if variable_info is None:
        leaderboard_data = requests.get(
            f"[https://www.speedrun.com/api/v1/leaderboards/](https://www.speedrun.com/api/v1/leaderboards/){game_id}/category/{game_category}"
        )
    else:
        for i, variable in enumerate(variable_info):
            if variable_info[i]:
                variable_value = variable_info[i]['variable_value']
                variable_id = variable_info[i]['variable_id']
                if not has_variable_been_added:
                    request_string = f"[https://www.speedrun.com/api/v1/leaderboards/](https://www.speedrun.com/api/v1/leaderboards/){game_id}/category/{game_category}?var-{variable_id}={variable_value}"
                    has_variable_been_added = True
                else:
                    request_string += f"&var-{variable_id}={variable_value}"
        leaderboard_data = requests.get(request_string)

    return leaderboard_data.json()["data"]
```
