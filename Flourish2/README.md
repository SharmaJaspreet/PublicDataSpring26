# Analytical Visualization – SPD Officer Involved Shooting (OIS) Data

## Dataset

This project uses the SPD Officer Involved Shooting (OIS) Data from the Seattle Open Data portal.
The dataset contains information about police-involved shooting incidents, including officer details, subject information, weapons, injuries, and case outcomes.

## Goal

The goal of this project is to evaluate the completeness and reliability of the dataset, rather than to tell a narrative about the incidents themselves.

## Visualization

A horizontal bar chart was created using Flourish to show the percentage of missing values across key dataset fields.
The fields analyzed include:

* Disposition
* Officer Disciplined?
* Number of Rounds
* Subject Type of Weapon
* Officer Injured

## Findings

* The “Officer Disciplined?” field has the highest missing rate (24%), showing gaps in accountability data.
* The “Disposition” field also has missing values, limiting insight into case outcomes.
* This missing vaules accountability fields suggests the dataset is more reliable for describing incidents than evaluating accountability.

## Conclusion

The dataset provides useful information about police-involved shootings, but missing values in key accountability fields reduce its effectiveness for analyzing outcomes and transparency. Additional data cleaning or more complete reporting would be needed for deeper analysis.

## Files Included

* `visualization.png` – Image of the final Flourish chart
* `missing_data.csv` – Processed dataset used for visualization
* `README.md` – Project documentation

## Visualization Link

<div class="flourish-embed flourish-chart" data-src="visualisation/28656285"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/28656285/thumbnail" width="100%" alt="chart visualization" /></noscript></div>

## Source

Seattle Open Data – SPD Officer Involved Shooting (OIS) Data
>>>>>>> 0a41afc (Added README)
